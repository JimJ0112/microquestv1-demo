

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Responder Requestboard
	</title>
	
	<link rel="stylesheet" type="text/css" href="css/NavBar.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/NavBar.js"> </script>

</head>
<body onload="requestAndShowPermission()">


<!-- NavBar-->
<div id="NavContainer">
	<img src="img/logo.png" id="Nav-Logo" title="Home"> 
	<ul id="NavBar">
		

	
	<!--
		<a href="Responder_Transactions.php">
			<li class="Nav-item" title="My Transactions">
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Responder_Transactions.php"){
						echo '<u> Transactions </u>';
					} else{
						echo "Transactions";
					}
				?>
			</li>
		</a>

	-->

	<li class="Nav-item" title="My Transactions">
				<div class="dropdown">
    				<button class="dropbtn">

					<?php
						$pagename = basename($_SERVER['PHP_SELF']);
						if($pagename === "Responder_Transactions.php"){
							echo '<u> Transactions </u>';
						} else if($pagename === "Responder_ServiceTransactions.php"){
							echo '<u> Service Transactions </u>';
						} else if($pagename === "Responder_RequestTransactions.php"){
							echo '<u> Request Transactions </u>';
						} else if($pagename === "Responder_PasabuyTransactions.php"){
							echo '<u> Pasabuy Transactions </u>';
						} else{
							echo "Transactions";
						}
					?>

      				<i class="fa fa-caret-down"> ▼ </i>
    				</button>
    				<div class="dropdown-content">
      					<a href="Responder_ServiceTransactions.php">Service </a>
      					<a href="Responder_RequestTransactions.php">Request </a>
      					<a href="Responder_PasabuyTransactions.php">Pasabuy </a>
    				</div>
  				</div>
				
	</li>

		<a href="Responder_RequestBoard.php">
			 <li class="Nav-item" title="RequestBoard"> 
			 	<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Responder_RequestBoard.php" || $pagename === "RequestInfo.php"){
						echo '<u> RequestBoard </u>';
					} else{
						echo "RequestBoard";
					}
				?>
			</li> 
		</a>

		<a href="Responder_MyServices.php"> 
			<li class="Nav-item" title="My Services"> 
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Responder_MyServices.php" || $pagename === "Responder_CreateService.php"){
						echo '<u> My Services </u>';
					} else{
						echo "My Services";
					}
				?>
			</li> 
		</a>


		<a href="Responder_PasabuyProducts.php"> 
			<li class="Nav-item" title="My Products"> 
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					
					if($pagename === "Responder_PasabuyProducts.php"){
						echo '<u> My Products </u>';
					} else{
						echo "My Products";
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
						
						
								echo "  <b> $username </b> <br/>";
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
		
		<!--
			<a href="Backend/Logout.php"><li class="Nav-item" id="LogOutButton" title="Log Out">Log out</li></a>	
		-->
	</ul>
</div>

	<div id="navMenu" style="display:none;">
		<ul>
		<?php
				if(isset($_SESSION['userID'])){
					$userID = $_SESSION['userID'];
					$profileLink="ViewUserProfile.php?userID=$userID&userType=Responder";
				}else{
					$profileLink="#";
				}
				
			?>
		<a href="<?php echo $profileLink;?>"><li class="NavMenu-item" title="Log Out">View Profile  </li></a>
		<a href=""><li class="NavMenu-item" title="Log Out">Edit Profile  </li></a>
		<a href="Backend/Logout.php"><li class="NavMenu-item" title="Log Out">Log out</li></a>

		</ul>

	</div>

	<div id="navNotifs" style="display:none;" >


	</div>

	

	<?php
		$userID = $_SESSION["userID"];
		echo "<script > getUserImage($userID)</script>";
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
					$profileLink="ViewUserProfile.php?userID=$userID&userType=Responder";
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
						
						
								echo "  <b> $username </b> <br/>";
								echo " <span style='font-weight: lighter; font-size:small;'> $usertype </span> | <span style='font-weight: lighter; font-size:small;'> $municipality </span>";
							}
						?>
						<hr/>
			</a>


				<div class="dropdown MobileMenu-listItem">
    				<button class="dropbtn">

					<?php
						$pagename = basename($_SERVER['PHP_SELF']);
						if($pagename === "Responder_Transactions.php"){
							echo '<div class="selectedMobileNav"> Transactions </div>';
						} else if($pagename === "Responder_ServiceTransactions.php"){
							echo '<div class="selectedMobileNav"> Service Transactions </div>';
						} else if($pagename === "Responder_RequestTransactions.php"){
							echo '<div class="selectedMobileNav"> Request Transactions </div>';
						} else if($pagename === "Responder_PasabuyTransactions.php"){
							echo '<div class="selectedMobileNav"> Pasabuy Transactions </div>';
						} else{
							echo "Transactions";
						}
					?>

      					<i class="fa fa-caret-down"> ▼ </i>
    				</button>
    				<div class="dropdown-content">
      					<a href="Responder_ServiceTransactions.php">Service </a>
      					<a href="Responder_RequestTransactions.php">Request </a>
      					<a href="Responder_PasabuyTransactions.php">Pasabuy </a>
    				</div>
  				</div>

				  <a href="Responder_RequestBoard.php" class="MobileMenu-listItem" >
			 
			 		<?php
						$pagename = basename($_SERVER['PHP_SELF']);

						if($pagename === "Responder_RequestBoard.php" || $pagename === "RequestInfo.php"){
							echo '<div class="selectedMobileNav">RequestBoard </div>';
						} else{
							echo "RequestBoard";
						}
					?>
			
				  </a>

				  <a href="Responder_MyServices.php" class="MobileMenu-listItem"> 
			
					<?php
						$pagename = basename($_SERVER['PHP_SELF']);
							if($pagename === "Responder_MyServices.php" || $pagename === "Responder_CreateService.php"){
								echo '<div class="selectedMobileNav"> My Services </div>';
							} else{
								echo "My Services";
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