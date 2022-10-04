<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




$municipality = $_POST["municipality"];
$condition = $_POST["productName"];

$column = "products.productName";




$responders = $DBHandler-> getProductsResponders($municipality,$column,$condition);



if($responders === "failed to fetch"){
     $responders = "No responders near you for this service";
     echo $responders;
} else{

     echo json_encode($responders);
}

    if($responders === ""){
    echo json_last_error_msg();
    }


