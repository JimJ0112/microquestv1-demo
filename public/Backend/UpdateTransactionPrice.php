<?php


include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$tablename = "transactions";
$column = "price";
$name = $_POST['updatePrice'];
$condition = "transactionID";
$conditionvalue = $_POST['transactionID'];


/*
$tablename = "transactions";
$column = "price";
$name = 200;
$condition = "transactionID";
$conditionvalue = 79;
*/

echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

header("location:../MyServices.php");

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";