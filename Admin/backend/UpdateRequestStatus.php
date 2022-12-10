<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "userprofile";
$column = "userStatus";
$name = $_POST["status"];
$condition = "userID";
$conditionvalue = $_POST['userID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

