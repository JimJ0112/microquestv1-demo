<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




$condition = $_POST['productName'];

$column = "products.productName";

$municipality = $_POST["municipality"];






$responders = $DBHandler-> getAllProductsResponders($municipality,$column,$condition);



if($responders === "failed to fetch"){
     $responders = "No responders near you for this service";
     echo $responders;
} else{

     echo json_encode($responders);
}

    if($responders === ""){
    echo json_last_error_msg();
    }


