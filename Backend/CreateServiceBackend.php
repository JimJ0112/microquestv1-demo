<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

	



if(isset($_POST["formType"])){
    $formType = $_POST["formType"];

    $responderID = $_POST["responderID"];
    $serviceCategory= $_POST["serviceCategory"]; 
    $servicePosition=$_POST["servicePosition"];
    $rate = $_POST["rate"];
    $certification=$_POST["certification"];
    $certificateFile=file_get_contents($_FILES["certificateFile"]["tmp_name"]);

    
    /*
    if($servicePosition ==="Other" || $servicePosition === "other"){
            
           
        $servicePosition = $_POST['otherServicePosition'];
        $bannerImage = file_get_contents($_FILES['bannerImage']["tmp_name"]);
        
        echo $servicePosition;
        //echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile);
        
    }else{

        $servicePosition=$_POST["servicePosition"];
        $bannerImage = "";
        //echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile);
        echo $servicePosition;
    }

    */
    
    if($formType === "regularServices"){

        if($servicePosition ==="Other"){
            
           
            $servicePosition = $_POST['otherServicePosition'];
            //$bannerImage = file_get_contents($_FILES['bannerImage']["tmp_name"]);
            $bannerImage = "";
            echo $servicePosition;
            //echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile);
            
        }else{
    
            $servicePosition=$_POST["servicePosition"];
            $bannerImage = "";
            //echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile);
            echo $servicePosition;
        }
    
        $serviceCategory= $_POST["serviceCategory"]; 
       // $servicePosition=$_POST["servicePosition"];
        $imageFile = $DBHandler->getServicesBannerImage($serviceCategory,$servicePosition);

        if($imageFile === "Null" || $imageFile === null){
            $imageFile = file_get_contents("../Images/RequestBanners/others.jpg");
            $bannerImage = $imageFile;
        } else{
             $bannerImage = $imageFile; 
        }
        echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$bannerImage);

        //echo $serviceCategory,$servicePosition,$rate,$responderID,$certification;

    } else if($formType === "pasabuy"){
        
        $servicePosition=" ";
        $certification=" ";
        $certificateFile=" ";

        $itemCategory=$_POST["itemCategory"];
 
        $productName=$_POST["productName"];
        $productBrand=$_POST["productBrand"];
        $productDescription=$_POST["productDescription"]; 
        $productPrice=$_POST["productPrice"];
        $productImage=file_get_contents($_FILES["productImage"]["tmp_name"]);
        $rate = $_POST['rate'];
       // $productStore=$_POST["productStore"];
       // $storeLocation=$_POST["storeLocation"];

         $productStore=" ";
         $storeLocation=" ";

        echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$bannerImage);
        echo $serviceInfoID = $DBHandler ->getData('servicesinfo','responderID',$responderID,'serviceID');
        echo $DBHandler-> registerProduct($serviceInfoID,$itemCategory,$productName,$productBrand,$productDescription,$productPrice,$productImage,$responderID,$productStore,$storeLocation,$rate);      


    } else if($formType === "otherCategories"){
        $bannerImage = file_get_contents($_FILES['bannerImage']["tmp_name"]);
        echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$bannerImage);
        echo $DBHandler-> registerCategory($serviceCategory,$servicePosition);
        

    }

        //header("location:../Responder_MyServices.php");


}


 
/*

//<!-- For Pasabuy -->
$responderID = $_POST["responderID"];

$serviceCategory= $_POST["serviceCategory"]; 

$servicePosition=$_POST["servicePosition"];
$rate = $_POST["rate"];
$certification=$_POST["certification"];
$certificateFile=$_POST["certificateFile"];
  



  

//for other categories


$responderID = $_POST["responderID"];

$serviceCategory= $_POST["serviceCategory"]; 

$servicePosition=$_POST["servicePosition"];
$rate = $_POST["rate"];
$certification=$_POST["certification"];
$certificateFile=$_POST["certificateFile"];
*/