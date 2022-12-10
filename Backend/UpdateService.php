<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

/*
$tablename = "servicesinfo";
$column = "rate";
$name = $_POST['rate'];
$condition = "serviceID";
$conditionvalue = $_POST['serviceID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
*/

//header("location:../Responder_MyServices.php");

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";


echo $rate= $_POST['rate'];
echo $serviceID = $_POST['serviceID'];
echo $category = $_POST['category'];
echo $position = $_POST['position'];
echo $Status = $_POST['Status'];

echo $result = $DBHandler -> updateMyService($serviceID,$category,$position,$rate,$Status);
header("location:../Responder_MyServices.php");

