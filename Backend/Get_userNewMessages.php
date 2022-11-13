<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$ID = $_POST['userID'];
//$ID = 11;

//$result = $DBHandler->getUserMessages($ID,'messageSender');
$result = $DBHandler->getUserNewMessagesNotifs($ID);



echo $result;






   
    //echo json_last_error_msg();
    


