<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$userName = $_POST['userName'];
$exists = $DBHandler->existslike("userprofile","userName",$userName);

if($exists){
    echo "true";
} else {
    echo "false";
}
//echo $exists;