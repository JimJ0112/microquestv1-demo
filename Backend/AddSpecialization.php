<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

echo $responderID = $_POST["responderID"];
echo $specialization=$_POST["specialization"];





    echo $results = $DBHandler->addSpecialization($responderID,$specialization);

    header("location:../ViewMyProfile.php?userID=$responderID&userType=Responder&msg=Specialization Added Successfully");

    
    

    
