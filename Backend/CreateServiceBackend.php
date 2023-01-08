<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

    $responderID = $_POST["responderID"];
    $serviceName=$_POST["servicePosition"];
    $AlreadyExists = $DBHandler->serviceExists("servicesInfo",$responderID,$serviceName);

    if($AlreadyExists){
        header("location:../Responder_CreateService.php?msg= You have already Offered this service! ");
    
    } else{

    
        



    if(isset($_POST["formType"])){
        $formType = $_POST["formType"];

        $responderID = $_POST["responderID"];
        $serviceCategory= $_POST["serviceCategory"]; 
        $servicePosition=$_POST["servicePosition"];
        $rate = $_POST["rate"];
        //$certification=$_POST["certification"];
        $certification = "none";
        $certificateFile = "none";
        

        /*
        if(is_uploaded_file($_FILES["certificateFile"]["tmp_name"])){
            
            $certificateFile=file_get_contents($_FILES["certificateFile"]["tmp_name"]);
        }else{
            $certificateFile = "none";
        }
        */
        $mySpecialization = $_SESSION["specialization"];
        $SpecializationExists = $DBHandler->specializationExists($responderID,$serviceCategory);
        if($SpecializationExists || $serviceCategory === $mySpecialization){

        }else{
            $addSpecialization = $DBHandler->addSpecialization($responderID,$serviceCategory);
        }

    

    
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
    
            echo $serviceCategory= $_POST["serviceCategory"]; 
          
            $imageFile = $DBHandler->getServicesBannerImage($serviceCategory,$servicePosition);

            if($imageFile === "Null" || $imageFile === null){
                $imageFile = file_get_contents("../img/magnifying-glass.png");
                $bannerImage = $imageFile;

            } else{
                $bannerImage = $imageFile; 
            }

            echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$bannerImage);

        echo $serviceCategory,$servicePosition,$rate,$responderID,$certification;

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

        header("location:../Responder_PasabuyProducts.php");


    } else if($formType === "otherCategories"){

        if(is_uploaded_file($_FILES['bannerImage']["tmp_name"])){
            $bannerImage = file_get_contents($_FILES['bannerImage']["tmp_name"]);
        } else {
            $bannerImage = "none";
        }
        echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$bannerImage);
        echo $DBHandler-> registerCategory($serviceCategory,$servicePosition);
        

    }

        header("location:../Responder_MyServices.php");


    }


 
}