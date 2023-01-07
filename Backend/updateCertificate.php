<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

echo $certificateID = $_POST["certificateID"];
//echo $certification=$_POST["certification"];
echo $responderID = $_POST["responderID"];
//echo $Status = $_POST["Status"];

$tablename = "certificates";
$condition ="CertificateID";
$conditionvalue =$certificateID;

if(is_uploaded_file($_FILES["certificateFile"]["tmp_name"])){
    $certificateFile=file_get_contents($_FILES["certificateFile"]["tmp_name"]);

    $column = "certificateFile";
    $name = $certificateFile;
    $results = $DBHandler->updateColumn($tablename,$column,$name,$condition,$conditionvalue);


}

if(isset($_POST["certification"])){

    echo $certification=$_POST["certification"];
    $column = "certificateType";
    $name = $certification;

    $results = $DBHandler->updateColumn($tablename,$column,$name,$condition,$conditionvalue);

}


if(isset($_POST["Status"])){
    echo $Status = $_POST["Status"];

    $column = "certificateStatus";
    $name = $Status;

    $results = $DBHandler->updateColumn($tablename,$column,$name,$condition,$conditionvalue);

}

    //echo $results = $DBHandler->registerCertificate($responderID,$certification,$certificateFile);

    header("location:../ViewMyProfile.php?userID=$responderID&userType=Responder&msg=Certificate Updated Successfully");

    
    

    
