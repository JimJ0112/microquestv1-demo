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

$reportedUserID = $_POST["reportedUserID"];

//$reportedUserID = 11;

date_default_timezone_set("Asia/Manila");
$actionDate = date("Y-m-d");


echo $result = $DBHandler->UnbanUser($reportedUserID,$actionDate);


echo $bannedUserEmail = $DBHandler->getData("userprofile","userID",$reportedUserID,"userEmail");
echo $reportedUserType = $DBHandler->getData("userprofile","userID",$reportedUserID,"userType");

if($reportedUserType === "Responder"){

    echo $hideServices = $DBHandler->updateColumn("servicesinfo","serviceStatus","Active","responderID",$reportedUserID);


} else{

    echo $hideRequests = $DBHandler->updateColumn("requestsinfo","requestStatus","Active","requestorID",$reportedUserID);

}


header("Location:sendEmailUnBannedNotification.php?userEmail=$bannedUserEmail");


?>