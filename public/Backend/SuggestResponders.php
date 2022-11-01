<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

//$_POST["position"];


$position = $_POST["position"];
$municipality = $_POST["municipality"];
$category = $_POST['category'];

/*
$position = "Tatoo";
$municipality = "Hermosa";
$category = "Art";
*/

$responders = $DBHandler-> getResponders($position,$municipality,$category);


if($responders === "failed to fetch"){
     $responders = "No responders near you for this service";
     echo $responders;
} else{

     echo json_encode($responders);
}

    if($responders === ""){
    echo json_last_error_msg();
    }


