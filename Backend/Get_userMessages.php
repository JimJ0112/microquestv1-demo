<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$ID = $_POST['userID'];

//$result = $DBHandler->getUserMessages($ID,'messageSender');
$result = $DBHandler->getUserMessages($ID);



if($result  != "failed to fetch"){

    $result = json_encode($result);
    echo $result;
    
    
} else {

    echo $result;
    

}






   
    //echo json_last_error_msg();
    


