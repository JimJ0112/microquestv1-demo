<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "requestsinfo";

//$column = "requestStatus";
//$name = $_POST["status"];
$condition = "requestID";
$conditionvalue = $_POST['requestID'];
//echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);



$column = "dueDate";
echo $name = $_POST['updateDueDate'];

echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

$column = "requestExpectedPrice";
echo $name = $_POST['updatePrice'];

echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

$column = "isNegotiable";
echo $name = $_POST['updateNegotiable'];

echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);


$column = "requestDescription";
echo $name = $_POST['updateDescription'];

echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);


// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

header("location:../Requestor_RequestBoard.php");