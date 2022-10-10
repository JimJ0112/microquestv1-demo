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
			echo "getMyRequests($userID)";
		}
	?>
>

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");
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
									<img src="img/g838.png" class="RequestsContainer-ControlItemIcon">
								</td>
								<td>
									<a href="Requestor_AvailableServices.php"> <span> Available Services </span> </a>
								</td>
					 		</tr>
						</table>

					</li>

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

					<li class="RequestsContainer-ControlItem" id="RequestsCategoryContainer"> 
						
							<input type="button" id="CreateRequestButton" value="Create Request">
						
					</li>

				</ul>

			</div>

			<div id="RequestsContainer-Content">
				<div class="requestCard">


					<ul class="RequestInfoList">
						<li class="RequestCategory"> Category </li>
						<li class="requestDescription"> Desciption</li>
						<li class="Deadline"> Deadline </li>
						<li class="Price"> Php pice</li>
						<li class="PriceNegotiable"> Negotiable</li>
					</ul>

					<footer class="requestcard-footer">
						<button class="UpdateButton" onclick="showUpdateRequest()"> Update</button>
						<button class="ReviewButton" onclick="showViewRequest()"> Review </button>
					</footer>

				
				</div>



			</div>

		</div>
	</div>

<!--Update requests-->

<div id="UpdateRequests-Container">
	
	<form id="UpdateForm" action="Backend/UpdateRequest.php" method="post">
		<center>
			<h1> Update Request</h1>
		</center>
		<input type="hidden" name="requestID" id="UpdateFormRequestID"/>

		<table>

			<tr>
				<td>
					<span>Title</span>
				</td>
				<td class="tdright">
					<input type="Text" name="updateTitle" id="updateTitle" class="UpdateRequests-Input"/>
				</td>
			</tr> 

			<tr>
				<td>
					<span>Description</span>
				</td>
				<td class="tdright">
					<textarea rows="" cols="" name="updateDescription" id="updateDescription" class="UpdateRequests-Input">
					</textarea>
				</td>
			</tr> 

			<tr>
				<td>
					<span>Due Date</span>
				</td>

				<td class="tdright">
					<input type="datetime-local" name="updateDueDate" id="updateDueDate" class="UpdateRequests-Input"/>
				</td>
			</tr> 

			<tr>
				<td>
					<span>Price</span>
				</td>

				<td class="tdright">
					 <input type="Number" name="updatePrice" id="updatePrice" class="UpdateRequests-Input" placeholder="Php"/>
				</td>
			</tr> 

			<tr>
				<td>
					<span>Negotiable</span>
				</td>

				<td class="tdright">
					<input type="radio" name="updateNegotiable" id="updateNegotiable" class="UpdateRequests-Input" value="Negotiable"/> Yes
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

</div>

<!--view my request-->

<div id="ViewRequests-Container">
	
	<div id="ViewRequest-Form">
		<center>
			<h1> View Request</h1>
		</center>

		<table>

			<tr>
				<td>
					<span>Title</span>
				</td>
				<td class="tdright">
					<span id="viewTitle">Title</span>
				</td>
			</tr> 

			<tr>
				<td>
					<span>RequestDescription</span>
				</td>
				<td class="tdright">
					<span id="viewDescription">RequestDescription</span>
				</td>
			</tr> 


			<tr>
				<td>
					<span>Due Date</span>
				</td>

				<td class="tdright">
					<span id="viewDueDate">Due Date</span>
				</td>
			</tr> 

			<tr>
				<td>
					<span>Price</span>
				</td>

				<td class="tdright">
					<span id="viewPrice">Price</span>
				</td>
			</tr> 

			<tr>
				<td>
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
					<input type="reset" value="Exit" class="ViewControls-Button" onclick="hideViewRequest()">
					<input type="button" value="Delist" class="ViewControls-Button" id="delistButton" onclick="">
				</td>
			</tr>

		</table>


	</div>

</div>


<script src="js/Requestor_RequestBoard.js"> </script>
</body>
</html>