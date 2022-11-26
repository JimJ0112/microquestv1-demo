<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


//	transactionID	requestID	serviceID	requestorID	responderID	price	transactionStatus	transactionStartDate	transactionEndDate	


$requestorID = $_POST['requestorID'];

$result = $DBHandler->getMyCart($requestorID);

if($result === "failed to fetch"){
    echo $result;
}else{
    echo json_encode($result);
}
//echo $result;

//header("location:../Requestor_Transactions.php");


