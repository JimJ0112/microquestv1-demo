<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();



$tablename = "pasabuytransactions";

$column = "orderStatus";
$condition = "pasabuyTransactionID";

$name = $_POST['update'];

$conditionvalue = $_POST['transactionID'];

if(is_uploaded_file($_FILES["pasabuyPaymentFile"]["tmp_name"])){

    $paymentFile = file_get_contents($_FILES["pasabuyPaymentFile"]["tmp_name"]);

}else{
    $paymentFile = "none";

}



//echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
echo $result = $DBHandler -> setPasabuyPayment($name,$conditionvalue,$paymentFile);


// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");


if(isset($_POST["userType"])){
    $usertype = $_POST["userType"];

    if($usertype === "Requestor"){
        header("location: ../Requestor_PasabuyTransactions.php");
    } else {
        header("location: ../Responder_PasabuyTransactions.php");
    }

}



//header("location: ../");

