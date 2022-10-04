<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$tablename = "servicesinfo";
$column = "responderID";
$condition = $_POST['userID'];
$services = $DBHandler->getMyServices($tablename,$column,$condition);

if($services === "failed to fetch"){
    echo $services;
} else {
    echo json_encode($services);
}

   
    //echo json_last_error_msg();
    


