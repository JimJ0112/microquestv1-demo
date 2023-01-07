<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$userID = $_POST['userID'];
$Specialization = $_POST["Specialization"];


$exists = $DBHandler->specializationExists($userID,$Specialization);



if($exists){
    echo "true";
} else {
    echo "false";
}
//echo $exists;