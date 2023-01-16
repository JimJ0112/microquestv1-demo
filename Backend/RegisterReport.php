<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


date_default_timezone_set("Asia/Manila");
echo $reportDate =  date("Y-m-d H:i:s",time());          

echo $reportType = $_POST["reportType"];
echo $transactionReportID = $_POST["transactionReportID"];
echo $transactionType = $_POST["transactionType"];
echo $ReportedAccountID = $_POST["ReportedAccountID"];
echo $ReporterAccountID = $_POST["ReporterAccountID"];
echo $reportDescription = $_POST["reportDescription"];

if(is_uploaded_file($_FILES["reportProof"]["tmp_name"])){
    $reportProof = file_get_contents($_FILES["reportProof"]["tmp_name"]);

    $Directory = 'userFiles/reportEvidences/';

    if(is_dir("../".$Directory)==false){
        echo mkdir("../".$Directory);
    } else {
        echo"Directory Already Exists!";
    }

    $reportEvidenceDirectory = $Directory."/Report".$transactionReportID.$ReportedAccountID.$ReporterAccountID.'.png';
    file_put_contents('../'.$reportEvidenceDirectory, $reportProof);

}else{
    $reportEvidenceDirectory = "";
}

if($transactionType === "service"){
    echo $serviceID = $transactionReportID;
    echo $requestID = null;


    echo $result = $DBHandler->registerReportService($ReportedAccountID,$ReporterAccountID,$reportType,$reportDescription,$reportEvidenceDirectory,$serviceID,null,$reportDate);

} else if($transactionType === "request"){
    echo $serviceID = null;
    echo $requestID = $transactionReportID;
    echo $result = $DBHandler->registerReportRequest($ReportedAccountID,$ReporterAccountID,$reportType,$reportDescription,$reportEvidenceDirectory,null,$requestID,$reportDate);
}





$notifType = "Warning";
date_default_timezone_set("Asia/Manila");
$notificationDate = date("Y-m-d");





// for constructing notif message



$notifMessage = "You have been reported for $reportType, our team is currently investigating the situation";


echo $result = $DBHandler->sendNotifs($ReportedAccountID,$notifType,$notifMessage,$notificationDate);


$notifMessage = "Your report $reportType has been successfully recieved by our team";
echo $result = $DBHandler->sendNotifs($ReporterAccountID,$notifType,$notifMessage,$notificationDate);





header("location:../Messages.php?msg=Report Sent!");



