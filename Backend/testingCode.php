<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "userprofile";
$column = 'userID';
$name = 'userPhoto';
$condition = 11;

$userProfile = $DBHandler->getImage($tablename,$column,$condition,$name);
echo $userProfile;


?>