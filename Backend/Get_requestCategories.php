<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "requestsinfo";
$column = "requestStatus";
$condition = "Active";
$categories = $DBHandler-> getRequestCategories($tablename,$column,$condition,'requestCategory');


     echo json_encode($categories);

    if($categories === ""){
    echo json_last_error_msg();
    }


