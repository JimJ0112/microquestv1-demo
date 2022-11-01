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

	<script src="js/Requestor_Transactions.js"> </script>

</head>
<body onload="setTransactionType()">

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

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
				</select> 
			
			</td>

			<td id="TransactionsNavItem1" class="TransactionsNavItems" onclick="clickedNavItem(0,<?php echo $userID; ?>)"> Orders </td>
			<td id="TransactionsNavItem2" class="TransactionsNavItems" onclick="clickedNavItem(1,<?php echo $userID; ?>)"> Accepted Orders </td>
			<td id="TransactionsNavItem3" class="TransactionsNavItems" onclick="clickedNavItem(2,<?php echo $userID; ?>)"> Delivered </td>
			<td id="TransactionsNavItem4" class="TransactionsNavItems" onclick="clickedNavItem(3,<?php echo $userID; ?>)"> Paid </td>
			<td id="TransactionsNavItem5" class="TransactionsNavItems" onclick="clickedNavItem(4,<?php echo $userID; ?>)"> Finished </td>
			<td id="TransactionsNavItem6" class="TransactionsNavItems" onclick="clickedNavItem(5,<?php echo $userID; ?>)"> Cancelled </td>
		</tr>

	</table>

	<table id="TransactionsContainer">
		<thead>
			<tr id="TransactionsContainerThead">
				<td>  - </td>
				<td>Transaction ID </td>
				<td>Start Date</td>
				<td>Responder ID</td>
				<td>Responder Name</td>
				<td>Service ID</td>
				<td>Category</td>
				<td>Position</td>
				<td>Price</td>
				<!--<td>Rate</td> -->
				<td>TimeSlot</td>
				<td>Due Date</td>
				<td>Additional Notes</td>
				<td>Contract</td>
				<td> Status</td>
			</tr>
					
		</thead>
		<tbody id="TransactionsContainerBody"> </tbody>

		

	</table>
</div>


<div id="paymentPopUpBack"> 
	<div id="paymentPopUp"> 
	
	<form action="Backend/UpdateRequestTransaction.php" method="post" enctype="multipart/form-data">
		<input type="hidden" name="transactionID" id="TransactionIDInput"/>

		<?php
		 $userType = $_SESSION["userType"];
		?>
		<input type="hidden" name="userType" value="<?php echo $userType; ?>"/>
		<input type="hidden" name="update" value="paid"/>
		<center> <h4>  Please Enter your proof of payment  </h4> 
		<input type="file" name="paymentFile"> <br/>  <br/>  <br/>  <br/>  <br/>
		

		<input type="submit" value="Confirm"/> 
		<input type="button" value="Cancel" onclick="closePaymentForm()"/>
		</center>
	</form>

	</div>

</div>



<div id="giveFeedBackPopUpBack"> 
	<div id="giveFeedBackPopUp"> 
	
	<form action="" method="post" enctype="multipart/form-data">
		
		<center>
			<br/>
			<input type="hidden" name="transactionID" id="TransactionIDInput"/>
			<h3> Please Enter your feedbacks </h3>
			<br/><br/><br/>
			<textarea name="feedback"> 

			</textarea>  <br/><br/><br/><br/><br/><br/>

			<input type="radio" name="rate" value="1"/>
			<input type="radio" name="rate" value="2"/>
			<input type="radio" name="rate" value="3"/>
			<input type="radio" name="rate" value="4"/>
			<input type="radio" name="rate" value="5"/>

			<br/><br/>

			<input type="submit" value="Confirm"/> 
			<input type="button" value="Cancel" onclick="closeFeedbackForm()"/>
		</center>
	</form>

	</div>

</div>

</body>
</html>