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

$contract = str_replace(' ','+',$contract);

list(, $contract)= explode(',', $contract);

$contract = base64_decode($contract);

$latestIDQuery = "SELECT MAX(transactionID) FROM transactions";
$latestID = $DBHandler->runGET($latestIDQuery);
 $latestID = (int)$latestID[0] + 1;

/* making directory to store the files for user */
$Directory = 'userFiles/contracts/';

    if(is_dir($Directory)==false){
        echo mkdir("../".$Directory);
    } else {
        echo"Directory Already Exists!";
    }

           $contractDirectory = $Directory."/ContractService".$latestID.$formServiceID.$responderID.$requestorID.'.pdf';
           file_put_contents('../'.$contractDirectory, $contract);


           




//echo $contract;

$result = $DBHandler->registerServiceTransaction($formServiceID,$responderID,$requestorID,$servicePrice,$dueDate,$responderTimeSlots,$additionalNotes,$transactionStartDate,$contractDirectory);
echo $result;

header("location:../Requestor_ServiceTransactions.php");


