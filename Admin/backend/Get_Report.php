<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();


$tablename="reportsinfo";
$column="reportID";
$condition=$_POST["reportID"];
//$condition=11;


//$condition = 14;



$Reports = $DBHandler->getReport($tablename,$column,$condition);
//$Reports = $DBHandler->getUserByTypeRow($tablename,$column,$condition,$userType);

//$Reports = $DBHandler->getReports();

if($Reports === "failed to fetch"){
    echo $Reports;

} else{

    echo json_encode($Reports);
}
