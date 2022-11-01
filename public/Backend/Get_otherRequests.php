<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$accounts = $DBHandler->getOtherRequests();


if($accounts === "failed to fetch"){
    echo $accounts;
}else{
    echo json_encode($accounts);
}
    





