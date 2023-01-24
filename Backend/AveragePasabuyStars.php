<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();
//$serviceID = $_POST["serviceID"];
//$serviceID = 97;
//$revieweeID = 39;
$revieweeID = $_POST['revieweeID'];

$query = "SELECT COUNT(rating5star) FROM rating WHERE rating5star = 1 AND feedbackID IS NOT NULL AND revieweeID = $revieweeID AND transactionType = 'Pasabuy'";

$rating5stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating4star) FROM rating WHERE rating4star = 1 AND feedbackID IS NOT NULL AND revieweeID = $revieweeID AND transactionType = 'Pasabuy'";

$rating4stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating3star) FROM rating WHERE rating3star = 1 AND feedbackID IS NOT NULL AND revieweeID = $revieweeID AND transactionType = 'Pasabuy'";

$rating3stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating2star) FROM rating WHERE rating2star = 1 AND feedbackID IS NOT NULL AND revieweeID = $revieweeID AND transactionType = 'Pasabuy'";

$rating2stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(rating1star) FROM rating WHERE rating1star = 1 AND feedbackID IS NOT NULL AND revieweeID = $revieweeID AND transactionType = 'Pasabuy'";

$rating1stars = $DBHandler ->runGET($query);

$query = "SELECT COUNT(ratingID) FROM rating WHERE feedbackID IS NOT NULL AND revieweeID = $revieweeID AND transactionType = 'Pasabuy'";

$allRatings = $DBHandler ->runGET($query);



//print_r("5 stars: ".$rating5stars['COUNT(rating5star)']."<br/>");
//print_r("4 stars: ".$rating4stars['COUNT(rating4star)']."<br/>");
//print_r("3 stars: ".$rating3stars['COUNT(rating3star)']."<br/>");
//print_r("2 stars: ".$rating2stars['COUNT(rating2star)']."<br/>");
//print_r("1 stars: ".$rating1stars['COUNT(rating1star)']."<br/>");
//print_r("all ratings : ".$allRatings['COUNT(ratingID)']."<br/>");

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
//$totalRatings = (5*$rating5stars + 4*$rating4stars + 3*$rating3stars + 2*$rating2stars + 1*$rating1stars)/$allRatings;

// format number to two decimal points
 "total ratings: ".number_format((float)$totalRatings, 2, '.', '');
//echo"total ratings: $totalRatings";






$results = array(array('5 stars' => $rating5stars
                ,'4 stars' => $rating4stars
                ,'3 stars' => $rating3stars
                ,'2 stars'=> $rating2stars
                ,'1 stars'=> $rating1stars
                ,'all Ratings' => $allRatings
                ,'total ratings'=>$totalRatings
               ,'revieweeID' => $revieweeID));

echo json_encode($results);

