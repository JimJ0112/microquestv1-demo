<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Responder Requestboard
	</title>
	
	<link rel="stylesheet" type="text/css" href="css/NavBar.css">
</head>
<body>

<!--<img src="img/b.jpg" id="RequestboardBackground"/>-->

<!-- NavBar-->
<div id="NavContainer">
	<img src="img/logo.png" id="Nav-Logo" title="Home"> 
	<ul id="NavBar">
		

	
		<a href="Requestor_Transactions.php">
			<li class="Nav-item" title="My Transactions">
				<?php
					$pagename = basename($_SERVER['PHP_SELF']);
					if($pagename === "Requestor_Transactions.php"){
						echo '<u> Transactions </u>';
					} else{
						echo "Transactions";
					}
				?>
			</li>
		</a>
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
		<a href="Requestor_Transactions.php"><li class="Nav-item" title="Me">
				<?php
				    if(isset($_SESSION["userName"])){
						$username = $_SESSION["userName"];
						$usertype = $_SESSION["userType"];
						$municipality = $_SESSION["municipality"] ;

						echo "<b> $username </b> <br/>";
						echo " <span style='font-weight: lighter; font-size:small;'> $usertype </span> | <span style='font-weight: lighter; font-size:small;'> $municipality </span>";
					}
				?>
			</li></a>
		<a href="Backend/Logout.php"><li class="Nav-item" id="LogOutButton" title="Log Out">Log out</li></a>
		
	</ul>
</div>



</body>
</html>