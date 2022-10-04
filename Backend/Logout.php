<?php
session_start();
include '../Classes/DBHandler.php';
$useremail = $_SESSION["Useremail"];

$DBHandler = new DBHandler();
$DBHandler-> updateColumn("users","USERSTATUS","offline","email",$useremail);


session_destroy();
header("Location:/../Login.php");

?>