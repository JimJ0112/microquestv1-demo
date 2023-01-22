<?php


include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$tablename = "userprofile";
$column = "userDescription";
$name = $_POST['userDescription'];
$condition = "userID";
$conditionvalue = $_POST['userID'];




echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);



