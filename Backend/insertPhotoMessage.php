<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

date_default_timezone_set("Asia/Manila");


$senderID= $_POST['senderID'];
$recieverID= $_POST['recieverID'];


//$message= $_POST["message"];

$messageImageFile= file_get_contents($_FILES["messageImageFile"]["tmp_name"]);
//echo $messageImageFile;
//$messageImageFile= $_FILES["messageImageFile"]["tmp_name"];

$messageFileType = $_FILES["messageImageFile"]["type"];



if($senderID != $recieverID){


    
    $messageDate = date("Y-m-d H:i:s",time());
    $messageTime = time();
    $firstChat =  $DBHandler->firstConversation($senderID,$recieverID);
    //$firstChat = 1;

    if($firstChat === 1){

        

        $senderUserName = $_POST['senderUserName'];
        $recieverUserName = $_POST['recieverUserName'];

        if(isset($_POST["message"])){
            $messageBody= $_POST["message"];
        } else{
            $messageBody= "no message";
        }
    

        $latestIDQuery = "SELECT MAX(messageID) FROM messages";
        $latestID = $DBHandler->runGET($latestIDQuery);
        $latestID = (int)$latestID['MAX(messageID)'] + 1;

            /* making directory to store the files for user */
            $Directory = 'userFiles/messagesPictures/';

                if(is_dir("../".$Directory)==false){
                    echo mkdir("../".$Directory);
                } else {
                    echo"Directory Already Exists!";
                }

 

                $MessagePicDirectory = $Directory."/IMG_".$latestID.$senderUserName.$recieverUserName.'.png';
                file_put_contents('../'.$MessagePicDirectory, $messageImageFile);

            

        $result = $DBHandler->sendPhotoMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName,$messageFileType,$MessagePicDirectory);
 
        $DBHandler-> updateConversation($senderID,$recieverID,"Photo",$messageDate);

        
       
        //$updateSender = $DBHandler-> updateSenderReciever($recieverID,$senderID);
         //echo $updateSender;
         //$tablename = "userprofile";
         //$column = 'userID';
         //$name = 'userPhoto';
         //$condition = $recieverID;

         //$userProfile = $DBHandler->getImage($tablename,$column,$condition,$name);

            //header("location:../Messages.php?selectedUserName=$recieverUserName&selectedConversation=$recieverID&userProfile=$userProfile");
            //header("location:../Messages.php?selectedUserName=$recieverUserName&selectedConversation=$recieverID);


    } else{

            $firstChat = 0;
           // echo $DBHandler -> newConversation($senderID,$recieverID,$messageBody,$messageDate,"New Message");


            if(isset($_POST["message"])){
                $messageBody= $_POST["message"];
            } else{
                $messageBody= "no message";
            }

            $senderUserName = $_POST['senderUserName'];
            $recieverUserName = $_POST['recieverUserName'];
 

            $result = $DBHandler->sendPhotoMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName,$messageFileType,$messageImageFile);

 
            echo $result;

            //header("location:../Messages.php");
            //header("location:../Messages.php?selectedUserName=$recieverUserName&selectedConversation=$recieverID");


    }
    
} else{
    echo "failed";
    header("location:../Messages.php?msg=message to self coming soon..");


}



/*
echo $senderID= "11";
echo $recieverID= "11";
echo $messageBody= "body";
echo $messageDate = date("Y-m-d H:i:s",time());
echo $messageTime = date("H:i:s",time());
*/






   
    //echo json_last_error_msg();