<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "products";
//$responderID = 11;
$responderID = $_POST["myID"];
$categories = $DBHandler->getMyProducts($tablename,$responderID);


    //echo json_encode($categories);

    if($categories === ""){
        echo json_last_error_msg();
    }

    if($categories === "failed to fetch"){
        echo "failed to fetch";
    }else{
        echo json_encode($categories);

    }

