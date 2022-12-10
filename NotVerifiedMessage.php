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
<body onload="<?php
       if(isset($_SESSION['specialization'])){

            $specialization = $_SESSION['specialization'];

			echo "sessionStorage.setItem('specialization'".",'$specialization');";
        	echo 'setCategory(\''.$specialization.'\');';
			

		
			

			echo 'init();';
        } else{
			
        	echo'getRequests();';
			echo'getCategories();';
		
        }



		if(isset($_SESSION['userID'])){
   	 		$userID = $_SESSION['userID'];
    		
    		echo "sessionStorage.setItem('myID','$userID');";
		}
    
    ?>">




<!-- NavBar-->

<?php

			require_once("imports/GuestNavBar.php");
            
?>


<h1> Not yet verified </h1> 

</body>
</html>