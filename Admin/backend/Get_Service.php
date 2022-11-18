<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();


$tablename="servicesinfo";
$column="serviceID";
$condition=$_POST["serviceID"];



//$condition = 14;



$Reports = $DBHandler->getService($tablename,$column,$condition);
//$Reports = $DBHandler->getUserByTypeRow($tablename,$column,$condition,$userType);

//$Reports = $DBHandler->getReports();

if($Reports === "failed to fetch"){
    echo $Reports;

} else{

    echo json_encode($Reports);
}
