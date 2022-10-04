<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();

// $_POST['condition'];

$categories = $DBHandler->getProductCategories();


    echo json_encode($categories);
 

   
    //echo json_last_error_msg();
    


