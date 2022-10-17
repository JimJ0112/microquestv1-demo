<?php

session_start();
include '../Classes/AdminDBHandler.php';
$DBHandler = new AdminDBHandler();

if(isset($_POST["email"]) && isset($_POST["password"])){
    $email = $_POST["email"];
    $password = $_POST["password"];

    $exists = $DBHandler->exists("adminprofile","adminEmail",$email);
    //$verifyPass = password_verify($hashString,$dbPasswordString);

    //checks if email exists;
    if($exists){
        $verifyAccount = true;
        echo "account exists \n";
    } else{
        $verifyAccount = false;
        echo "account does not exist \n";
    
    }

    // checks if password is the same
    $dbPassword = $DBHandler ->getData("adminprofile","adminEmail",$email,"adminPassword");
    if(password_verify($password,$dbPassword)){

        $verifyPass = true;
        echo "pass correct \n";
    } else{
        $verifyPass = false;
        echo "pass incorrect \n";
    }

    // setting verified variable if email exists and password is the same
    if($verifyAccount === true && $verifyPass === true){
        $verify = true;
        echo "verified";
    } else{
        $verify = false;
        echo "not verified";
    }

    if($verify){

        $adminID = $DBHandler ->getData("adminprofile","adminEmail",$email,"adminID");
        $adminUserName = $DBHandler ->getData("adminprofile","adminEmail",$email,"adminUserName");
        $adminEmail = $DBHandler ->getData("adminprofile","adminEmail",$email,"adminEmail");
        $adminType = $DBHandler ->getData("adminprofile","adminEmail",$email,"adminType");
        $adminStatus = $DBHandler ->getData("adminprofile","adminEmail",$email,"adminStatus");

        $_SESSION["microquest_AdminID"] =$adminID;
        $_SESSION["microquest_AdminUsername"] =$adminUserName;
        $_SESSION["microquest_AdminEmail"] =$adminEmail;
        $_SESSION["microquest_AdminType"] =$adminType;
        $_SESSION["microquest_AdminStatus"] =$adminStatus;

        header("Location: ../adminDashboard.php");


    } else{
        header("Location: ../login.php?msg= email or password incorrect");
    }

}


/*
 #INSERT INTO adminprofile VALUES(0, "admin", "jimmanrique12@gmail.com", "Jim", "$2y$10$ienK.6gXchtPWrQzKwjSR.G2glHZYd65KlZClcrVD.CFLlks27way", "", "");
*/