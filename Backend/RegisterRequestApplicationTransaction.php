<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


//	transactionID	requestID	serviceID	requestorID	responderID	price	transactionStatus	transactionStartDate	transactionEndDate	


$requestID=$_POST["requestID"]; 
$requestorID=$_POST["requestorID"]; 
$responderID=$_POST["responderID"]; 
$price= $_POST["price"];
$transactionStartDate= $_POST["transactionStartDate"];
$requestDueDate = $_POST['requestDueDate'];

$contract = $_POST['contract'];

$contract = str_replace(' ','+',$contract);

list(, $contract)= explode(',', $contract);

 $contract = base64_decode($contract);

//echo $requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate;
$result = $DBHandler->registerRequestTransaction($requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate,$contract);
echo $result;

//header("location:../Responder_RequestTransactions.php");
echo "<script> window.location='../Responder_RequestTransactions.php' </script>";


