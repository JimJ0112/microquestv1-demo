<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$tablename = "userprofile";
$column = "userID";
$condition = $_POST['userID'];
$userProfile = $DBHandler->getUserRow($tablename,$column,$condition);

if($userProfile != "failed to fetch"){
    $userProfile = json_encode($userProfile);
}



$userType = $_POST['userType'];

if($userType === "Responder"){

    // use usertype, if usertype == responder, do this shit
    $tablename = "servicesinfo";
    $column = "responderID"; 
    $condition = $_POST['userID'];
    $userServices = $DBHandler->getServices($tablename,$column,$condition);
    
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
    


