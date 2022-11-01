<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$transactionType = $_POST['TransactionType'];
$column =  $_POST['column'];
$ID = $_POST['userID'];
//$condition = 14;


//"userID=" + userID +"&TransactionType=Request&column=requestorID"



$transactions = $DBHandler->getAcceptedTransactions($ID,$column,$transactionType);

if($transactions === "failed to fetch"){
    echo $transactions;
} else{

    echo json_encode($transactions);
}

   

    


