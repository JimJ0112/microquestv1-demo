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
    /* making directory to store the files for user */
    $Directory = 'userFiles/paymentFiles';

    if(is_dir("../".$Directory)==false){
        echo mkdir("../".$Directory);
    } else {echo"Directory Already Exists!";

    }

     $transactionID = $_POST['transactionID'];

    $paymentFileDirectory = $Directory."/Payment_Transaction_".$transactionID.'.png';
    file_put_contents('../'.$paymentFileDirectory , $paymentFile);

}else{
    $paymentFileDirectory = "none";

}



//echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
$result = $DBHandler -> setPayment($name,$conditionvalue,$paymentFileDirectory);


// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");


if(isset($_POST["userType"])){
    $usertype = $_POST["userType"];

    if($usertype === "Requestor"){
       // header("location: ../Requestor_Transactions.php");
       header("location: ../Requestor_ServiceTransactions.php");
    } else {
        //header("location: ../Responder_Transactions.php");
       header("location: ../Responder_ServiceTransactions.php");

    }

}



//header("location: ../");

