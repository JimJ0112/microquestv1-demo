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

if(isset($_POST['updateNegotiable'])){

    $column = "isNegotiable";
    echo $name = $_POST['updateNegotiable'];
    
    echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
    
}else{
    
    $column = "isNegotiable";
    echo $name = "Negotiable";
    
    echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
    
}


$column = "requestDescription";
echo $name = $_POST['updateDescription'];

echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);


if(isset($_POST['updateTitle'])){
    $column = "requestTitle";
    $name = $_POST['updateTitle'];
    echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);

}else{

}

// /updateStatus

$column = "requestStatus";
echo $name = $_POST['updateStatus'];

echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);


if(isset($_POST['updateStatus'])){
    $column = "requestStatus";
    echo $name = $_POST['updateStatus'];
    echo $result = $DBHandler -> updateColumn($tablename,$column,$name,$condition,$conditionvalue);
    
}else{

}


// $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

header("location:../Requestor_RequestBoard.php");