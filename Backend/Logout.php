<?php
session_start();
require_once('../Classes/DBHandler.php');

$useremail = $_SESSION["userEmail"];

//$DBHandler = new DBHandler();
//$DBHandler-> updateColumn("users","USERSTATUS","offline","email",$useremail);


session_destroy();
header("Location:../Login.php");

?>