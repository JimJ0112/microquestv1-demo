<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

//$category = "Cleaning";
$category = $_POST['Category'];

$query= "SELECT rating.*, services.*, responder.userID, responder.userName, responder.userPhoto,responder.userEmail 
FROM rating 
INNER JOIN servicesinfo services ON ( rating.serviceID = services.serviceID)
INNER JOIN userprofile responder ON (services.responderID = responder.userID)
WHERE services.serviceCategory = '$category' GROUP BY services.serviceID";

$data = array();
$Services = $DBHandler ->runGETAll($query);

$resultCheck = mysqli_num_rows($Services);

if($resultCheck > 0){

     while($row = mysqli_fetch_assoc($Services)){
                

          /*
          $file = 'data:image/image/png;base64,'.base64_encode($row['bannerimage']);
          $row['bannerimage'] = $file;
          */

         // $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
         // $row['userPhoto'] = $file;
          

          //echo $row['serviceID']."<br/>";

          $serviceID = $row['serviceID'];

          $query = "SELECT COUNT(rating5star) FROM rating WHERE rating5star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

          $rating5stars = $DBHandler ->runGET($query);

          $query = "SELECT COUNT(rating4star) FROM rating WHERE rating4star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

          $rating4stars = $DBHandler ->runGET($query);

          $query = "SELECT COUNT(rating3star) FROM rating WHERE rating3star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

          $rating3stars = $DBHandler ->runGET($query);

          $query = "SELECT COUNT(rating2star) FROM rating WHERE rating2star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

          $rating2stars = $DBHandler ->runGET($query);

          $query = "SELECT COUNT(rating1star) FROM rating WHERE rating1star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

          $rating1stars = $DBHandler ->runGET($query);

          $query = "SELECT COUNT(ratingID) FROM rating WHERE feedbackID IS NOT NULL AND serviceID = $serviceID";

          $allRatings = $DBHandler ->runGET($query);





          $rating5stars = $rating5stars['COUNT(rating5star)'];
          $rating4stars = $rating4stars['COUNT(rating4star)'];
          $rating3stars = $rating3stars['COUNT(rating3star)'];
          $rating2stars = $rating2stars['COUNT(rating2star)'];
          $rating1stars = $rating1stars['COUNT(rating1star)'];
          $allRatings = $allRatings['COUNT(ratingID)'];

          // count total ratings
          if($allRatings != 0){
               $totalRatings = (5*$rating5stars + 4*$rating4stars + 3*$rating3stars + 2*$rating2stars + 1*$rating1stars)/$allRatings;

          } else {
               $totalRatings = 0;

          }

          //echo $totalRatings;

              // $data[] = $row;
              $info = array('userID' => $row['responderID']
              ,'userName' => $row['userName']
              ,'userEmail' => $row['userEmail']
              ,'totalRatings'=> $totalRatings
              ,'userPhoto'=> $row['userPhoto']);

              $data[] = $info;
          
       
     }


    // var_dump($data);

    //arsort($data,"totalRatings");

     $byKey = array_column($data,"totalRatings");

     array_multisort($byKey, SORT_DESC, $data);

     if($data != null){
          echo json_encode($data);
     }
      

}


/*
$serviceID = 97;

$query = "SELECT COUNT(rating5star) FROM rating WHERE rating5star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

$rating5stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating4star) FROM rating WHERE rating4star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

$rating4stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating3star) FROM rating WHERE rating3star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

$rating3stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating2star) FROM rating WHERE rating2star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

$rating2stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating1star) FROM rating WHERE rating1star = 1 AND feedbackID IS NOT NULL AND serviceID = $serviceID";

$rating1stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(ratingID) FROM rating WHERE feedbackID IS NOT NULL AND serviceID = $serviceID";

$allRatings = $DBHandler ->runGET($query);





$rating5stars = $rating5stars['COUNT(rating5star)'];
$rating4stars = $rating4stars['COUNT(rating4star)'];
$rating3stars = $rating3stars['COUNT(rating3star)'];
$rating2stars = $rating2stars['COUNT(rating2star)'];
$rating1stars = $rating1stars['COUNT(rating1star)'];
$allRatings = $allRatings['COUNT(ratingID)'];

// count total ratings
if($allRatings != 0){
     $totalRatings = (5*$rating5stars + 4*$rating4stars + 3*$rating3stars + 2*$rating2stars + 1*$rating1stars)/$allRatings;

} else {
     $totalRatings = 0;

}


 "total ratings: ".number_format((float)$totalRatings, 2, '.', '');







$results = array(array('5 stars' => $rating5stars
                ,'4 stars' => $rating4stars
                ,'3 stars' => $rating3stars
                ,'2 stars'=> $rating2stars
                ,'1 stars'=> $rating1stars
                ,'all Ratings' => $allRatings
                ,'total ratings'=>$totalRatings
               ,'serviceID' => $serviceID));

echo json_encode($results);
*/