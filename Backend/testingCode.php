<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();






$tablename = "reportsinfo";
$column = "reportedAccountID";
$condition =  11;
$column1 = "reportStatus";
$condition1 = "Restricted";


echo $results =$DBHandler-> checkUserRestricted($tablename,$column,$condition,$column1,$condition1);

if($results !== "failed to fetch" || $results !== null ){
    $results = json_encode($results);
    $results = json_decode($results,true);


   var_dump($results);
   
 //  $restrictDuration =  $results[0]['restrictDuration'];

    
   date_default_timezone_set("Asia/Manila");
   $today =  date("Y-m-d"); 


 //  $restrictDate =  $results[0]['reportActionDate'];
   //$restrictDate =  "2022-11-15";

   //$today = "2023-11-15";


   $restrictionStartDate = new DateTime($restrictDate);
   $thisDate = new DateTime($today);

   $abs_diff = $thisDate->diff($restrictionStartDate)->format("%a"); //3
   $restrictDuration;
   echo $daysRemain =   $restrictDuration - $abs_diff;

    
    
} else {
   echo $isRestricted = false;
}
