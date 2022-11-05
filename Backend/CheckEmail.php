<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$Email = $_POST['Email'];
$exists = $DBHandler->exists("userprofile","userEmail",$Email);

if($exists){
    echo "true";
} else {
    echo "false";
}
//echo $exists;