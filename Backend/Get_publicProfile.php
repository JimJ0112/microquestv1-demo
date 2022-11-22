<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$tablename = "userprofile";
$column = "userID";
$condition = $_POST['userID'];
//$condition = 11;

$userProfile = $DBHandler->getUserRow($tablename,$column,$condition);

if($userProfile != "failed to fetch"){
    $userProfile = json_encode($userProfile);
}



$userType = $_POST['userType'];
//$userType = "Responder";

if($userType === "Responder"){

    // use usertype, if usertype == responder, do this shit
    $tablename = "servicesinfo";
    $column = "responderID"; 
    $condition = $_POST['userID'];
    //$condition = 11;

    $userServices = $DBHandler->getServices($tablename,$column,$condition,'servicePosition');
    
    if($userProfile != "failed to fetch" && $userServices != "failed to fetch"){

         $userServices =  json_encode($userServices);
        
        echo json_encode(
            array_merge(
                json_decode($userProfile,true),
                json_decode($userServices,true)
            )
        );
        
        
    } else{
        echo $userProfile;

    }

 


} else {
    echo $userProfile;
}


   
    //echo json_last_error_msg();
    


