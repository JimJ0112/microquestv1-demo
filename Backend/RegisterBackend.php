<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


$userEmail = $_POST['userEmail'];

$exists = $DBHandler->exists("userprofile","userEmail",$userEmail);

if($exists){
    
        header("location: ../Login.php?msg=User $email already exists!");
} else {

        $userType = $_POST['userType'];

        if(is_uploaded_file($_FILES['userPhoto']["tmp_name"])){

            $userPhoto = file_get_contents($_FILES['userPhoto']["tmp_name"]);

        }else{
            $userPhoto = "none";

        }

    
       
       
        if(isset($_POST["middleName"])){
            $middlename = $_POST["middleName"];
        } else{
            $middlename = " ";

        }

        $userName = $_POST['userName'];
        $userPassword = $_POST['userPassword'];

        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $userGender= $_POST['Sex'];

        $education = $_POST['education'];
        $municipality= $_POST['municipality'];
                    

        $houseNumber = $_POST['houseNumber'];
            
        $street = $_POST['street'];
            
        $baranggay= $_POST['baranggay'];
        $birthDate = $_POST['birthDate'];
        $idType= $_POST['idType'];

        if(is_uploaded_file($_FILES['idFile']["tmp_name"])){
            $idFile  = file_get_contents($_FILES['idFile']["tmp_name"]);
        } else {
            $idFile = "none";
        }
        
        $idNumber = $_POST['idNumber'];
        $idExpiration= $_POST['idExpiration'];
        $idFileType = $_FILES['idFile']["type"];

        //$otherIDType= $_POST['otherIDType'];
        //$otherIDFile= file_get_contents($_FILES['otherIDFile']["tmp_name"]);
        //$otherIDNumber  = $_POST['otherIDNumber'];
        //$otheridExpiration= $_POST['otheridExpiration'];

        $otherIDType= " ";
        $otherIDFile= " ";
        $otherIDNumber  = " ";
        $otheridExpiration= " ";

        if(isset($_POST["specialization"])){
            $specialization = $_POST["specialization"];
        } else {
            $specialization = "Home Service";
        }

        if($_FILES['userPhoto']["size"] > 1500000){
            header("location: ../Login.php?msg=profile image file size too big!");
        } else if($_FILES['idFile']["size"] > 1500000 ){
            header("location: ../Login.php?msg=id image file size too big!");
        } else{


            

            $hashedUserPassword = password_hash($userPassword, PASSWORD_DEFAULT);




            /* making directory to store the files for user */
                $Directory = 'userFiles/userProfiles/'.$userName;

                 if(is_dir($Directory)==false){
                    echo mkdir("../".$Directory);
                } else {echo"Directory Already Exists!";

                }

                $ID1directory = $Directory."/ID1".$userName.$firstName.$lastName.'.png';
                file_put_contents('../'.$ID1directory, $idFile);

                $ProfilePicDirectory = $Directory."/ProfilePic".$userName.$firstName.$lastName.'.png';
                file_put_contents('../'.$ProfilePicDirectory, $userPhoto);
                

            echo $result = $DBHandler->registerUser($userType,$userName,$userEmail,$hashedUserPassword,$ProfilePicDirectory,$firstName,$lastName,$userGender,$education,$birthDate,$houseNumber,$street,$baranggay,$municipality,$idType,$ID1directory,$idNumber,$idExpiration,$otherIDType,$otherIDFile,$otherIDNumber,$otheridExpiration,$idFileType,$middlename,$specialization);

            if($userType === "Responder"){
                
                $_SESSION["userEmail"] = $userEmail;
                $_SESSION["userType"] = $userType; 
                $_SESSION["userName"] = $userName;
                $_SESSION["municipality"] = $municipality;
                $userStatus = $DBHandler-> getData("userprofile","userEmail",$userEmail,"userStatus");
                $userID = $DBHandler-> getData("userprofile","userEmail",$userEmail,"userID");
                $_SESSION["userStatus"]=$userStatus;
                $_SESSION["userID"]=$userID;
                $specialization = $DBHandler-> getData("userprofile","userEmail",$userEmail,"specialization");
                $_SESSION['specialization'] = $specialization;

                echo $addSpecialization = $DBHandler->addSpecialization( $userID,$specialization);
               
                header("location:../NewResponder_CreateService.php?newUser=true");

            } else {
                
                $_SESSION["userEmail"] = $userEmail;
                $_SESSION["userType"] = $userType; 
                $_SESSION["userName"] = $userName;
                $_SESSION["municipality"] = $municipality;
                $userStatus = $DBHandler-> getData("userprofile","userEmail",$userEmail,"userStatus");
                $_SESSION["userStatus"] =$userStatus;
                $userID = $DBHandler-> getData("userprofile","userEmail",$userEmail,"userID");
                $_SESSION["userID"]=$userID;


                header("location:../Requestor_AvailableServices.php");
            }
        }
}