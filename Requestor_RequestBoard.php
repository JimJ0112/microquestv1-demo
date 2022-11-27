<?php 
session_start();

    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Requestor's Requestboard
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Requestor_RequestBoard.css">

</head>
<body id="Requestor_RequestBoardBackground" onload=
	<?php
		if(isset($_SESSION['userID'])){
			$userID = $_SESSION['userID'];
			echo "'getMyRequests($userID)'";
		}
	?>
>

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");
?>


<?php 
	    if(isset($_SESSION["municipality"])){
			$municipality = $_SESSION["municipality"];
	
			echo"<script> sessionStorage.setItem('municipality','$municipality')</script>";


		}


		date_default_timezone_set("Asia/Manila");
		$today = date("Y-m-d");

		echo "<script> sessionStorage.setItem('today','$today')</script>";
?>
<!--Main-->
	<div id="RequestBoardContainer">

		<center> <h1 id="RequestBoardTitle"> Requestor's Request Board </h1> </center>
		<div id="RequestsContainer">
			<div id="RequestsContainer-Controls">

				<ul id="RequestsContainer-ControlItems">

					<li class="col- RequestsContainer-ControlItem"> 
						<table>
							<tr>
								<td>
									<img src="img/requests.png"class="col- RequestsContainer-ControlItemIcon"> 
								</td>

								<td>
									<span class="col- PageIndicator"> My Requests</span> 
								</td>
							</tr>
	   					</table>
					</li>

					<li class="col- RequestsContainer-ControlItem">
						<table>
							<tr>
								<td>
									<img src="img/g838.png" class="col- RequestsContainer-ControlItemIcon">
								</td>
								<td>
									<a href="Requestor_AvailableServices.php"> <span> Available Services </span> </a>
								</td>
					 		</tr>
						</table>

					</li>



					<li class="col- RequestsContainer-ControlItem" id="RequestsCategoryContainer"> 
						
							<a href="Requestor_CreateRequest.php" id="CreateRequestButton" value="Create Request">
								Create Request
							</a>
						
					</li>

				</ul>

			</div>

			<div id="RequestsContainer-Content">
			<div class="col- wrapper">
    				<div class="col- request-card">
    		  			<div class="col- request-card__image request-card__image">
						    <div class="col- requestTitle">Traditional Art</div>
							<div class="col- requestCategory">Art<sup></sup></div>
						</div>
			
						

      					<div class="col- requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
			
			
      						<div class="col- request-card__unit-stats request-card__unit-stats clearfix">
    		    				<div class="col- one-third">
									<div class="col- requestExpectedPrice">150</div>
    		    		  			<div class="col- isNegotiable">Negotiable</div>
    		    		  			
    		    				</div>
			
    		    				<div class="col- one-third no-border">
    		    		  			<div class="col- dueDateValue">Tomorrow</div>
    		    		  			<div class="col- dueDate">dueDate</div>
    		    				</div>
    		  				</div>

   					</div> <!-- end request-card -->

  				</div>

					

				
			

		</div>
	</div>






<div id="popUpBack"> 
	<div id="formsContainer"> 
		
		<form id="UpdateForm" action="Backend/UpdateRequest.php" method="post">
			<div id="closeImage" class="col- closeForm" onclick="closeForms()"> ✕ </div>
		<center>
			<h1> Update Request</h1>
		</center>
		<input type="hidden" name="requestID" id="UpdateFormRequestID" Required/>

		<table>

			<tr>
				<td class="col- tdleft">
					<span>Title</span>
				</td>
				<td class="col- tdright">
					<input type="Text" name="updateTitle" id="updateTitle" class="col- UpdateRequests-Input" Required/>
				</td>
			</tr> 

			<tr>
				<td class="col- tdleft">
					<span>Description</span>
				</td>
				<td class="col- tdright">
					<textarea rows="" cols="" name="updateDescription" id="updateDescription" class="col- UpdateRequests-Input" Required>
					</textarea>
				</td>
			</tr> 

			<tr>
				<td class="col- tdleft">
					<span>Due Date</span>
				</td>

				<td class="col- tdright">
					<input type="date" name="updateDueDate" id="updateDueDate" class="col- UpdateRequests-Input" Required/>
				</td>
			</tr> 

			<tr>
				<td class="col- tdleft">
					<span>Price</span>
				</td>

				<td class="col- tdright">
					 <input type="Number" name="updatePrice" id="updatePrice" class="col- UpdateRequests-Input" placeholder="Php" Required/>
				</td>
			</tr> 

			<tr>
				<td class="col- tdleft">
					<span>Negotiable</span>
				</td>

				<td class="col- tdright">
					<input type="radio" name="updateNegotiable" id="updateNegotiable" class="col- UpdateRequests-Input" value="Negotiable" Required/> Yes
					<input type="radio" name="updateNegotiable" id="updateNegotiable" class="col- UpdateRequests-Input" value="Not Negotiable"/> No
				</td>
			</tr>

			<tr>
				<td>

				</td>
				<td id="UpdateControls">
				 	<input type="submit" value="Update" class="col- UpdateControls-Button">
					<input type="reset" value="Cancel" class="col- UpdateControls-Button" onclick="hideUpdateRequest()">
				</td>
			</tr>

		</table>


		</form>
	



					<div id="ViewRequest-Form">
					<div id="closeImage" class="col- closeForm" onclick="closeForms()"> ✕ </div>
					<center>
						<h1> View Request</h1>
					</center>

					<table>

						<tr>
							<td class="col- tdleft">
								<span>Title</span>
							</td>
							<td class="col- tdright">
								<span id="viewTitle">Title</span>
							</td>
						</tr> 

						<tr>
							<td class="col- tdleft">
								<span>Description</span>
							</td>
							<td class="col- tdright">
								<span id="viewDescription">Description</span>
							</td>
						</tr> 


						<tr>
							<td class="col- tdleft">
								<span>Due Date</span>
							</td>

							<td class="col- tdright">
								<span id="viewDueDate">Due Date</span>
							</td>
						</tr> 

						<tr>
							<td class="col- tdleft">
								<span>Price</span>
							</td>

							<td class="col- tdright">
								<span id="viewPrice">Price</span>
							</td>
						</tr> 

						<tr>
							<td class="col- tdleft">
								<span>Negotiable</span>
							</td>

							<td class="col- tdright">
								<span id="viewNegotiable">Negotiable</span>
							</td>
						</tr>

						<tr>
							<td>

							</td>
							<td id="UpdateControls">
								<input type="reset" value="Edit" class="col- ViewControls-Button" id="viewControlsEditButton">
							
							</td>
						</tr>

					</table>


				</div>
	</div>

</div>


<script src="js/Requestor_RequestBoard.js"> </script>
</body>
</html>