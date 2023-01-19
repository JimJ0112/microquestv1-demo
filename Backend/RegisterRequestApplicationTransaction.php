<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();
$mySpecialization = $_SESSION["specialization"];


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
 //$mySpecialization = $_SESSION["specialization"];

 if($transactionExists){
    echo "<script> window.location.href='../Responder_RequestBoard.php?msg=Transaction already exists with this request' </script>";
    
 } else if($specializationExists === false){
    echo "<script> window.location.href='../Responder_RequestBoard.php?msg=You can't apply to this request because you don't have this specialization, please add this request's category to your specializations' </script>";

 }else if($transactionExists === true && $specializationExists === false && $mySpecialization != $category){
   echo "<script> window.location.href='../Responder_RequestBoard.php?msg=You can't apply to this request because you don't have this specialization, please add this request's category to your specializations' </script>";

} else{

    //echo $requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate;
   
    $latestIDQuery = "SELECT MAX(transactionID) FROM transactions";
    $latestID = $DBHandler->runGET($latestIDQuery);
    $latestID = (int)$latestID['MAX(transactionID)'] + 1;

      /* making directory to store the files for user */
     $Directory = 'userFiles/contracts/';

     if(is_dir("../".$Directory)==false){
         echo mkdir("../".$Directory);
     } else {
         echo"Directory Already Exists!";
     }

           $contractDirectory = $Directory."/ContractRequest".$latestID.$requestID.$responderID.$requestorID.'.pdf';
           file_put_contents('../'.$contractDirectory, $contract);
   
   
   
    $result = $DBHandler->registerRequestTransaction($requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate,$contractDirectory);
    echo $result;

    //header("location:../Responder_RequestTransactions.php");
   // echo "<script> window.location.href='../Responder_RequestTransactions.php' </script>";
 }

    //echo $requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate;
   // $result = $DBHandler->registerRequestTransaction($requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate,$contract);
   // echo $result;

   //echo "<script> window.location.href='../Responder_RequestTransactions.php' </script>";
   header("location:../Responder_RequestTransactions.php");



