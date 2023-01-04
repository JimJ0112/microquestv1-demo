<?php

session_start();
include "../classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "userprofile";
$column = "userStatus";
$name = $_POST["status"];
$condition = "userID";
$conditionvalue = $_POST['userID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);



$userEmail = $DBHandler->getData($tablename,"userID",$conditionvalue,"userEmail");
echo $userEmail;

$status = $_POST["status"];

if($status === "verified"){
    header("location:sendEmailApprovedNotification.php?userEmail=$userEmail");
}else{
    header("location:sendEmailDeclinedNotification.php?userEmail=$userEmail");

}

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

