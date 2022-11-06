<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


date_default_timezone_set("Asia/Manila");
echo $reportDate =  date("Y-m-d H:i:s",time());          
$reportProof = file_get_contents($_FILES["reportProof"]["tmp_name"]);
echo $reportType = $_POST["reportType"];
echo $transactionReportID = $_POST["transactionReportID"];
echo $transactionType = $_POST["transactionType"];
echo $ReportedAccountID = $_POST["ReportedAccountID"];
echo $ReporterAccountID = $_POST["ReporterAccountID"];
echo $reportDescription = $_POST["reportDescription"];

if($transactionType === "service"){
    echo $serviceID = $transactionReportID;
    echo $requestID = null;
    echo $result = $DBHandler->registerReportService($ReportedAccountID,$ReporterAccountID,$reportType,$reportDescription,$reportProof,$serviceID,null,$reportDate);

} else if($transactionType === "request"){
    echo $serviceID = null;
    echo $requestID = $transactionReportID;
    echo $result = $DBHandler->registerReportRequest($ReportedAccountID,$ReporterAccountID,$reportType,$reportDescription,$reportProof,null,$requestID,$reportDate);
}



//echo $result = $DBHandler->registerReport($ReportedAccountID,$ReporterAccountID,$reportType,$reportDescription,$reportProof,$serviceID,$requestID,$reportDate);


//header("location:../Requestor_Transactions.php");


