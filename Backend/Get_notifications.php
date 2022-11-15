<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "notificationsinfo";
$column = "recieverID";
//$condition = 11;
//$orderby = "notificationDate";
$condition = $_POST["userID"];
$orderby = "notificationID";

//getRow($tablename,$column,$condition,$orderby = null)
//$accounts = $DBHandler->getRequests($tablename,$column,$condition,'requestID');
//$query = "SELECT * FROM $tablename WHERE $column = '$condition' ORDER BY $orderby";


$results =$DBHandler-> getRow($tablename,$column,$condition,$orderby);

if($results === "failed to fetch"){
    echo $results;
}else{
    echo json_encode($results);
}
    





