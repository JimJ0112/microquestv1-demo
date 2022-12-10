<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


//$serviceName= $_POST['serviceName'];
//$responderID = $_POST['responderID'];

$serviceName= "HTML";
$responderID = 36;

$tablename = "servicesinfo";
//$transactionID = 91;
$result = $DBHandler->serviceExists($tablename,$responderID,$serviceName);



if($result){
    echo "true";
} else {
    echo "false";
}
//echo $exists;