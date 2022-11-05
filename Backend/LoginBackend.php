<?php
session_start();
include '../Classes/DBHandler.php';
$DBHandler = new DBHandler();



if(isset($_POST["email"]) && isset($_POST["password"])){

    $email =$_POST["email"];
    $password = $_POST["password"];

    // password hashing 
    $dbPassword = $DBHandler ->getData("userprofile","userEmail",$email,"userPassword");
    $dbPasswordUserName = $DBHandler ->getData("userprofile","userName",$email,"userPassword");

    //$dbPasswordString = password_hash($dbPassword, PASSWORD_DEFAULT);
    //echo password_verify("qwerty",$dbPassword);


    //$verify = $DBHandler->verifyuser($email,$password);
    $exists = $DBHandler->exists("userprofile","userEmail",$email);
    $existsUserName = $DBHandler->exists("userprofile","userName",$email);
    //$verifyPass = password_verify($hashString,$dbPasswordString);

    
    //echo $verifyPass;
    if($exists || $existsUserName){
        $verifyAccount = true;
        echo "account exists \n";
    } else{
        $verifyAccount = false;
        echo "account does not exist \n";
    
    }

    if(password_verify($password,$dbPassword) || password_verify($password,$dbPasswordUserName)){

        $verifyPass = true;
        echo "pass correct \n";
    } else{
        $verifyPass = false;
        echo "pass incorrect \n";
    }

    if($verifyAccount === true && $verifyPass === true){
        $verify = true;
        echo "verified";
    } else{
        $verify = false;
        echo "not verified";
    }


    

    if($verify){
        $test = $DBHandler ->getData("userprofile","userEmail",$email,"UserID");

        if($test != "failed to fetch"){

            $userID = $DBHandler ->getData("userprofile","userEmail",$email,"UserID");
            $useremail = $DBHandler ->getData("userprofile","userEmail",$email,"userEmail");
            $usertype = $DBHandler ->getData("userprofile","userEmail",$email,"userType");
            $approvalstatus = $DBHandler ->getData("userprofile","userEmail",$email,"userStatus");
            $username = $DBHandler-> getData("userprofile","userEmail",$email,"userName");
            $municipality = $DBHandler-> getData("userprofile","userEmail",$email,"municipality");
            $baranggay = $DBHandler-> getData("userprofile","userEmail",$email,"baranggay");
            $specialization = $DBHandler-> getData("userprofile","userEmail",$email,"specialization");
        
    
            //$DBHandler-> updateColumn("userprofile","userStatus","online","userEmail",$email);
            $userstatus = $DBHandler ->getData("userprofile","userEmail",$email,"userStatus");
    
            $_SESSION['userID'] = $userID;
            $_SESSION["userEmail"] = $useremail;
            $_SESSION['userName'] = $username;
            $_SESSION["userType"] = $usertype;
            $_SESSION["userStatus"] = $userstatus;
            $_SESSION["municipality"] = $municipality;
            $_SESSION["baranggay"] = $baranggay;
            $_SESSION['specialization'] = $specialization;
        } else{
            $userID = $DBHandler ->getData("userprofile","userName",$email,"UserID");
            $useremail = $DBHandler ->getData("userprofile","userName",$email,"userEmail");
            $usertype = $DBHandler ->getData("userprofile","userName",$email,"userType");
            $approvalstatus = $DBHandler ->getData("userprofile","userName",$email,"userStatus");
            $username = $DBHandler-> getData("userprofile","userName",$email,"userName");
            $municipality = $DBHandler-> getData("userprofile","userName",$email,"municipality");
            $baranggay = $DBHandler-> getData("userprofile","userName",$email,"baranggay");
            $specialization = $DBHandler-> getData("userprofile","userName",$email,"specialization");
        
    
            //$DBHandler-> updateColumn("userprofile","userStatus","online","userEmail",$email);
            $userstatus = $DBHandler ->getData("userprofile","userEmail",$email,"userStatus");
    
            $_SESSION['userID'] = $userID;
            $_SESSION["userEmail"] = $useremail;
            $_SESSION['userName'] = $username;
            $_SESSION["userType"] = $usertype;
            $_SESSION["userStatus"] = $userstatus;
            $_SESSION["municipality"] = $municipality;
            $_SESSION["baranggay"] = $baranggay;
            $_SESSION['specialization'] = $specialization;
        }



        //$_SESSION["approvalstatus"] = $approvalstatus;
        //header("location: ../User_Profile.php");

        if($usertype ==="Responder"){

            
            header("location: ../Responder_RequestBoard.php");
        } else if($usertype ==="Requestor"){
            header("location: ../Requestor_AvailableServices.php");
        }

    } else {
        header("location: ../Login.php?msg= Login Failed!");
    }// end of inner if

} else {
    header("location: ../Login.php?msg= Login Failed!");
}


