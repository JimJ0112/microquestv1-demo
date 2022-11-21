<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$transactionID = $_POST['transactionID'];
//$transactionID = 91;
$feedbackExists = $DBHandler->exists("feedbacks","transactionID",$transactionID);
$ratingExists = $DBHandler->exists("rating","transactionID",$transactionID);


if($feedbackExists || $ratingExists){
    echo "true";
} else {
    echo "false";
}
//echo $exists;