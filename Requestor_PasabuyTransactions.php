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
		if($userType != "Requestor"){
			header("location:Responder_Transactions.php");
		} else{

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
		Requestor Transactions
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Requestor_Transactions.css">

	<!--<script src="js/Requestor_ServiceTransactions.js"> </script>
	<script src="js/Requestor_RequestTransactions.js"> </script>-->
	<script src="js/Requestor_PasabuyTransactions.js"> </script>
	<script src="js/report.js"> </script>
	<script src="js/sideBarShow.js"> </script>

</head>
<body onload="setTransactionType()">
	<button class="sideMenu" onclick="sideButton()" id="sideMenu" > >> </button>
<!-- NavBar-->
<?php
	//require_once("imports/RequestorNavBar.php");

?>


<?php
	//require_once("imports/RequestorNavBar.php");


	if(isset($_SESSION["userStatus"]) && isset($_SESSION["userType"])){
		$status = $_SESSION["userStatus"];
		$userType = $_SESSION["userType"];
		echo $status;

		if($status === "not verified" || $status === "Declined"){
			header("location: NotVerifiedMessage.php?msg=Not verified yet");

		}else{
			if($userType === "Requestor"){
				require_once("imports/RequestorNavBar.php");
			} else{
				header("location: Responder_RequestBoard.php?msg=Not a Responder!");
			}

		}


	}

?>


<?php

	if(isset($_SESSION["userID"])){
		$userID = $_SESSION["userID"];
		echo"<script> sessionStorage.setItem('userID',$userID) </script>";
	}

	if(isset($_GET["q"])){
		$mode = $_GET["q"];
		if($mode === 1){
			//echo "<script> </script>";
		}
	}
?>

<div id="TransactionsBackContainerBack">

	<div class="grid-container" id="TransactionsNav">

  		<div id="TransactionTypeTd" class="grid-item">
			<div id="TransactionTypeDropDown">
				Pasabuy <button class="hideMenu" onclick="hideButton()" id="hideMenu" > X </button>
			</div>
		</div>

		<div id="TransactionsNavItem1" class="TransactionsNavItems grid-item" onclick="pasabuyNavItem(0,<?php echo $userID; ?>)"> <img class="navIcon" src="img/wall-clock.png"> <span class="sideNav-text">  Pending Orders </span> </div>  
  		<div id="TransactionsNavItem2" class="TransactionsNavItems grid-item" onclick="pasabuyNavItem(1,<?php echo $userID; ?>)"> <img class="navIcon" src="img/setting.png"> <span class="sideNav-text"> On Going Orders  </span> </div> 
  		<div id="TransactionsNavItem3" class="TransactionsNavItems grid-item" onclick="pasabuyNavItem(2,<?php echo $userID; ?>)"> <img class="navIcon" src="img/delivered.png"> <span class="sideNav-text"> Delivered  </span> </div> 
  		<div id="TransactionsNavItem4" class="TransactionsNavItems grid-item" onclick="pasabuyNavItem(3,<?php echo $userID; ?>)"> <img class="navIcon" src="img/money.png"> <span class="sideNav-text"> Paid  </span> </div>   
  		<div id="TransactionsNavItem5" class="TransactionsNavItems grid-item" onclick="pasabuyNavItem(4,<?php echo $userID; ?>)"> <img class="navIcon" src="img/check.png"> <span class="sideNav-text"> Finished  </span> </div> 
  		<div id="TransactionsNavItem6" class="TransactionsNavItems grid-item" onclick="pasabuyNavItem(5,<?php echo $userID; ?>)"> <img class="navIcon" src="img/cancel.png"> <span class="sideNav-text"> Cancelled  </span> </div> 
		
	</div>
	
	<!-- gawa ko -->

	<?php
		if(isset($_SESSION["userID"])){
			$userID =$_SESSION["userID"];

			echo"<script> pasabuyNavItem(0,$userID) </script>";


		}
	?>

	
	<div id="TransactionsContainer">
		<div style="margin-top:10px" id="TransactionsContainerBody">
		</div>	


	</div>



<div id="pasabuyPaymentPopUpBack"> 
	<div id="pasabuyPaymentPopUp"> 
	
	<form action="Backend/RegisterPasabuyPayment.php" method="post" enctype="multipart/form-data">
		<input type="hidden" name="transactionID" id="pasabuyTransactionIDInput"/>

		<?php
		 $userType = $_SESSION["userType"];
		?>
		<input type="hidden" name="userType" value="<?php echo $userType; ?>"/>
		<input type="hidden" name="update" value="Paid"/>
		<center> <h4>  Please Enter your proof of payment  </h4> 
		<br/>

		<img id="pasabuyPaymentFileOutput"/> <br/> <br/>
		<input id="pasabuyPaymentProof" type="file" name="pasabuyPaymentFile" onchange="showPasabuyPaymentProofFile(event)"  required hidden/>
		<label for="pasabuyPaymentProof"> upload proof of payment ↑</label> 
		
		<br/>  <br/> <br/>
		

		<input type="submit" value="Confirm"/> 
		<input type="button" value="Cancel" onclick="closePasabuyPaymentForm()"/>
		</center>
	</form>

	</div>

</div>


<div id="pasabuyGiveFeedBackPopUpBack"> 
	<div id="pasabuyGiveFeedBackPopUp"> 
	
		<form action="Backend/pasabuyFeedBackBackend.php" method="post" enctype="multipart/form-data">
		
			<center>
				<br/>
				<?php $myUserID = $_SESSION["userID"];?>
				<input type="hidden" name="myID" value="<?php echo $myUserID;?>"/>
				<input type="hidden" name="serviceTransactionID" id="pasabuyTransactionFeedbackID"/>
				<input type="hidden" name="serviceRevieweeID" id="pasabuyServiceRevieweeFeedbackID"/>
				<input type="hidden" name="serviceID" id="pasabuyServiceFeedbackID"/>
				<input type="hidden" name="userType" id="Responder"/>
				<h3> Please Enter your feedbacks </h3>
				<br/>

				<label> Your Feedback:  </label> <br/>
				<textarea name="feedback" id="feedbackInput" cols="40" rows="10" placeholder="Your Feedback..." required></textarea>
				<br/><br/><br/>
			

				<div class="rate">


					<input type="radio" name="rate" value="5" id="pasabuyStar5" class="star" required/>
					<label for="pasabuyStar5" title="text"> </label>
					<input type="radio" name="rate" value="4" id="pasabuyStar4" class="star"/>
					<label for="pasabuyStar4" title="text"> </label>
					<input type="radio" name="rate" value="3" id="pasabuyStar3" class="star"/>
					<label for="pasabuyStar3" title="text"> </label>
					<input type="radio" name="rate" value="2" id="pasabuyStar2" class="star"/>
					<label for="pasabuyStar2" title="text"> </label>
					<input type="radio" name="rate" value="1" id="pasabuyStar1" class="star"/>
					<label for="pasabuyStar1" title="text"> </label>
				</div>

				<br/><br/> <br/><br/>

				<div id="ButtonsDivFeedback">
					<input type="submit" value="Confirm" /> 
					<input type="button" value="Cancel" onclick="closePasabuyFeedbackForm()"/>
				</div>
			
			</center>
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



<div id="reportPopUpBack"> 
	<div id="reportPopUp"> 
	
	<form action="Backend/RegisterReport.php" method="post" enctype="multipart/form-data">
		
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
			</div>
			<div id="reportContent">
			<br/> 
			<hr/>
			<input type="hidden" name="transactionReportID" id="TransactionReportIDInput"/>
			<input type="hidden" name="transactionType" id="TransactionTypeInput"/>

			<h3> Please Select a problem </h3>
			
		
			<select id="reportType" name="reportType" onchange="otherProblems()" required>
				<option value="Pretending to be someone"> Pretending to be someone </option>
				<option value="Posting inappropriate things"> Posting inappropriate things </option>
				<option value="Harassment or bullying"> Harassment or bullying </option>
				<option value="Doing inappropriate things during transaction"> Doing inappropriate things during transaction </option>
				<option value="Something Else"> Something Else </option>
			</select> <br/>
			<input type="text" id="otherReportType" name="otherReportType" placeholder="Other Report type"/>
			<br/><br/>


			<div id="reportProofOutputBackground">
				<div id="closeImage" onclick="closeImage()" style="color:white;"> ✕ </div>
				<img id="reportProofOutput"> 
			</div>
			<br/>
			<input type="file" name="reportProof" id="reportProof" oninput="showReportProofFile(event)" hidden required/><label for="reportProof">upload file ↑</label><br/><br/>

			<span> Description: </span> <br/>
			<textarea name="reportDescription" id="reportDescription" cols="50" rows="8" required></textarea>  
			<br/><br/>
		

			<input  class="formButton Button" type="submit" value="Submit Report"/> 
			<input  class="formButton Button" type="button" value="Cancel" onclick="hideReportForm()"/>
		</center>
	</form>

	</div>

</div>

</body>
</html>