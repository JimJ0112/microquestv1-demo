<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




 $userID = 11;
 $result = $DBHandler->getReviewsWithRatings($userID);
 echo json_encode($result);