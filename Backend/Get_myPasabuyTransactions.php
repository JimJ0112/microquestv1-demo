<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$column =  $_POST['column'];
$ID = $_POST['userID'];
$status = $_POST['status'];


//$condition = 14;



//$transactions = $DBHandler->getMyTransactions($ID,$column,$transactionType);

/*
$column = "responderID";
$status = "pending";
$ID=11;
*/

$transactions = $DBHandler->getMyPasabuyTransactions($ID,$column,$status);

if($transactions === "failed to fetch"){
    echo $transactions; 
   
} else{

    //var_dump($transactions);
    
    //echo json_encode($transactions);
   // echo json_last_error_msg();
   
   echo json_encode($transactions);

    
   
    

}

   

    


