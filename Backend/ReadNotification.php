<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "notificationsinfo";
$column = "notificationStatus";
$name = "Read";
$condition = "notificationID";
$conditionvalue = $_POST["notifID"];



//updateColumn($tablename,$column,$name,$condition,$conditionvalue)
//UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue'

$results =$DBHandler-> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

if($results === "failed to fetch"){
    echo $results;
}else{
    echo json_encode($results);
}
    





