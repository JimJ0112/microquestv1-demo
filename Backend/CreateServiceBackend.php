<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();

    $responderID = $_POST["responderID"];
    $serviceName=$_POST["servicePosition"];

    if($_POST["formType"] === "pasabuy"){
        $AlreadyExists = false;
    } else{
        $AlreadyExists = $DBHandler->serviceExists("servicesInfo",$responderID,$serviceName);
    }
    

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
        



        $mySpecialization = $_SESSION["specialization"];
        $SpecializationExists = $DBHandler->specializationExists($responderID,$serviceCategory);
        
        if($SpecializationExists || $serviceCategory === $mySpecialization){

        }else{
            $addSpecialization = $DBHandler->addSpecialization($responderID,$serviceCategory);
        }

    

    
        if($formType === "regularServices"){

            if($servicePosition ==="Other"){
            
           
                $servicePosition = $_POST['otherServicePosition'];

                echo $servicePosition;

                if(is_uploaded_file($_FILES['bannerImage']["tmp_name"])){
                    $bannerImage = file_get_contents($_FILES['bannerImage']["tmp_name"]);
        
                    /* making directory to store the files for user */
                   $Directory = 'userFiles/serviceBanners/';
        
                        if(is_dir("../".$Directory)==false){
                            echo mkdir("../".$Directory);
                        } else {
                            echo"Directory Already Exists!";
               
                        }
        
                    
                        $BannerDirectory = $Directory.$servicePosition.'.png';
                        file_put_contents('../'.$BannerDirectory, $bannerImage);
        
        
                 } else {

             
          
    
                    $imageFile = $DBHandler->getServicesCategoryBannerImage($serviceCategory);
    
                    if($imageFile === "Null" || $imageFile === null){
          
                        $imageFile = "../img/magnifying-glass.png";
                        $BannerDirectory = $imageFile;
        
                    } else{
                        $BannerDirectory = $imageFile; 
                    }
                }

            }else{
    
                $servicePosition=$_POST["servicePosition"];
          
            
                echo $servicePosition;

                $imageFile = $DBHandler->getServicesBannerImage($serviceCategory,$servicePosition);

                if($imageFile === "Null" || $imageFile === null){
      
                    $imageFile = "../img/magnifying-glass.png";
                    $BannerDirectory = $imageFile;
    
                } else{
                    $BannerDirectory = $imageFile; 
                }
            }
    
            echo $serviceCategory= $_POST["serviceCategory"]; 
          


            echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$BannerDirectory);

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

         $productStore=" ";
         $storeLocation=" ";

         
        /* making directory to store the files for user */
           // $Directory = 'userFiles/products/'.$productName.$productBrand.$responderID;
           $Directory = 'userFiles/products/';

                if(is_dir('../'.$Directory)==false){
                    echo mkdir("../".$Directory);
                } else {
                    echo"Directory Already Exists!";
                }
     
                 
                $productImageDirectory = $Directory.'/'.$productName.$productBrand.$responderID.'.png';
                file_put_contents('../'.$productImageDirectory, $productImage);

        echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$bannerImage);
        echo $serviceInfoID = $DBHandler ->getData('servicesinfo','responderID',$responderID,'serviceID');
        echo $DBHandler-> registerProduct($serviceInfoID,$itemCategory,$productName,$productBrand,$productDescription,$productPrice,$productImageDirectory,$responderID,$productStore,$storeLocation,$rate);      

        header("location:../Responder_PasabuyProducts.php");


    } else if($formType === "otherCategories"){

        if(is_uploaded_file($_FILES['bannerImage']["tmp_name"])){
            $bannerImage = file_get_contents($_FILES['bannerImage']["tmp_name"]);

            /* making directory to store the files for user */
           // $Directory = 'userFiles/serviceBanners/'.$servicePosition;
           $Directory = 'userFiles/serviceBanners/';

                if(is_dir("../".$Directory)==false){
                    echo mkdir("../".$Directory);
                } else {
                    echo"Directory Already Exists!";
       
                }

            
                $BannerDirectory = $Directory.$servicePosition.'.png';
                file_put_contents('../'.$BannerDirectory, $bannerImage);


        } else {
            $bannerImage = "none";
        }
        echo $DBHandler-> registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$BannerDirectory);
        //echo $DBHandler-> registerCategory($serviceCategory,$servicePosition);
        

    }

        header("location:../Responder_MyServices.php");


    }


 
}