<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$categories = $DBHandler->getOtherServices();

if($categories === "failed to fetch"){
    echo $categories;
}else{
    echo json_encode($categories);

}
 
 

   
    //echo json_last_error_msg();
    


