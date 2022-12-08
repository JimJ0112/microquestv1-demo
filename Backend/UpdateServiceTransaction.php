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


// for sending notifications to the users


$notifType = "Update";
date_default_timezone_set("Asia/Manila");
$notificationDate = date("Y-m-d");

$transactionID = $_POST['transactionID'];
$status = $_POST['update'];

//$query = "SELECT $name FROM $tablename WHERE $column = '$condition'";
$requestorID = $DBHandler ->getData("transactions","transactionID",$transactionID,"requestorID");
$responderID = $DBHandler ->getData("transactions","transactionID",$transactionID,"responderID");

// for constructing notif message

$ServiceID = $DBHandler ->getData("transactions","transactionID",$conditionvalue,"serviceID");
$ServiceName = $DBHandler ->getData("servicesinfo","serviceID",$ServiceID,"servicePosition");
$ServiceCategory = $DBHandler ->getData("servicesinfo","serviceID",$ServiceID,"serviceCategory");



$notifMessage = "Transaction #$transactionID for $ServiceCategory : $ServiceName 's status has been changed to $status ";


$result = $DBHandler->sendNotifs($requestorID,$notifType,$notifMessage,$notificationDate);
$result1 = $DBHandler->sendNotifs($responderID,$notifType,$notifMessage,$notificationDate);
