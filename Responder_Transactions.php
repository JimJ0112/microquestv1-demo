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
	}

	if(isset($_SESSION["userType"])){
		$userType = $_SESSION["userType"];
		if($userType != "Responder"){
			header("location:Requestor_Transactions.php");
		} 
	} else {
		header("location:Login.php?msg=Please Login First");
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Responder Transactions
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Responder_Transactions.css">

	<!--<script src="js/Responder_Transactions.js"> </script>-->
	<script src="js/Responder_RequestTransactions.js"> </script>
	<script src="js/Responder_ServiceTransactions.js"> </script>
	<script src="js/Responder_PasabuyTransactions.js"> </script>

	
	<script src="js/report.js"> </script>


</head>
<body onload="setTransactionType()">

<!-- NavBar-->
<?php
	require_once("imports/ResponderNavBar.php");

?>


<?php

	if(isset($_SESSION["userID"])){
		$userID = $_SESSION["userID"];
		echo"<script> sessionStorage.setItem('userID',$userID) </script>";
	}

?>
<div id="TransactionsBackContainerBack">

	<table id="TransactionsNav">


		<tr>
			<td id="TransactionTypeTd"> 

				<select id="TransactionTypeDropDown" onchange="setTransactionType()">
					<option value= "Services">Services</option>
					<option value= "Requests">Requests</option>
					<option value= "Pasabuy">Pasabuy</option>

				</select> 
			
			</td>

			<td id="TransactionsNavItem1" class="TransactionsNavItems" onclick="clickedNavItem(0,<?php echo $userID; ?>)"> Orders </td>
			<td id="TransactionsNavItem2" class="TransactionsNavItems" onclick="clickedNavItem(1,<?php echo $userID; ?>)"> Accepted Orders </td>
			<td id="TransactionsNavItem3" class="TransactionsNavItems" onclick="clickedNavItem(2,<?php echo $userID; ?>)"> Delivered </td>
			<td id="TransactionsNavItem4" class="TransactionsNavItems" onclick="clickedNavItem(3,<?php echo $userID; ?>)"> Paid </td>
			<td id="TransactionsNavItem5" class="TransactionsNavItems" onclick="clickedNavItem(4,<?php echo $userID; ?>)"> Finished </td>
			<td id="TransactionsNavItem6" class="TransactionsNavItems" onclick="clickedNavItem(5,<?php echo $userID; ?>)"> Canceled </td>
		</tr>

	</table>

	<table id="TransactionsContainer">
		<thead id="TransactionsContainerThead">
			
			<tr>
				<!--
				<td>  - </td>
				<td>Transaction ID </td>
				<td>Start Date</td>
				<td>Responder ID</td>
				<td>Responder Name</td>
				<td id="ServiceIDHeader">Service ID</td>
				<td>Category</td>
				<td id="ServicePositionHeader">Position</td>
				<td>Price</td>
	
				<td id="ServiceTimeSlotHeader">TimeSlot</td>
				<td>Due Date</td>
				<td>Additional Notes</td>
				<td>Contract</td>
				<td> Status</td>
				-->
			</tr>
					
		</thead>
		<tbody id="TransactionsContainerBody"> </tbody>

		

	</table>
</div>


<div id="reportPopUpBack"> 
	<div id="reportPopUp"> 
	
	<form action="backend/RegisterReport.php" method="post" enctype="multipart/form-data">
		
		<center>
		<div id="reportHeader">	
			<br/>
			<p> Reported Account:</p> 
			
			<?php
				$userID = $_SESSION["userID"];
			?>
			
			<input type="hidden" id="ReportedAccountID" name="ReportedAccountID"/>
			<input type="hidden" id="ReporterAccountID" name="ReporterAccountID" value="<?php echo $userID;?>"/>

			

			<img id="ReportedAccountProfile">
			<span id="ReportedAccountName"> Dummy Acc </span> <br/>
			<span id="ReportedAccountEmail"> Dummy Email </span> <br/>
			<span id="ReportedAccountType"> Responder </span> 
			<br/> 
		</div>
		<div id="reportContent">
			<hr/>
			<input type="hidden" name="transactionReportID" id="TransactionReportIDInput"/>
			<input type="hidden" name="transactionType" id="TransactionTypeInput"/>

			<h3> Please Select a problem </h3>
			
		
			<select id="reportType" name="reportType" onchange="otherProblems()">
				<option value="Pretending to be someone"> Pretending to be someone </option>
				<option value="Posting inappropriate things"> Posting inappropriate things </option>
				<option value="Harassment or bullying"> Harassment or bullying </option>
				<option value="Doing inappropriate things during transaction"> Doing inappropriate things during transaction </option>
				<option value="Something Else"> Something Else </option>
			</select> <br/>
			<input type="text" id="otherReportType" name="otherReportType" placeholder="Other Report type"/>
			<br/><br/>


			<div id="reportProofOutputBackground">
				<div id="closeImage" onclick="closeImage()"> ✕ </div>
				<img id="reportProofOutput"> 
			</div>
			<br/>
			<input type="file" name="reportProof" id="reportProof" oninput="showReportProofFile(event)"/><br/><br/>

			<span> Description: </span> <br/>
			<textarea name="reportDescription" id="reportDescription" cols="50" rows="8"></textarea>  
			<br/><br/>
		

			<input class="formButton" type="submit" value="Submit Report"/> 
			<input class="formButton" type="button" value="Cancel" onclick="hideReportForm()"/>
		</center>
		</div>
	</form>

	</div>

</div>

</body>
</html>