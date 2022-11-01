<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


/*
$tablename = "transactions";

$column = "transactionStatus";
$condition = "transactionID";

$name = $_POST['update'];
$conditionvalue = $_POST['transactionID'];


echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

*/

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

date_default_timezone_set("Asia/Manila");
$today = date("Y-m-d");




    // set transaction status
        $tablename = "transactions";

        $column = "transactionStatus";
        $condition = "transactionID";

        $name = $_POST['update'];
        $conditionvalue = $_POST['transactionID'];


        echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);


        // set end date
        $tablename = "transactions";

        $column = "transactionEndDate";
        $condition = "transactionID";
    
    
        $name = $today;
        $conditionvalue = $_POST['transactionID'];
    
    
        echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
        echo $conditionvalue;


         $update = $_POST['update'];
         
         

// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

            $tablename = "requestsinfo";

            $column = "requestStatus";
            $condition = "requestID";
        
        
            $name = "Completed";
            $conditionvalue = $_POST['requestID'];
        
        
            echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
            echo $conditionvalue;
         
        



//header("location:../MyRequests.php");