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

	<script src="js/Requestor_RequestBoard.js"> </script>


</head>
<body id="Requestor_RequestBoardBackground">



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
		<div class="grid-container" id="TransactionsNav">

			<a href="Requestor_CreateRequest.php">
				<div id="TransactionTypeTd" class="grid-item">
					<div id="TransactionTypeDropDown">
						+Create
					</div>
				</div>
			</a>
  			
			
			<div id="TransactionsNavItem1" class="TransactionsNavItems grid-item" onclick="clickedNavItem(0,<?php echo $userID; ?>)"> <img class="navIcon" src="img/select-all.png"> <span class="sideNav-text">  All Requests </span> </div>  
			<div id="TransactionsNavItem2" class="TransactionsNavItems grid-item" onclick="clickedNavItem(1,<?php echo $userID; ?>)"> <img class="navIcon" src="img/wall-clock.png"> <span class="sideNav-text">  On Going </span> </div>  
  			<div id="TransactionsNavItem3" class="TransactionsNavItems grid-item" onclick="clickedNavItem(2,<?php echo $userID; ?>)"> <img class="navIcon" src="img/power.png"> <span class="sideNav-text"> Active  </span> </div> 
  			<div id="TransactionsNavItem4" class="TransactionsNavItems grid-item" onclick="clickedNavItem(3,<?php echo $userID; ?>)"> <img class="navIcon" src="img/sleep-mode.png"> <span class="sideNav-text"> Inactive  </span> </div> 
  			<div id="TransactionsNavItem5" class="TransactionsNavItems grid-item" onclick="clickedNavItem(4,<?php echo $userID; ?>)"> <img class="navIcon" src="img/check.png"> <span class="sideNav-text"> Completed  </span> </div>   
  			

		</div>

		<center> <h1 id="RequestBoardTitle"> Requestor's Request Board </h1> </center>
		<div id="RequestsContainer">


			<div id="RequestsContainer-Content">


					

				
			

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

<?php
    if(isset($_SESSION['userID'])){
        $userID = $_SESSION['userID'];
        echo "<script> clickedNavItem (0, $userID) </script> ";
    }


	if(isset($_GET['fil']) && isset($_SESSION['userID'])){
		$nav = $_GET['fil'];
		$userID = $_SESSION['userID'];

        echo "<script> clickedNavItem ($nav, $userID) </script> ";

	}
?>

<script src="js/Requestor_RequestBoard.js"> </script>
</body>
</html>