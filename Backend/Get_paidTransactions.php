<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$transactionType = $_POST['TransactionType'];
$column =  $_POST['column'];
$ID = $_POST['userID'];

//$condition = 14;

/*
$transactionType = "Service";
$column =  "requestorID";
$ID = 46;
*/

//"userID=" + userID +"&TransactionType=Request&column=requestorID"



$transactions = $DBHandler->getPaidTransactions($ID,$column,$transactionType);

if($transactions === "failed to fetch"){
    echo $transactions;

} else{

    
    echo json_encode($transactions);
    //echo json_last_error_msg();
}

   

    


