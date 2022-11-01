<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "requestsinfo";
$column = "requestStatus";
$name = $_POST["status"];
$condition = "requestID";
$conditionvalue = $_POST['requestID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";