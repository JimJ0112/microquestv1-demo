<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

echo $responderID = $_POST["responderID"];
echo $certification=$_POST["certification"];

if(is_uploaded_file($_FILES["certificateFile"]["tmp_name"])){
    $certificateFile=file_get_contents($_FILES["certificateFile"]["tmp_name"]);
}else{
    echo $certificateFile = "none";
}

$exists = $DBHandler->exists("certificates","certificateType",$certification);

if($exists){
    header("location:../ViewMyProfile.php?userID=$responderID&userType=Responder&msg=You have already saved this certificate title");
    
}else{

    echo $results = $DBHandler->registerCertificate($responderID,$certification,$certificateFile);

    header("location:../ViewMyProfile.php?userID=$responderID&userType=Responder&msg=Certificate Registered Successfully");
}
    
    

    
