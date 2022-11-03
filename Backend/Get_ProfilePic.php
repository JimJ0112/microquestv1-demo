<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$tablename = "userprofile";
$column = "userID";
$condition = $_POST['userID'];
//$condition = 11;
$name = "userPhoto";
//getProfilePic($tablename,$column,$condition,$name)
//getUserRow($tablename,$column,$condition)
$userProfile = $DBHandler->getUserRow($tablename,$column,$condition);

if($userProfile != "failed to fetch"){
    $userProfile = json_encode($userProfile);
    echo $userProfile;
} else{
    echo $userProfile;
}







   
    //echo json_last_error_msg();
    


