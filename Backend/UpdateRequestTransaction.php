<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();



$tablename = "transactions";

$column = "transactionStatus";
$condition = "transactionID";

$name = $_POST['update'];
$conditionvalue = $_POST['transactionID'];


echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);



// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");



/*
if(isset($_POST["userType"])){
    $usertype = $_POST["userType"];

    if($usertype === "Requestor"){
        header("location: ../Requestor_Transactions.php");
    } else {
        header("location: ../Responder_Transactions.php");
    }

}

*/
//header("location: ../");


// for sending notifications
// for sending notifications to the users

$transactionID = $_POST['transactionID'];
$status = $_POST['update'];

$notifType = "Update";
date_default_timezone_set("Asia/Manila");
$notificationDate = date("Y-m-d");

//$query = "SELECT $name FROM $tablename WHERE $column = '$condition'";
$requestorID = $DBHandler ->getData("transactions","transactionID",$transactionID,"requestorID");
$responderID = $DBHandler ->getData("transactions","transactionID",$transactionID,"responderID");

// for constructing notif message

$RequestID= $DBHandler ->getData("transactions","transactionID",$conditionvalue,"requestID");
$RequestCategory = $DBHandler ->getData("requestsinfo","requestID",$RequestID,"requestCategory");
$RequestTitle = $DBHandler ->getData("requestsinfo","requestID",$RequestID,"requestTitle");



$notifMessage = "Transaction #$transactionID for $RequestCategory : $RequestTitle 's status has been changed to $status ";


$result = $DBHandler->sendNotifs($requestorID,$notifType,$notifMessage,$notificationDate);
$result1 = $DBHandler->sendNotifs($responderID,$notifType,$notifMessage,$notificationDate);

$updateStatus = $_POST['update'];

if($updateStatus === "completed"){

   $RequestID= $DBHandler ->getData("transactions","transactionID",$conditionvalue,"requestID");
   echo $DBHandler->completeRequestStatus($RequestID);

}else{
    
}


