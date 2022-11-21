<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();



$tablename = "transactions";

$column = "transactionStatus";
$condition = "transactionID";

$name = $_POST['update'];

$conditionvalue = $_POST['transactionID'];

if(is_uploaded_file($_FILES["paymentFile"]["tmp_name"])){

    $paymentFile = file_get_contents($_FILES["paymentFile"]["tmp_name"]);

}else{
    $paymentFile = "none";

}



//echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
$result = $DBHandler -> setPayment($name,$conditionvalue,$paymentFile);


// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");


if(isset($_POST["userType"])){
    $usertype = $_POST["userType"];

    if($usertype === "Requestor"){
        header("location: ../Requestor_Transactions.php");
    } else {
        header("location: ../Responder_Transactions.php");
    }

}



//header("location: ../");

