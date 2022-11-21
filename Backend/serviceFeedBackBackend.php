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
 echo $insertFeedback =  $DBHandler-> registerServiceFeedback($myID,$revieweeID,$serviceID,$transactionID,$feedback,$today);
   // $insertFeedback = 1;

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
//getData($tablename,$column,$condition,$name)
//SELECT $name FROM $tablename WHERE $column = '$condition'

if($insertFeedback){


    $feedbackID = $DBHandler->getData("feedbacks","transactionID",$transactionID,"feedbackID");
    echo $feedbackID;


    $myID=$_POST["myID"];
    $ratingValue = $_POST['rate'];
    $revieweeID=$_POST["serviceRevieweeID"]; 

    echo $result = $DBHandler->registerServiceRatings($myID,$revieweeID,$transactionID,$ratingValue,$feedbackID);

} else{
    echo "error";
}


header("location: ../Requestor_Transactions.php?q=1");




