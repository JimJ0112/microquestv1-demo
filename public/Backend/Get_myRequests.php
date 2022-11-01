<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$tablename = "requestsinfo";
$column = "requestorID";
$condition = $_POST['userID'];
//$condition = 14;
$categories = $DBHandler->getMyRequests($tablename,$column,$condition);

if($categories === "failed to fetch"){
    echo $categories;
}else{
    echo json_encode($categories);
}

   
    //echo json_last_error_msg();
    


