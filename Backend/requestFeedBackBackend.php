<?php
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");

$myID=$_POST["myID"];
$revieweeID=$_POST["revieweeID"]; 
$requestID=$_POST["requestID"];
$transactionID=$_POST["transactionID"];
$feedback = $_POST["feedback"];



 
echo $DBHandler-> registerRequestFeedback($myID,$revieweeID,$requestID,$transactionID,$feedback,$today);

// update transaction status 

$userType = $_POST["userType"];

    // set transaction status
    $tablename = "transactions";

    $column = "transactionStatus";
    $condition = "transactionID";
    
    if($userType === "Responder"){
        $name = "responder feedback";
    } else {
        $name = "requestor feedback";
    }
    

    $conditionvalue = $transactionID;
    
    
    echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

header("location: ../RequestBoard.php");




