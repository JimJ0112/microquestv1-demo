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
		

	


		

			<li class="Nav-item" title="RequestBoard">

			</li> 
			
	

	
			<li class="Nav-item" title="Available Services"> 

			</li> 


	
			<li class="Nav-item" title="Available Services"> 

			</li> 
		

	
			<li class="Nav-item" title="Available Services"> 
	
			</li> 
		
	
	
			<li class="Nav-item" title="My Messages">

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
	
	
		<a href="Backend/Logout.php"><li class="NavMenu-item" title="Log Out">Log out</li></a>

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
			






			<a href="Backend/Logout.php" class="MobileMenu-listItem" title="Available Services">
				Log out
			</a>





			


		</div>


	</div>

</div>

</body>
</html>