<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

    if(isset($_SESSION["municipality"])){
        $municipality = $_SESSION["municipality"];

        echo"<script> sessionStorage.setItem('municipality','$municipality')</script>";
    }

	if(isset($_SESSION["userID"])){
		$userID = $_SESSION["userID"];
		echo "<script > sessionStorage.setItem('myID',$userID); </script>";
	}

    if(isset($_GET["msg"])){
        $msg = $_GET["msg"];
		echo "<script > alert('$msg') </script>";
    }
	
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Responder Requestboard
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>

	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Responder_RequestBoard.css">
	<script src="js/Responder_RequestBoard.js"> </script> 


</head>
<body>




<!-- NavBar-->

<?php

			require_once("imports/GuestNavBar.php");

?>

<br><br><br><br><br><br>
<center> 
	<h1> Not yet verified yet..</h1>  
	<p> 
		We will send you an email notifying you of your registration's status. <br/>
		When you recieve the email notification, please re-login your account to be able to access the system <br/>
		Once your registration is approved, you will be able to access all the Microquest's features 

		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		- Microquest Team
	</p>




</center>

</body>
</html>