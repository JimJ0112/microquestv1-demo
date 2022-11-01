<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();



$requests = $DBHandler->getPasabuyRequests();

if($requests != "failed to fetch"){
    echo json_encode($requests);
} else {
    echo $requests;
}
// $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' ORDER BY $orderby";



