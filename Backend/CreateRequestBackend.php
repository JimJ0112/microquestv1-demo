<?php
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

$formType = $_POST["formType"]; 


if($formType === "Pasabuy"){


$requestorID = $_POST["requestorID"]; 
$requestorMunicipality = $_POST["requestorMunicipality"]; 
$requestCategory = $_POST["requestCategory"]; 
$datePosted = $_POST["datePosted"]; 
$productImage= $_POST["productImage"];
$productName= $_POST["productName"];
$productBrand= $_POST["productBrand"];
$requestExpectedPrice= $_POST["requestExpectedPrice"];
$isNegotiable= $_POST["isNegotiable"];
$dueDate= $_POST["dueDate"];

} else{


 
  $requestorID = $_POST["requestorID"];
  $requestorMunicipality = $_POST["requestorMunicipality"]; 
  $datePosted = $_POST["datePosted"]; 
    
  $requestCategory = $_POST["requestCategory"]; 
  $requestTitle = $_POST["requestTitle"]; 
  $requestExpectedPrice = $_POST["requestExpectedPrice"];
  $isNegotiable = $_POST["isNegotiable"];
  $dueDate = $_POST["dueDate"];
  $requestDescription = $_POST["requestDescription"];
 
  echo $DBHandler-> registerRequest($requestCategory,$requestTitle,$requestDescription,$requestExpectedPrice,$isNegotiable,$datePosted,$dueDate,$requestorID,$requestorMunicipality);

  header("location: ../RequestBoard.php");


}

//$DBHandler-> registerRequest($requestCategory,$requestTitle,$requestDescription,$requestExpectedPrice,$isNegotiable,$datePosted,$dueDate,$requestorID,$requestorMunicipality)
//echo"success!";
//header("location: RequestBoard.php");  