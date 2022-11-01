<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$ID = $_POST['userID'];
$myID = $_POST['myID'];

$result = $DBHandler->getUserConversation($myID,$ID);

$userName = $DBHandler ->getData("userprofile","userID",$ID,"userName");
$userEmail = $DBHandler ->getData("userprofile","userID",$ID,"userEmail");
$municipality = $DBHandler ->getData("userprofile","userID",$ID,"municipality");

//$userInfo = array("userName"=>"$userName","userEmail"=>"$userEmail","municipality"=>"$municipality");


if($result  != "failed to fetch"){

    $result = json_encode($result);
    //$userInfo = json_encode($userInfo);
    //echo $userInfo;
    //echo "[$userInfo,$result]";

    echo $result;
    

    //echo array_merge($userInfo,json_encode($result));
    
    
} else {

    echo $result;
    

}






   
    //echo json_last_error_msg();
    


