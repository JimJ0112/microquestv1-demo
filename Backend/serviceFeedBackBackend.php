<?php
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");

$myID=$_POST["myID"];
$revieweeID=$_POST["serviceRevieweeID"]; 
$serviceID=$_POST["serviceID"];
$transactionID=$_POST["serviceTransactionID"];
$feedback = $_POST["feedback"];



 //registerServiceFeedback($myID,$revieweeID,$serviceID,$transactionID,$feedback,$today)
echo $DBHandler-> registerServiceFeedback($myID,$revieweeID,$serviceID,$transactionID,$feedback,$today);


// update transaction status 

/*
    // set transaction status
    $tablename = "transactions";
    $column = "transactionStatus";
    $condition = "transactionID";
    $name = "completed";
    $conditionvalue = $transactionID;
    

    echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
*/

// set rating
$myID=$_POST["myID"];
$ratingValue = $_POST['rate'];
$revieweeID=$_POST["serviceRevieweeID"]; 

echo $result = $DBHandler->registerServiceRatings($myID,$revieweeID,$transactionID,$ratingValue);




header("location: ../Requestor_Transactions.php?q=1");




