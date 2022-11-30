<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$transactionID = $_POST['transactionID'];
//$transactionID = 91;
$feedbackExists = $DBHandler->exists("feedbacks","pasabuyTransactionID",$transactionID);
$ratingExists = $DBHandler->exists("rating","pasabuyTransactionID",$transactionID);


if($feedbackExists || $ratingExists){
    echo "true";
} else {
    echo "false";
}
//echo $exists;