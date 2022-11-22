<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




 $serviceID= $_POST["serviceID"];

 $result = $DBHandler->getServiceReviewsWithRatings($serviceID);

 if($result === "failed to fetch"){

    echo $result;
 }else{
    echo json_encode($result);
 }
