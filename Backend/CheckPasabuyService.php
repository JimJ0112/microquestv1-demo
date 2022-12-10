<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$userID = $_POST['userID'];
//$userID = 11;


$pasabuy = $DBHandler->servicePasabuyExists('servicesinfo',$userID,'Pasabuy');


if($pasabuy){
    echo "true";
} else {
    echo "false";
}
//echo $exists;