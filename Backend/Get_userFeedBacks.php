<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$userID = $_POST['userID'];
//$userID = 14;
$categories = $DBHandler->getUserReviews($userID);

if($categories === "failed to fetch"){
echo $categories;
} else{
    echo json_encode($categories);

}

   
    //echo json_last_error_msg();
    


