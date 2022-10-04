<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


//	transactionID	requestID	serviceID	requestorID	responderID	price	transactionStatus	transactionStartDate	transactionEndDate	

$formServiceID= $_POST["formServiceID"];
      
$responderID=$_POST["responderID"];

$servicePrice=$_POST["servicePrice"]; 


$dueDate=$_POST["dueDate"];

$additionalNotes=$_POST["additionalNotes"];

date_default_timezone_set("Asia/Manila");
$transactionStartDate =  date("Y-m-d H:i:s",time());          

$requestorID = $_POST['requestorID'];

$responderTimeSlots = $_POST['responderTimeSlots'];

$contract = $_POST['contract'];

echo $contract;

$result = $DBHandler->registerServiceTransaction($formServiceID,$responderID,$requestorID,$servicePrice,$dueDate,$responderTimeSlots,$additionalNotes,$transactionStartDate,$contract);
//echo $result;

header("location:../RequestApplications-Services.php");


