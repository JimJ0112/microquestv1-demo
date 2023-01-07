<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();


$results = $DBHandler->getRestrictedUsersData();

if($results === "failed to fetch"){
    echo $results;
} else{
    echo json_encode($results);
}
