<?php
require("../classes/AdminDBHandler.php");

$DBHandler = new AdminDBHandler();





//"userID=" + userID +"&TransactionType=Request&column=requestorID"

//getUserRow($tablename,$column,$condition)
//$query = "SELECT reportedAccountID,reportCategory,reportDescription,reportedServiceID,reportedRequestID,reportActionDate,reportStatus FROM reportsinfo WHERE reportStatus = 'Banned';";

$query = "SELECT reportsinfo.reportedAccountID,
reportsinfo.reportCategory,
reportsinfo.reportDescription,
reportsinfo.reportedServiceID,
reportsinfo.reportedRequestID,
reportsinfo.reportActionDate,
reportsinfo.reportStatus,
reportsinfo.reportEvidence,
userprofile.userID,
userprofile.userName,
userprofile.userEmail,
userprofile.userPhoto,
userprofile.userType

 FROM reportsinfo
 INNER JOIN userprofile
 ON reportsinfo.reportedAccountID = userprofile.userID
 
 WHERE reportsinfo.reportStatus = 'Banned';";




//$users = $DBHandler->getUserByTypeRow($tablename,$column,$condition,$userType);
//$users = $DBHandler -> runGET($query);


$results = $DBHandler->getBannedUsersData();

if($results ==="failed to fetch"){
    echo $results;
} else{
    echo json_encode($results);
}



