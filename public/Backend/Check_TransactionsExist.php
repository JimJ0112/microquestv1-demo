<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

$requestID = $_POST['requestID'];
$responderID = $_POST['responderID'];
$requestorID = $_POST['requestorID'];
$transactions = $DBHandler->requestTransactionExists($requestID,$responderID,$requestorID);


    echo json_encode($transactions);


   

    


