<?php

session_start();
include "../classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "reportsinfo";
$column = "reportStatus";
$name = $_POST["status"];
$condition = "reportID";
$conditionvalue = $_POST['reportID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);


// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

