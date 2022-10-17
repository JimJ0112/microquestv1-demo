<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();


$tablename="userprofile";
$column="userStatus";
$condition="not verified";
$userType = "Responder";
//$condition = 14;


//"userID=" + userID +"&TransactionType=Request&column=requestorID"

//getUserRow($tablename,$column,$condition)

$Responders = $DBHandler->getUserByTypeRow($tablename,$column,$condition,$userType);

if($Responders === "failed to fetch"){
    echo $Responders;
} else{

    echo json_encode($Responders);
}
