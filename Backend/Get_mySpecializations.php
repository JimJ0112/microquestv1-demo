<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$userID = $_POST['userID'];
$specializations = $DBHandler->getMySpecializations($userID);

if($specializations === "failed to fetch"){
    echo $specializations;
} else {    
    echo json_encode($specializations);
}

   
    //echo json_last_error_msg();
    


