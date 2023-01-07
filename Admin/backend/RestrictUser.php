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

$restrictDuration = $_POST["restrictDuration"];
//$reportDescription = $_POST["restrictDuration"];

$result = $DBHandler->RestrictUser($reportID,$actionDate,$restrictDuration);
//UPDATE reportsinfo SET reportActionDate = '$actionDate', restrictDuration = $restrictDuration , reportStatus = 'Banned' WHERE reportID = $reportID;

header("Location:../adminDashboard.php?msg=Action Success");


echo $restrictedUserID = $DBHandler->getData("reportsinfo","reportID",$reportID,"reportedAccountID");
echo $restrictedUserEmail = $DBHandler->getData("userprofile","userID",$restrictedUserID,"userEmail");
echo $restrictedUserType = $DBHandler->getData("userprofile","userID",$restrictedUserID,"userType");


if($restrictedUserType === "Responder"){

    echo $hideServices = $DBHandler->updateColumn("servicesinfo","serviceStatus","Delisted","responderID",$restrictedUserID);
    echo $hideTransactions = $DBHandler->updateColumn("transactions","transactionStatus","cancelled","responderID",$restrictedUserID);
    echo $hidePasabuyTransactions = $DBHandler->updateColumn("pasabuytransactions","orderStatus","Cancelled","responderID",$restrictedUserID);


} else{

    echo $hideRequests = $DBHandler->updateColumn("requestsinfo","requestStatus","Delisted","requestorID",$restrictedUserID);
    echo $hideTransactions = $DBHandler->updateColumn("transactions","transactionStatus","cancelled","requestorID",$restrictedUserID);
    echo $hidePasabuyTransactions = $DBHandler->updateColumn("pasabuytransactions","orderStatus","Cancelled","requestorID",$restrictedUserID);

}




header("Location:sendEmailRestrictedNotification.php?userEmail=$restrictedUserEmail&restrictDuration=$restrictDuration");

?>