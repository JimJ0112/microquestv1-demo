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

//	notificationID	recieverID	notificationType	notificationDate	notificationDescription	notificationStatus	
$reportedUserID = $_POST["reportedUserID"];
$notifType = $_POST["notifType"];
$notifMessage = $_POST["notifMessage"];
date_default_timezone_set("Asia/Manila");
$notificationDate = date("Y-m-d");


$result = $DBHandler->sendNotifs($reportedUserID,$notifType,$notifMessage,$notificationDate);
header("Location:../adminDashboard.php?msg=Action Success");
echo $result;

?>