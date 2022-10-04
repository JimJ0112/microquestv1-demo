<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "requestsinfo";
$column = "requestStatus";
$condition = "Active";
$accounts = $DBHandler->getRequests($tablename,$column,$condition,'requestID');

if($accounts === "failed to fetch"){
    echo $accounts;
}else{
    echo json_encode($accounts);
}
    





