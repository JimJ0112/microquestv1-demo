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

	<!--<script src="js/Responder_Transactions.js"> </script>
	<script src="js/Responder_RequestTransactions.js"> </script>
	<script src="js/Responder_ServiceTransactions.js"> </script>
	<script src="js/Responder_PasabuyTransactions.js"> </script>-->

	<script src="js/Responder_RequestTransactions.js"> </script>
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
	
	<div class="grid-container" id="TransactionsNav">
		  <div id="TransactionTypeTd" class="grid-item">
			<div id="TransactionTypeDropDown">
				Requests
			</div>
		</div>

		<div id="TransactionsNavItem1" class="TransactionsNavItems grid-item" onclick="requestClickedItem(0,<?php echo $userID; ?>)"> <img class="navIcon" src="img/wall-clock.png"> <span class="sideNav-text">  Pending Responders </span> </div>  
		  <div id="TransactionsNavItem2" class="TransactionsNavItems grid-item" onclick="requestClickedItem(1,<?php echo $userID; ?>)"> <img class="navIcon" src="img/setting.png"> <span class="sideNav-text"> On Going Request  </span> </div> 
		  <div id="TransactionsNavItem3" class="TransactionsNavItems grid-item" onclick="requestClickedItem(2,<?php echo $userID; ?>)"> <img class="navIcon" src="img/delivered.png"> <span class="sideNav-text"> Accomplished Request  </span> </div> 
		  <div id="TransactionsNavItem4" class="TransactionsNavItems grid-item" onclick="requestClickedItem(3,<?php echo $userID; ?>)"> <img class="navIcon" src="img/money.png"> <span class="sideNav-text"> Paid  </span> </div>   	
		  <div id="TransactionsNavItem5" class="TransactionsNavItems grid-item" onclick="requestClickedItem(4,<?php echo $userID; ?>)"> <img class="navIcon" src="img/check.png"> <span class="sideNav-text"> Finished  </span> </div> 
		  <div id="TransactionsNavItem6" class="TransactionsNavItems grid-item" onclick="requestClickedItem(5,<?php echo $userID; ?>)"> <img class="navIcon" src="img/cancel.png"> <span class="sideNav-text"> Cancelled  </span> </div> 

	</div>

	
	

	<div id="TransactionsContainer">
	<div style="margin-top:10px" id="TransactionsContainerBody">
		<div class="transaction-item grid-container2">
			<div class="grid-header">
				<div class="requestID header-item" id="requestID">90</div>
				<div class="serviceTitle header-item" id="requestTitle">
					<b>Cleaning</b> :Lawn cleaning</div>
				<div class="serviceStatus header-item" id="requestStatus">cancelled</div>
			</div>
		<div class="item2" onclick="redirect('ViewUserProfile.php?userID=39&amp;userType=Responder')">
			<div class="responderImageDiv" id="imgContainer">
				<img src="" class="requestorProfileTransaction">
			</div>
			<div class="responderNameDiv" id="responderName">Durant</div>
			<div class="responderEmailDiv" id="responderEmail">kdurant</div>
		</div>
		<div class="item3" id="requestDescription">
			<p class="Description" onclick="setTextViewer('')"></p>
		</div>
		<div class="item4" id="requestPrice">
			<div class="servicePrice">Php 250</div>
			<div class="serviceContract">
				<a href="TransactionContract.php?ID=90"> Contract </a>
			</div>
		</div>
		<div class="grid-footer">
			<div class="transactionDates footer-item" id="requestDate">
				<p class="datePosted"></p>
				<p class="dateAccomplished">Due date: 2022-06-20<br> Schedule: 11:00 to 12:00 PM</p>
			</div>
			<div class="sendMessageDiv footer-item" id="sendMessageButton">

			</div>
			<div class="actionsDiv footer-item" id="actionButton">
				<button class="Button red" onclick="showReportForm(39,80,'service','responder')">Report</button>
			</div>
		</div>
	</div>
	</div>
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


<div id="PhotoViewerBackground"> 

	<div id="PhotoViewer"> 
		<div id="closeImage" onclick="closePhotoViewer()"> ✕ </div>
		<img id="photoViewerImage"> 

	</div>
</div>


<div id="TextViewerBackground"> 

	<div id="TextViewer"> 
		<div id="closeImage" onclick="closeTextViewer()"> ✕ </div>
		<div id="textContainer"> 

		</div>

	</div>
	
</div>

		<?php
			if(isset($_SESSION["userID"])){
			$userID =$_SESSION["userID"];
			echo"<script> requestClickedItem(1,$userID) </script>";

			}
		?>

</body>
</html>