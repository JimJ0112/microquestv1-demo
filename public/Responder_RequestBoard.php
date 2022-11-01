<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

    if(isset($_SESSION["municipality"])){
        $municipality = $_SESSION["municipality"];

        echo"<script> sessionStorage.setItem('municipality','$municipality')</script>";
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

</head>
<body onload="<?php
       if(isset($_SESSION['specialization'])){

            $specialization = $_SESSION['specialization'];

			echo "sessionStorage.setItem('specialization'".",'$specialization');";
        	echo 'setCategory(\''.$specialization.'\');';
			

			
			//echo'getCategories();';
			//echo'setSpecialization();';
			//echo 'setSpecialization()';
			

			echo 'init();';
        } else{
			
        	echo'getRequests();';
			echo'getCategories();';
			echo 'setSpecialization()';
        }



		if(isset($_SESSION['userID'])){
   	 		$userID = $_SESSION['userID'];
    		
    		echo "sessionStorage.setItem('myID','$userID');";
		}
    
    ?>">

<img src="img/b.jpg" id="BodyBackgroundImg"/>


<!-- NavBar-->

<?php
	require_once("imports/ResponderNavBar.php");
?>

<div id="RequestBoardContainer">

	<center> <h1 id="RequestBoardTitle"> Responder's Request Board </h1> </center>
	<div id="RequestsContainer">
		<div id="RequestsContainer-Controls">

			<ul id="RequestsContainer-ControlItems">

			<li class="RequestsContainer-ControlItem"> 
					<table>
						<tr>
							<td>
								<label class="switch">
 								 	<input type="checkbox" id="nearestRequestSlider">
 								 	<span class="slider round"></span>
								</label>
							</td>

							<td>
								<img src="img/location.png" class="RequestsContainer-ControlItemIcon"> 
							</td>

							<td>


								<span> Nearest Requests</span> 

							</td>
						</tr>
	   				</table>
				</li>

				<li class="RequestsContainer-ControlItem">
					<table>
						<tr>
							<td>
								<img src="img/requests.png" class="RequestsContainer-ControlItemIcon">
							</td>
							<td>
							<select id="RequestCategory"> 
								<option selected disabled> Category</option>
							</select> 
								<!--<span class="PageIndicator"> Requests</span>-->
							</td>
					 	</tr>
					</table>

				</li>



				<!--
				<li class="RequestsContainer-ControlItem" id="RequestsCategoryContainer"> 
					<select id="RequestCategory"> 
						<option selected disabled> Category</option>
					</select> 
				</li>
				-->

				<li class="RequestsContainer-ControlItem" id="RequestsSearchContainer"> 
			
						<button id="RequestBoardSearchButton">🔍</button>
					 	<input type="Search" placeholder="Search.." id="RequestBoardSearchBox"> 
			

				</li>

			</ul>

		</div>

		<div id="RequestsContainer-Content" >

<!--
			<div class="Requestcard">
				<table class="Requestor-ProfileDiv">
					<tr>
						<td>
							<img class="Requestor-ProfilePic" src="img/profile-icon-9.png"> 
						</td>

						<td>
							<span class="requestorUsername"> Username </span>
							<span class="requestorLocation"> Location </span>
						</td>
					</tr>
				</table>

				<ul class="Request-InfoList">
					<li class="requestCategory"> Category </li>
					<li class="requestDescription"> Desciption</li>
					<li class="dueDate"> Deadline </li>
					<li class="requestExpectedPrice"> Php pice</li>
					<li class="isNegotiable"> Negotiable</li>
				</ul>

				<footer class="requestcard-footer">
					<button class="ViewProfileButton"> View Profile</button>
					<button class="MessageButton"> Message </button>
				</footer>

				
			</div>

			<div class="requestCard">
				<td class="requestID"></td>

				<div class="requestBannerDiv">
					<img src="Images/RequestBanners/ComputerRelated.jpeg" class="bannerImage">
				</div>
				
				<td class="requestCategory"> <b>Category: </b>Computer related work</td>
				<td class="requestTitle"><b>Title: </b>Hack my missing account</td>
				<td class="requestDescription"><b>Description: </b> Hack my missing account </td>
				<td class="requestExpectedPrice"><b>Expected Price: </b>200</td>
				<td class="isNegotiable"><b>Negotiable: </b>Negotiable</td>
				<td class="dueDate"><b>Due date: </b>2022-06-20</td>
				<td class="requestorID"><b>Requestor ID: </b>46</td>
				<div class="userPhotoDiv">
					<img src="data:image/image/png;base64,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" class="userPhotoPic">
				</div>
				
				<a class="requestorUserName" href="Public_Profile.php?userID=46&amp;userType=Requestor">
					<b style="color:black;">Requestor: </b>James Bread
				</a>
				
					<td class="requestorLocation">
						<b>Location: </b>Abucay
					</td><a class="viewRequest" href="RequestInfo.php?requestID=30">View More</a>

			</div>
-->

	

		</div>

	</div>


</div>


<script src="js/Responder_RequestBoard.js"> </script> 
</body>
</html>