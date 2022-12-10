<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();


$tablename="userprofile";
$column="userStatus";
$condition="verified";
$userType = "Responder";
//$condition = 14;


//"userID=" + userID +"&TransactionType=Request&column=requestorID"

//getUserRow($tablename,$column,$condition)
$query = "SELECT COUNT('userID') FROM userprofile WHERE userType = 'Responder';";

//$users = $DBHandler->getUserByTypeRow($tablename,$column,$condition,$userType);
$users = $DBHandler -> runGET($query);


echo json_encode($users);
