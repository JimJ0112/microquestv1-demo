<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




date_default_timezone_set("Asia/Manila");
$today =  date("Y-m-d"); 

$tablename = "reportsinfo";
$column = "reportedAccountID";
$condition =  11;
$column1 = "reportStatus";
$condition1 = "Restricted";


$results =$DBHandler-> checkUserRestricted($tablename,$column,$condition,$column1,$condition1);

if($results !== "failed to fetch"){
    $results = json_encode($results);
    $results = json_decode($results,true);

    
    $restrictDuration =  $results[0]['restrictDuration'];
   // echo $isRestricted = true;
   $restrictDate =  $results[0]['reportActionDate'];
   //$restrictDate  = DateTime::createFromFormat('Y-m-d',$restrictDate);
   //$restrictDate = $restrictDate->format('d-m-Y');
   //echo $restrictDate;


  // $restrictDate = new DateTime($restrictDate);
  // $today = new DateTime($today);
 
   // echo $restrictDate;
   // echo $today;

   $restrictDate =  "15-11-2023";
   echo $restrictDate = date('d-m-Y',strtotime($restrictDate));
   echo $today = date('d-m-Y', strtotime($today));
    $diff=  $today - $restrictDate ;
    echo $diff;
   //echo round($diff / (60 * 60 * 24));


  // $sub = date_sub($restrictDate, date_interval_create_from_date_string("$restrictDuration days"));
   //echo $sub;
    
    
} else {
   echo $isRestricted = false;
}
