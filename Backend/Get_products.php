<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "products";
$column = "itemStatus";
$condition = "";
$categories = $DBHandler->getProducts($tablename,$column,$condition,'productCategory');


    echo json_encode($categories);

    if($categories === ""){
    echo json_last_error_msg();
    }


