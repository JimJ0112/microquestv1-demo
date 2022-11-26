<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


//	transactionID	requestID	serviceID	requestorID	responderID	price	transactionStatus	transactionStartDate	transactionEndDate	

echo $productID = $_POST['productID'];
echo $serviceID = $_POST['serviceID'];
echo $responderID = $_POST['responderID'];
echo $requestorID = $_POST['requestorID'];
echo $dateAssigned = $_POST['dateAssigned'];
echo $quantity = $_POST['quantity'];
$result = $DBHandler->addToCart($productID,$serviceID,$responderID,$requestorID,$dateAssigned,$quantity);

echo $result;

header("location:../Requestor_MyCart.php");


