<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




$userID= $_POST['userID'];
$myID= $_POST['myID'];


$result = $DBHandler-> updateConversationStatus($userID,$myID);
 
echo $result;

//header("location:../Messages.php");


    






/*
echo $senderID= "11";
echo $recieverID= "11";
echo $messageBody= "body";
echo $messageDate = date("Y-m-d H:i:s",time());
echo $messageTime = date("H:i:s",time());
*/






   
    //echo json_last_error_msg();