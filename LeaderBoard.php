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
		LeaderBoard
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>

	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/LeaderBoard.css">
	<script src="js/LeaderBoard.js"> </script>

</head>
<body>


<!-- NavBar-->

<?php


	if(isset($_SESSION["userType"])){
		$userType = $_SESSION["userType"];

		if($userType === "Responder"){
			require_once("imports/ResponderNavBar.php");
		} else if($userType === "Requestor") {
			require_once("imports/RequestorNavBar.php");

		} else{
			header("location:index.html");
		}
		
	}
	
?>




<div id="LeaderBoardContainerBack"> 

	<div class="grid-container">
	  	<div class="grid-item">1</div>
	  	<div class="grid-item">2</div>
	  	<div class="grid-item">3</div>  
	  	<div class="grid-item">4</div>
	  	<div class="grid-item">5</div>
	  	<div class="grid-item">6</div>  
	  	<div class="grid-item">7</div>
	  	<div class="grid-item">8</div>
	  	<div class="grid-item">9</div>  
	</div>
<center>
<br/>
<h1> LeaderBoard </h1>
<br/> 
</center>
	<select id="LeaderBoardCategories" onchange = "getSelectValue()">
	</select>
	<br/>
	<br/>

	<table id="LeaderBoardTable"> 

		<thead id="LeaderBoardHead"> 
			<tr> 
				<td> Rank </td>
				<td> User </td>
				<td> Ratings </td>
			</tr>


		</thead>

		<tbody id="LeaderBoardContent"> </tbody>

	</table>

</div>

	<script> 	
		getServices();
		getSelectValue();

	</script>
</body>
</html>