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



 $category = $DBHandler-> getData("requestsinfo","requestID",$requestID,"requestCategory");


 $transactionExists = $DBHandler->requestTransactionExists($requestID,$responderID,$requestorID);
 $specializationExists = $DBHandler->specializationExists($responderID,$category);
 $mySpecialization = $_SESSION["specialization"];

 if($transactionExists){
    echo "<script> window.location='../Responder_RequestBoard.php?msg=Transaction already exists with this request' </script>";
    
 } else if(!$specializationExists ||  $mySpecialization != $category){
    echo "<script> window.location='../Responder_RequestBoard.php?msg=Transaction already exists with this request' </script>";

 } else{

    //echo $requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate;
    $result = $DBHandler->registerRequestTransaction($requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate,$contract);
    echo $result;

    //header("location:../Responder_RequestTransactions.php");
    echo "<script> window.location='../Responder_RequestTransactions.php' </script>";
 }






