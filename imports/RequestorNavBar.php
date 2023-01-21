<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Responder Requestboard
	</title>
	<script src="js/NavBar.js"> </script>

	<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">-->
    
	
	<link rel="stylesheet" type="text/css" href="css/NavBar.css">
	<link rel="stylesheet" href="css/responsive.css">

</head>
<body onload="">

<!--<img src="img/b.jpg" id="RequestboardBackground"/>-->

<!-- NavBar-->
<div id="NavContainer">

	<img src="img/logo.png" id="Nav-Logo" title="Home"> 
	<ul id="NavBar">
		

	
			<li class="Nav-item" title="My Transactions">
				<div class="dropdown">
    				<button class="dropbtn">

					<?php
						$pagename = basename($_SERVER['PHP_SELF']);
						if($pagename === "Requestor_Transactions.php"){
							echo '<u> Transactions </u>';
						} else if($pagename === "Requestor_ServiceTransactions.php"){
							echo '<u> Service Transactions </u>';
						} else if($pagename === "Requestor_RequestTransactions.php"){
							echo '<u> Request Transactions </u>';
						} else if($pagename === "Requestor_PasabuyTransactions.php"){
							echo '<u> Pasabuy Transactions </u>';
						} else{
							echo "Transactions";
						}
					?>

      					<i class="fa fa-caret-down"> ▼ </i>
    				</button>
    				<div class="dropdown-content">
      					<div clas="listDown"><a href="Requestor_ServiceTransactions.php">Service </a>
      					<a href="Requestor_RequestTransactions.php">Request </a>
      					<a href="Requestor_PasabuyTransactions.php">Pasabuy </a>
    				</div>
  				</div>
				
			</li>

		

		<a href="Requestor_RequestBoard.php"> 
			<li class="Nav-item" title="RequestBoard">
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Requestor_RequestBoard.php" || $pagename === "Requestor_CreateRequest.php"){
						echo '<u> My Requests </u>';
					} else{
						echo "My Requests";
					}
				?>
			</li> 
			
		</a>

		<a href="Requestor_AvailableServices.php"> 
			<li class="Nav-item" title="Available Services"> 
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Requestor_AvailableServices.php" || $pagename === "Requestor_SelectedService.php"){
						echo '<u> Services </u>';
					} else{
						echo "Services";
					}
				?>
			</li> 
		</a>

		<a href="Requestor_PasabuyProducts.php"> 
			<li class="Nav-item" title="Available Services"> 
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Requestor_PasabuyProducts.php" || $pagename === "Requestor_PasabuyProducts.php"){
						echo '<u> Pasabuy </u>';
					} else{
						echo "Pasabuy";
					}
				?>
			</li> 
		</a>

		<a href="LeaderBoard.php"> 
			<li class="Nav-item" title="Available Services"> 
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "LeaderBoard.php"){
						echo '<u> LeaderBoard </u>';
					} else{
						echo "LeaderBoard";
					}
				?>
			</li> 
		</a>
	
		<a href="Messages.php">
			<li class="Nav-item" title="My Messages">
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Messages.php"){
						echo '<u> Messages </u>';
					} else{
						echo "Messages";
					}
				?>
				<span id="redDotOnNotification"> • </span>
			</li>
		</a>

		

			<li class="Nav-item" id="Nav-notif"> 
				<span id="redDotOnBellNotification"> • </span>
					<img src="img/bellIcon.png" class="bellIcon" onclick="showNotifs()" id="bellIcon"/>
			</li>
	

		<span onclick='openNavMenu()'>
		
			<li class="Nav-item" title="Me" id="userInfoNav">
		
			<table id="NavItemTable">
				<tr>


					<td class="NavTD">
						<div id='NavImageContainer'> </div>
					</td>

				
					<td class="NavTD">
						<?php
				    		if(isset($_SESSION["userName"])){
								$username = $_SESSION["userName"];
								$usertype = $_SESSION["userType"];
								$municipality = $_SESSION["municipality"] ;

								echo "<b> $username </b>  <br/>";
								echo " <span style='font-weight: lighter; font-size:small;'> $usertype </span> | <span style='font-weight: lighter; font-size:small;'> $municipality </span>";
							}
						?>
					</td>

					<td class="NavTD">
						<span id='caret'> ▼ </span>
					</td>
				</tr>
			</table>
			

			</li>
		</span>

	</ul>
</div>


	<div id="navMenu" style="display:none;">
		<ul>
			<?php
				if(isset($_SESSION['userID'])){
					$userID = $_SESSION['userID'];
					$profileLink="ViewUserProfile.php?userID=$userID&userType=Requestor";
				}else{
					$profileLink="#";
				}
				
			?>
		<div class="listDown"><a href="<?php echo $profileLink;?>"><li class="NavMenu-item" title="Log Out">View Profile  </li></a></div>
		<div class="listDown"><a href="Policies.php"><li class="NavMenu-item" title="Log Out"> Policies  </li></a></div>
		<div class="listDown"><a href="Backend/Logout.php"><li class="NavMenu-item" title="Log Out">Log out</li></a><div>

		</ul>

	</div>

	<div id="navNotifs" style="display:none;">


	</div>


	
		
	

	<?php
		$userID = $_SESSION["userID"];
		echo "<script > getUserImage($userID); getNewMessages($userID) </script>";

	?>

	

<!-- Top Navigation Menu -->

<div id="MobileNav"> 
	<div id="MobileNav-logo">
		<img id="MobileNav-Img" src="img/logo.png"> 
    </div>

	<!-- Hamburger Button-->
	<div id="HamburgerButtonDiv">
		<button id="HamburgerButton" onclick="showMobileNavMenu(this)">
			<div class="bar1"></div>
  			<div class="bar2"></div>
  			<div class="bar3"></div>
		</button>
	</div>

		<!-- Hamburger Button-->
	<div id="MobileMenu">

		<div id="MobileMenu-list"> 

			<?php
				if(isset($_SESSION['userID'])){
					$userID = $_SESSION['userID'];
					$profileLink="ViewUserProfile.php?userID=$userID&userType=Requestor";
				}else{
					$profileLink="#";
				}
				
			?>
			
			<a href="<?php echo $profileLink;?>" class="MobileMenu-listItem" id="userProfileNavMenu" title="Available Services"> 

				<div id='MobileNavImageContainer'> </div>

						<?php
				    		if(isset($_SESSION["userName"])){
								$username = $_SESSION["userName"];
								$usertype = $_SESSION["userType"];
								$municipality = $_SESSION["municipality"] ;

								echo "<b> $username </b>  <br/>";
								echo " <span style='font-weight: lighter; font-size:small;'> $usertype </span> | <span style='font-weight: lighter; font-size:small;'> $municipality </span>";
							}
						?>
						<hr/>
			</a>


				<div class="dropdown MobileMenu-listItem">
    				<button class="dropbtn">

					<?php
						$pagename = basename($_SERVER['PHP_SELF']);
						if($pagename === "Requestor_Transactions.php"){
							echo '<div class="selectedMobileNav"> Transactions </div>';
						} else if($pagename === "Requestor_ServiceTransactions.php"){
							echo '<div class="selectedMobileNav"> Service Transactions </div>';
						} else if($pagename === "Requestor_RequestTransactions.php"){
							echo '<div class="selectedMobileNav"> Request Transactions </div>';
						} else if($pagename === "Requestor_PasabuyTransactions.php"){
							echo '<div class="selectedMobileNav">  Pasabuy Transactions </div>';
						} else{
							echo "Transactions";
						}
					?>

      					<i class="fa fa-caret-down"> ▼ </i>
    				</button>
    				<div class="dropdown-content">
      					<a href="Requestor_ServiceTransactions.php">Service </a>
      					<a href="Requestor_RequestTransactions.php">Request </a>
      					<a href="Requestor_PasabuyTransactions.php">Pasabuy </a>
    				</div>
  				</div>

			<a href="Requestor_AvailableServices.php" class="MobileMenu-listItem" title="Available Services"> 

					<?php
						$pagename = basename($_SERVER['PHP_SELF']);
						if($pagename === "Requestor_AvailableServices.php" || $pagename === "Requestor_SelectedService.php"){
							echo '<div class="selectedMobileNav">  Services  </div>';
						} else{
							echo "Services";
						}
					?>
				
			</a>

			
			<a href="Requestor_RequestBoard.php" class="MobileMenu-listItem" title="Available Services"> 

				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Requestor_RequestBoard.php" || $pagename === "Requestor_CreateRequest.php"){
						echo '<div class="selectedMobileNav">  My Requests </div>';
					} else{
						echo "My Requests";
					}
				?>

			</a>

			<a href="Requestor_PasabuyProducts.php" class="MobileMenu-listItem" title="Available Services"> 
				
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Requestor_PasabuyProducts.php" || $pagename === "Requestor_PasabuyProducts.php"){
						echo '<div class="selectedMobileNav">  Pasabuy </div>';
					} else{
						echo "Pasabuy";
					}
				?>
			
			</a>

			<a href="LeaderBoard.php" class="MobileMenu-listItem" title="Available Services"> 
			
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "LeaderBoard.php"){
						echo '<div class="selectedMobileNav">  LeaderBoard </div>';
					} else{
						echo "LeaderBoard";
					}
				?>
			
			</a>

			<a href="Messages.php" class="MobileMenu-listItem" title="Available Services">
				
				<span id="redDotOnNotificationMobile"> • </span>
					<?php
						$pagename = basename($_SERVER['PHP_SELF']);
						if($pagename === "Messages.php"){
							echo '<div class="selectedMobileNav">  Messages </div>';
						} else{
							echo "Messages";
						}
					?>
				
				
			</a>


			<a href="Backend/Logout.php" class="MobileMenu-listItem" title="Available Services">
				Log out
			</a>





			


		</div>


	</div>

</div>

</body>
</html>