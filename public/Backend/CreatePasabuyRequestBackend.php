<?php
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();



$requestorID=$_POST["requestorID"];

$datePosted=$_POST["datePosted"];


$productImage=file_get_contents($_FILES["productImage"]["tmp_name"]);


$productName=$_POST["productName"];

$productBrand=$_POST["productBrand"];

$requestExpectedPrice=$_POST["requestExpectedPrice"];


$isNegotiable=$_POST["isNegotiable"];
   


$dueDate=$_POST["dueDate"];


$requestDescription=$_POST["requestDescription"];



 
echo $DBHandler-> registerPasabuyRequest($requestorID,$datePosted,$productImage,$productName,$productBrand,$requestExpectedPrice,$isNegotiable,$dueDate,$requestDescription);

header("location: ../RequestBoard.php");




