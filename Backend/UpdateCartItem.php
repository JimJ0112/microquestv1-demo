<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

$tablename = "cart";
$column = "productStatus";
$name = $_POST["status"];
$condition = "cartID";
$conditionvalue = $_POST['cartItemID'];
echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

  
//UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue'

//header("location:../Requestor_RequestBoard.php");