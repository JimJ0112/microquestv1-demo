<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



//$transactionID = 153;

$transactionID = $_POST['transactionID'];
$results= $DBHandler->getContract($transactionID);


    
 
    if($results === "failed to fetch"){
        echo $results;
    }else{
        echo json_encode($results);
    }

   
    //echo json_last_error_msg();
    


