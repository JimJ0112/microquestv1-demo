<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




$revieweeID= $_POST["revieweeID"];

 $result = $DBHandler->getPasabuyReviewsWithRatings($revieweeID);

 if($result === "failed to fetch"){

    echo $result;
 }else{
    echo json_encode($result);
 }
