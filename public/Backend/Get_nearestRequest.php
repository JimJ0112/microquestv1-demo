<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

/*
$tablename = "requestsinfo";
$column = "userprofile.municipality";
$condition = $_POST['municipality'];
$requests = $DBHandler->getRequests($tablename,$column,$condition,'requestID');

if($requests != "failed to fetch"){
    echo json_encode($requests);
} else {
    echo $requests;
}

*/
// $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' AND $tablename.requestCategory = '$$category' ORDER BY $orderby";



$tablename = "requestsinfo";
$column = "userprofile.municipality";
$condition = $_POST['municipality'];
$category = $_POST['category'];
//$condition = "Abucay";
//$category ="Home Service";
if($category != "All Requests"){
    $requests = $DBHandler->getNearestRequests($tablename,$column,$condition,$category,'requestID');
} else {
    $requests = $DBHandler->getNearestAllRequests($tablename,$column,$condition,'requestID');

}


if($requests != "failed to fetch"){
    echo json_encode($requests);
} else {
    echo $requests;
}