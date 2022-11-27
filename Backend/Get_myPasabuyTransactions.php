<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$column =  $_POST['column'];
$ID = $_POST['userID'];
$status = $_POST['status'];

//$condition = 14;



//$transactions = $DBHandler->getMyTransactions($ID,$column,$transactionType);

/*
$column = "requestorID";
$status = "pending";
$ID=46;
*/

$transactions = $DBHandler->getMyPasabuyTransactions($ID,$column,$status);

if($transactions === "failed to fetch"){
    echo $transactions; 
   
} else{

    echo json_encode($transactions);
   

}

   

    


