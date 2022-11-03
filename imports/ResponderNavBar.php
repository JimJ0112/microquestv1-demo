

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
	

</head>
<body>


<!-- NavBar-->
<div id="NavContainer">
	<img src="img/logo.png" id="Nav-Logo" title="Home"> 
	<ul id="NavBar">
		

	
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
					if($pagename === "Responder_MyServices.php"){
						echo '<u> My Services </u>';
					} else{
						echo "My Services";
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
			</li>
		</a>
		
		<a onclick='openNavMenu()'>
			<li class="Nav-item" title="Me" id="userInfoNav">
				
				
				
				<?php
				    if(isset($_SESSION["userName"])){
						$username = $_SESSION["userName"];
						$usertype = $_SESSION["userType"];
						$municipality = $_SESSION["municipality"] ;
						
						
						echo " <span> <div id='NavImageContainer'> </div> <b> $username </b> </span> <span id='caret'> ▼ </span> <br/>";
						echo " <span style='font-weight: lighter; font-size:small;'> $usertype </span> | <span style='font-weight: lighter; font-size:small;'> $municipality </span>";
					}
				?>
			</li>
		</a>
		
		<!--
			<a href="Backend/Logout.php"><li class="Nav-item" id="LogOutButton" title="Log Out">Log out</li></a>	
		-->
	</ul>
</div>

	<div id="navMenu" style="display:none;">
		<ul>
		<a href=""><li class="NavMenu-item" title="Log Out">View Profile  </li></a>
		<a href=""><li class="NavMenu-item" title="Log Out">Edit Profile  </li></a>
		<a href="Backend/Logout.php"><li class="NavMenu-item" title="Log Out">Log out</li></a>

		</ul>

	</div>

	<script src="js/NavBar.js"> </script>

</body>
</html>