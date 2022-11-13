<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




$userID= $_POST['userID'];
$myID= $_POST['myID'];


$result = $DBHandler-> updateConversationStatus($userID,$myID);
 
echo $result;

//header("location:../Messages.php");
