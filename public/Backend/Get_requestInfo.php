<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "requestsinfo";
$column = "requestID";
$condition = $_POST['requestID'];
$requests = $DBHandler->getRequests($tablename,$column,$condition,'requestID');

if($requests != "failed to fetch"){
    echo json_encode($requests);
} else {
    echo $requests;
}
// $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' ORDER BY $orderby";



