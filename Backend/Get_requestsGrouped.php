<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "requestsinfo";
$column = "requestStatus";
$condition = "Active";
$accounts = $DBHandler->getOtherServicesGROUPED();

$newArray = array();

foreach($accounts as $k){
    $newArray[] = array_pop($k);
  }


$difference = array_unique($newArray);




if($difference === "failed to fetch"){
    echo $difference;
}else{
    echo json_encode($difference);
   
}
    





