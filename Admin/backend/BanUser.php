<?php

require("../classes/DBHandler.php");

$DBHandler = new DBHandler();

/**
 * process to banning a user
 * get datas
 * save datas to database
 * update report status in reportsinfo into Confirmed
 * update user status in userProfile
 * send notification to the reporter
 * send notification to the banned account
 * 
 * 
*/

//$reportedUserID = $_POST["reportedUserID"];
$reportID= $_POST["reportID"];
//$reportID= 2;
//$restrictDuration= $_POST["restrictDuration"];


date_default_timezone_set("Asia/Manila");
$actionDate = date("Y-m-d");

//$reportType = $_POST["restrictDuration"];
//$reportDescription = $_POST["restrictDuration"];

echo $result = $DBHandler->BanUser($reportID,$actionDate);
//UPDATE reportsinfo SET reportActionDate = '$actionDate', restrictDuration = $restrictDuration , reportStatus = 'Banned' WHERE reportID = $reportID;

//header("Location:../adminDashboard.php?msg=Action Success");

echo $bannedUserID = $DBHandler->getData("reportsinfo","reportID",$reportID,"reportedAccountID");
echo $bannedUserEmail = $DBHandler->getData("userprofile","userID",$bannedUserID,"userEmail");

header("Location:sendEmailBannedNotification.php?userEmail=$bannedUserEmail");


?>