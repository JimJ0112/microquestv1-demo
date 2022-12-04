<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$tablename = "requestsinfo";
$column = "requestorID";
$condition = $_POST['userID'];
$condition1 = $_POST['condition'];

//$condition = 14;
$categories = $DBHandler->getMyRequestsCondition($tablename,$column,$condition,$condition1);

if($categories === "failed to fetch"){
    echo $categories;
}else{
    echo json_encode($categories);
}

   
    //echo json_last_error_msg();
    


