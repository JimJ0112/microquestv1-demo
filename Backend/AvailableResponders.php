<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$position = $_POST["position"];
$municipality = $_POST["municipality"];
$category = $_POST['category'];


$responders = $DBHandler-> getAvailableResponders($position,$municipality,$category);


if($responders === "failed to fetch"){
     $responders = "Unable to load other available responders";
     echo $responders;
} else{

     echo json_encode($responders);
}

    if($responders === ""){
    echo json_last_error_msg();
    }


