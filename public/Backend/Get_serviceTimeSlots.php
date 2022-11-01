<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

$responderID = $_POST['responderID'];
$date = $_POST['date'];


$transactions = $DBHandler->getMyTimeSlots($responderID,$date);

if($transactions === "failed to fetch"){

    echo $transactions;

} else{

    echo json_encode($transactions);
}

   

    


