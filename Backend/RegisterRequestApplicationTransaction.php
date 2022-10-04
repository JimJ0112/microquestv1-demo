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

echo $requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate;
$result = $DBHandler->registerRequestTransaction($requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate);
echo $result;

header("location:../Requests-Orders.php");


