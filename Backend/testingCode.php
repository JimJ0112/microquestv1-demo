<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();






$tablename = "reportsinfo";
$column = "reportedAccountID";
$condition =  11;
$column1 = "reportStatus";
$condition1 = "Restricted";


 $results =$DBHandler-> checkUserRestricted($tablename,$column,$condition,$column1,$condition1);
 print_r($results);
if($results !== "failed to fetch" || $results !== null ){
   // $results = json_encode($results);
  //  $results = json_decode($results,true);


   print_r($results);
   
  // $restrictDuration =  $results[0]['restrictDuration'];
   $restrictDuration =  $results[0][11];


    
   date_default_timezone_set("Asia/Manila");
   $today =  date("Y-m-d"); 


 //  $restrictDate =  $results[0]['reportActionDate'];
  $restrictDate =  $results[0][10];


   //$restrictDate =  "2022-11-15";

   //$today = "2023-11-15";


   $restrictionStartDate = new DateTime($restrictDate);
   $thisDate = new DateTime($today);

   $abs_diff = $thisDate->diff($restrictionStartDate)->format("%a"); //3
  
   echo $daysRemain =   $restrictDuration - $abs_diff;

    
    
} else {
   echo $isRestricted = false;
}
