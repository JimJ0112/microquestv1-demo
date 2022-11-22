<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "servicesinfo";
$column = "serviceID";
$condition = $_POST['serviceID'];
//$condition = 97;


//getServiceInfo($tablename,$column,$condition)
$requests = $DBHandler->getServiceInfo($tablename,$column,$condition);

if($requests != "failed to fetch"){
    echo json_encode($requests);
} else {
    echo $requests;
}
// $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' ORDER BY $orderby";



