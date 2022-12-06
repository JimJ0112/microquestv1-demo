<?php
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");

$myID=$_POST["myID"];
$revieweeID=$_POST["serviceRevieweeID"]; 
$requestID=$_POST["requestID"];
$transactionID=$_POST["serviceTransactionID"];
$feedback = $_POST["feedback"];



 //registerServiceFeedback($myID,$revieweeID,$serviceID,$transactionID,$feedback,$today)
 echo $insertFeedback =  $DBHandler-> registerRequestFeedback($myID,$revieweeID,$requestID,$transactionID,$feedback,$today);
   // $insertFeedback = 1;


if($insertFeedback){


    $feedbackID = $DBHandler->getData("feedbacks","transactionID",$transactionID,"feedbackID");
    echo $feedbackID;


    $myID=$_POST["myID"];
    $ratingValue = $_POST['rate'];
    $revieweeID=$_POST["serviceRevieweeID"]; 
    $requestID=$_POST["requestID"];

    echo $result = $DBHandler->registerRequestRatings($myID,$revieweeID,$transactionID,$ratingValue,$feedbackID,$requestID);

} else{
    echo "error";
} 


header("location: ../Requestor_RequestTransactions.php?q=1");




