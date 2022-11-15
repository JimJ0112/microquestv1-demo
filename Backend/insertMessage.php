<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

date_default_timezone_set("Asia/Manila");


$senderID= $_POST['senderID'];
$recieverID= $_POST['recieverID'];



if($senderID != $recieverID){

    $messageBody= $_POST['messageBody'];
    $messageDate = date("Y-m-d H:i:s",time());
    $messageTime = time();
    $firstChat =  $DBHandler->firstConversation($senderID,$recieverID);

    if($firstChat === 1){

        

        $senderUserName = $_POST['senderUserName'];
        $recieverUserName = $_POST['recieverUserName'];

    
        
 
        if(isset($_FILES['messageFile'])){
            $messageFile = $_FILES['messageFile']['tmp_name'];
            $messageFiletype = $_FILES['messageFile']['type'];
            echo $result = $DBHandler->sendMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName,$messageFileType,$messageFile);
         }else{
     
            echo $result = $DBHandler->sendMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName);
     
        }

        echo $DBHandler-> updateConversation($senderID,$recieverID,$messageBody,$messageDate);

        
       
        //$updateSender = $DBHandler-> updateSenderReciever($recieverID,$senderID);
        //echo $updateSender;
        header("location:../Messages.php");


    } else{

            $firstChat = 0;
            echo $DBHandler -> newConversation($senderID,$recieverID,$messageBody,$messageDate,"New Message");


         

            $senderUserName = $_POST['senderUserName'];
            $recieverUserName = $_POST['recieverUserName'];
 
            if(isset($_FILES['messageFile'])){
                $messageFile = $_FILES['messageFile']['tmp_name'];
                $messageFiletype = $_FILES['messageFile']['type'];
                $result = $DBHandler->sendMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName,$messageFileType,$messageFile);
            }else{
                $result = $DBHandler->sendMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName);
            }
 
            echo $result;
            header("location:../Messages.php");

    }
    
} else{
    echo "failed";
    header("location:../Messages.php?msg=message to self coming soon..");


}








   
    //echo json_last_error_msg();