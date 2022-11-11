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
			echo 'setSpecialization();';
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



				

				<li class="RequestsContainer-ControlItem" id="RequestsSearchContainer"> 
			
						<button id="RequestBoardSearchButton">🔍</button>
					 	<input type="Search" placeholder="Search.." id="RequestBoardSearchBox"> 
			

				</li>

			</ul>

		</div>

		<div id="RequestsContainer-Content" >

		<div class="wrapper">
    <div class="request-card">
      <div class="request-card__image request-card__image">
        <img id="userPhotoPic" alt="Profile"/>
      </div>
      <div class="requestorLocation">Abucay</div>
      <div class="requestorUserName">James</div>
      <div class="requestDescription">
        drawing mo ko ng makisig na mythical creature
      </div>
	  <div class="dueDate">November 12</div>

      <div class="request-card__unit-stats request-card__unit-stats clearfix">
        <div class="one-third">
          <div class="requestCategory">Art<sup></sup></div>
          <div class="requestTitle">Traditional Art</div>
        </div>

        <div class="one-third no-border">
          <div class="requestExpectedPrice">150</div>
          <div class="isNegotiable">Negotiable</div>
        </div>

      </div>

    </div> <!-- end request-card barbarian-->
  </div>

	

		</div>

	</div>


</div>


<!--<script src="js/Responder_RequestBoard.js"> </script>--> 
</body>
</html>