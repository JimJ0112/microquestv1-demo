<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "servicesinfo";
$column = "rate";
$name = $_POST['rate'];
$condition = "serviceID";
$conditionvalue = $_POST['serviceID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

header("location:../MyServices.php");

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";