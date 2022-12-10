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
	//require_once("imports/ResponderNavBar.php");

	if(isset($_SESSION["userStatus"]) && isset($_SESSION["userType"])){
		$status = $_SESSION["userStatus"];
		$userType = $_SESSION["userType"];

		if($status === "not verified"){
			require_once("imports/GuestNavBar.php");
		}else{
			if($userType === "Responder"){
				require_once("imports/ResponderNavBar.php");
			} else{
				header("location: Requestor_AvailableServices.php?msg=Not a Responder!");
			}

		}


	}
?>

<div id="RequestBoardContainer">

	<center> <h1 id="RequestBoardTitle"> Responder's Request Board </h1> </center>
	<div class="grid-container" id="cetegoriesContainer">
		
	  	<div class="grid-item grid-header" disabled>CATEGORIES</div>
	  	<div class="grid-item">2</div>
	  	<div class="grid-item">3</div>  
	  	<div class="grid-item">4</div>
	  	<div class="grid-item">5</div>
	  	<div class="grid-item">6</div>  
	  	<div class="grid-item">7</div>
	  	<div class="grid-item">8</div>
	  	<div class="grid-item">9</div>  
		
	</div>
	<div id="RequestsContainer">
		<div id="RequestsContainer-Controls">

			<ul id="RequestsContainer-ControlItems">

			<li class="RequestsContainer-ControlItem"> 
					<table>
						<tr>
							<td>
								<label class="switch" for="nearestRequestSlider">
 								 	<input type="checkbox" id="nearestRequestSlider" onchange="SliderAction()">
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
								<!--<img src="img/requests.png" class="RequestsContainer-ControlItemIcon">-->
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

			<div id="RequestsContainer-Content">
		
				<div class="wrapper">
    				<div class="request-card">
						<div class="grid-head">
    		  				<div class="request-card__image request-card__image">
    		    				<img id="userPhotoPic" class="userPhotoPic" alt="Profile"/>
    		  				</div>
							<div class="nameLoc">
    		  					<div class="requestorUserName">James</div>

								<div class="requestorLocation">Abucay</div>
							</div>
						</div>
						<div class="request-card__unit-stats request-card__unit-stats clearfix">
    		    			<div class="one-third">
    		    				<div class="requestCategory">Art</div>
    		    				<div class="requestTitle">Traditional Art</div>
    		    			</div>
		
    		    			
    		  			</div>
      					<div class="requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
						<div class="footer">
							<div class="price">
    		    					<div class="requestExpectedPrice">150</div>
    		    					<div class="isNegotiable">Negotiable</div>
    		    			</div>
			  				<div class="dueDate">November 12</div>
						</div>
			
      					
			
   					</div> 
					
					

  				</div>
				  <div class="wrapper">
    				<div class="request-card">
						<div class="grid-head">
    		  				<div class="request-card__image request-card__image">
    		    				<img id="userPhotoPic" class="userPhotoPic" alt="Profile"/>
    		  				</div>
							<div class="nameLoc">
    		  					<div class="requestorUserName">James</div>

								<div class="requestorLocation">Abucay</div>
							</div>
						</div>
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
      					<div class="requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
			
			  			<div class="dueDate">November 12</div>
			
      					
			
   					</div> 
					
					

  				</div>
				  <div class="wrapper">
    				<div class="request-card">
						<div class="grid-head">
    		  				<div class="request-card__image request-card__image">
    		    				<img id="userPhotoPic" class="userPhotoPic" alt="Profile"/>
    		  				</div>
							<div class="nameLoc">
    		  					<div class="requestorUserName">James</div>

								<div class="requestorLocation">Abucay</div>
							</div>
						</div>
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
      					<div class="requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
			
			  			<div class="dueDate">November 12</div>
			
      					
			
   					</div> 
					
					

  				</div>
				  <div class="wrapper">
    				<div class="request-card">
						<div class="grid-head">
    		  				<div class="request-card__image request-card__image">
    		    				<img id="userPhotoPic" class="userPhotoPic" alt="Profile"/>
    		  				</div>
							<div class="nameLoc">
    		  					<div class="requestorUserName">James</div>

								<div class="requestorLocation">Abucay</div>
							</div>
						</div>
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
      					<div class="requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
			
			  			<div class="dueDate">November 12</div>
			
      					
			
   					</div> 
					
					

  				</div>
				  <div class="wrapper">
    				<div class="request-card">
						<div class="grid-head">
    		  				<div class="request-card__image request-card__image">
    		    				<img id="userPhotoPic" class="userPhotoPic" alt="Profile"/>
    		  				</div>
							<div class="nameLoc">
    		  					<div class="requestorUserName">James</div>

								<div class="requestorLocation">Abucay</div>
							</div>
						</div>
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
      					<div class="requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
			
			  			<div class="dueDate">November 12</div>
			
      					
			
   					</div> 
					
					

  				</div>
				  <div class="wrapper">
    				<div class="request-card">
						<div class="grid-head">
    		  				<div class="request-card__image request-card__image">
    		    				<img id="userPhotoPic" class="userPhotoPic" alt="Profile"/>
    		  				</div>
							<div class="nameLoc">
    		  					<div class="requestorUserName">James</div>

								<div class="requestorLocation">Abucay</div>
							</div>
						</div>
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
      					<div class="requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
			
			  			<div class="dueDate">November 12</div>
			
      					
			
   					</div> 
					
					

  				</div>
				
			

			</div>

		</div>


	</div>

<script> getCategories(); </script>
<script src="js/Responder_RequestBoard.js"> </script> 
</body>
</html>