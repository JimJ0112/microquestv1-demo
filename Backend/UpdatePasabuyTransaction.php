<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();



$tablename = "pasabuytransactions";

$column = "orderStatus";
$condition = "pasabuyTransactionID";

$name = $_POST['update'];
$conditionvalue = $_POST['transactionID'];


echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);



// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");

if(isset($_POST["userType"])){
    $usertype = $_POST["userType"];

    if($usertype === "Requestor"){
        header("location: ../Requestor_Transactions.php");
    } else {
        header("location: ../Responder_Transactions.php");
    }

}


//header("location: ../");

// for sending notifications to the users

$notifType = "Update";
date_default_timezone_set("Asia/Manila");
$notificationDate = date("Y-m-d");

// for constructing notif message
$transactionID = $_POST['transactionID'];
$status = $_POST['update'];

//$query = "SELECT $name FROM $tablename WHERE $column = '$condition'";
$requestorID = $DBHandler ->getData("pasabuytransactions","pasabuyTransactionID",$transactionID,"requestorID");
$responderID = $DBHandler ->getData("pasabuytransactions","pasabuyTransactionID",$transactionID,"responderID");



$productID = $DBHandler ->getData("pasabuytransactions","pasabuyTransactionID",$transactionID,"productID");
$ProductName= $DBHandler ->getData("products","productID",$productID,"productName");
$ProductBrand = $DBHandler ->getData("products","productID",$productID,"productBrand");



$notifMessage = "Transaction #$transactionID for $ProductBrand : $ProductName 's status has been changed to $status ";


$result = $DBHandler->sendNotifs($requestorID,$notifType,$notifMessage,$notificationDate);
$result1 = $DBHandler->sendNotifs($responderID,$notifType,$notifMessage,$notificationDate);

