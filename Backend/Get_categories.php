<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "servicesinfo";
$column = "serviceStatus";
$condition = "";
$categories = $DBHandler-> getCategories($tablename,$column,$condition,'serviceCategory');


     echo json_encode($categories);

    if($categories === ""){
    echo json_last_error_msg();
    }


