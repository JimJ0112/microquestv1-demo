<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$tablename = "servicesinfo";
$column = "serviceStatus";
$condition ="active";
$results= $DBHandler->getServices($tablename,$column,$condition,'serviceCategory');


    
 
    if($results === "failed to fetch"){
        echo $results;
    }else{
        echo json_encode($results);
    }

   
    //echo json_last_error_msg();
    


