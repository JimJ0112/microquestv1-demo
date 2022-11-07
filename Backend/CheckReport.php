<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();




$myID =$_POST['reporterID'];
$reportedID =$_POST['reportedID'];
$serviceID =$_POST['serviceID'];
$requestID =$_POST['requestID'];
$transactionType =$_POST['transactionType'];

if($transactionType === "request"){
    $result = $DBHandler->reportRequestExists($myID,$reportedID,$requestID);
} else if($transactionType === "service"){
    $result = $DBHandler->reportServiceExists($myID,$reportedID,$serviceID);
} else {
    $result = $DBHandler->reportExists($myID,$reportedID);
}

//$exists = $DBHandler->existslike("userprofile","userName",$userName);

//echo $result;
if($result){
    echo "true";
} else {
    echo "false";
}
//echo $exists;