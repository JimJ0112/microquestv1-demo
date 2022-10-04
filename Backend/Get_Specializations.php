<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$tablename = "servicesinfo";
$column = "serviceStatus";
$condition ="Active";
$categories = $DBHandler->getServicesForSpecialization($tablename,$column,$condition,'serviceCategory');


    echo json_encode($categories);
 

   
    //echo json_last_error_msg();
    


