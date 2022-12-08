<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();


//getUserRow($tablename,$column,$condition)
$query = "SELECT COUNT('userID') FROM userprofile WHERE userStatus = 'not verified';";

//$users = $DBHandler->getUserByTypeRow($tablename,$column,$condition,$userType);
$users = $DBHandler -> runGET($query);


echo json_encode($users);
