<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




 $userID = $_POST["userID"];

 $result = $DBHandler->getReviewsWithRatings($userID);

 if($result === "failed to fetch"){

    echo $result;
 }else{
    echo json_encode($result);
 }
