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

					<li class="RequestsContainer-ControlItem"> 
						<table>
							<tr>
								<td>
									<img src="img/requests.png"class="RequestsContainer-ControlItemIcon"> 
								</td>

								<td>
									<span class="PageIndicator"> My Requests</span> 
								</td>
							</tr>
	   					</table>
					</li>

					<li class="RequestsContainer-ControlItem">
						<table>
							<tr>
								<td>
									<img src="img/g838.png" class="RequestsContainer-ControlItemIcon">
								</td>
								<td>
									<a href="Requestor_AvailableServices.php"> <span> Available Services </span> </a>
								</td>
					 		</tr>
						</table>

					</li>



					<li class="RequestsContainer-ControlItem" id="RequestsCategoryContainer"> 
						
							<a href="Requestor_CreateRequest.php" id="CreateRequestButton" value="Create Request">
								Create Request
							</a>
						
					</li>

				</ul>

			</div>

			<div id="RequestsContainer-Content">
			<div class="wrapper">
    				<div class="request-card">
    		  			<div class="request-card__image request-card__image">
						    <div class="requestTitle">Traditional Art</div>
							<div class="requestCategory">Art<sup></sup></div>
						</div>
			
						

      					<div class="requestDescription">
    		   		 		drawing mo ko ng makisig na mythical creature
    		  			</div>
			
			
      						<div class="request-card__unit-stats request-card__unit-stats clearfix">
    		    				<div class="one-third">
									<div class="requestExpectedPrice">150</div>
    		    		  			<div class="isNegotiable">Negotiable</div>
    		    		  			
    		    				</div>
			
    		    				<div class="one-third no-border">
    		    		  			<div class="dueDateValue">Tomorrow</div>
    		    		  			<div class="dueDate">dueDate</div>
    		    				</div>
    		  				</div>

   					</div> <!-- end request-card -->

  				</div>

					

				
			

		</div>
	</div>






<div id="popUpBack"> 
	<div id="formsContainer"> 
		
		<form id="UpdateForm" action="Backend/UpdateRequest.php" method="post">
			<div id="closeImage" class="closeForm" onclick="closeForms()"> ✕ </div>
		<center>
			<h1> Update Request</h1>
		</center>
		<input type="hidden" name="requestID" id="UpdateFormRequestID" Required/>

		<table>

			<tr>
				<td class="tdleft">
					<span>Title</span>
				</td>
				<td class="tdright">
					<input type="Text" name="updateTitle" id="updateTitle" class="UpdateRequests-Input" Required/>
				</td>
			</tr> 

			<tr>
				<td class="tdleft">
					<span>Description</span>
				</td>
				<td class="tdright">
					<textarea rows="" cols="" name="updateDescription" id="updateDescription" class="UpdateRequests-Input" Required>
					</textarea>
				</td>
			</tr> 

			<tr>
				<td class="tdleft">
					<span>Due Date</span>
				</td>

				<td class="tdright">
					<input type="date" name="updateDueDate" id="updateDueDate" class="UpdateRequests-Input" Required/>
				</td>
			</tr> 

			<tr>
				<td class="tdleft">
					<span>Price</span>
				</td>

				<td class="tdright">
					 <input type="Number" name="updatePrice" id="updatePrice" class="UpdateRequests-Input" placeholder="Php" Required/>
				</td>
			</tr> 

			<tr>
				<td class="tdleft">
					<span>Negotiable</span>
				</td>

				<td class="tdright">
					<input type="radio" name="updateNegotiable" id="updateNegotiable" class="UpdateRequests-Input" value="Negotiable" Required/> Yes
					<input type="radio" name="updateNegotiable" id="updateNegotiable" class="UpdateRequests-Input" value="Not Negotiable"/> No
				</td>
			</tr>

			<tr>
				<td>

				</td>
				<td id="UpdateControls">
				 	<input type="submit" value="Update" class="UpdateControls-Button">
					<input type="reset" value="Cancel" class="UpdateControls-Button" onclick="hideUpdateRequest()">
				</td>
			</tr>

		</table>


		</form>
	



					<div id="ViewRequest-Form">
					<div id="closeImage" class="closeForm" onclick="closeForms()"> ✕ </div>
					<center>
						<h1> View Request</h1>
					</center>

					<table>

						<tr>
							<td class="tdleft">
								<span>Title</span>
							</td>
							<td class="tdright">
								<span id="viewTitle">Title</span>
							</td>
						</tr> 

						<tr>
							<td class="tdleft">
								<span>Description</span>
							</td>
							<td class="tdright">
								<span id="viewDescription">Description</span>
							</td>
						</tr> 


						<tr>
							<td class="tdleft">
								<span>Due Date</span>
							</td>

							<td class="tdright">
								<span id="viewDueDate">Due Date</span>
							</td>
						</tr> 

						<tr>
							<td class="tdleft">
								<span>Price</span>
							</td>

							<td class="tdright">
								<span id="viewPrice">Price</span>
							</td>
						</tr> 

						<tr>
							<td class="tdleft">
								<span>Negotiable</span>
							</td>

							<td class="tdright">
								<span id="viewNegotiable">Negotiable</span>
							</td>
						</tr>

						<tr>
							<td>

							</td>
							<td id="UpdateControls">
								<input type="reset" value="Edit" class="ViewControls-Button" id="viewControlsEditButton">
							
							</td>
						</tr>

					</table>


				</div>
	</div>

</div>


<script src="js/Requestor_RequestBoard.js"> </script>
</body>
</html>