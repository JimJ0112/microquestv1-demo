<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "servicesinfo";
$column = "serviceStatus";
$name = $_POST["status"];
$condition = "serviceID";
$conditionvalue = $_POST['serviceID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";