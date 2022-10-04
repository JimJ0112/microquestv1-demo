<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$tablename = "servicesinfo";
$column = "serviceCategory";
$condition = $_POST['condition'];
$categories = $DBHandler->getServices($tablename,$column,$condition,'servicePosition');


    echo json_encode($categories);
 

   
    //echo json_last_error_msg();
    


