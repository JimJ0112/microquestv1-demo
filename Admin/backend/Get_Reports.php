<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();


$tablename="reportsinfo";
$column="reportStatus";
$condition="pending";
$userType = "Requestor";
//$condition = 14;


//"userID=" + userID +"&TransactionType=Request&column=requestorID"

//getUserRow($tablename,$column,$condition)
//getRow($tablename,$column,$condition,$orderby = null)
//$Reports = $DBHandler->getUserByTypeRow($tablename,$column,$condition,$userType);

$Reports = $DBHandler->getReports();

if($Reports === "failed to fetch"){
    echo $Reports;

} else{

    echo json_encode($Reports);
}
