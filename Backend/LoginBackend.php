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

  


    $exists = $DBHandler->exists("userprofile","userEmail",$email);
    $existsUserName = $DBHandler->exists("userprofile","userName",$email);
   


    // check if user is banned
    $userID = $DBHandler ->getData("userprofile","userEmail",$email,"UserID");

    $tablename = "reportsinfo";
    $column = "reportedAccountID";
    $condition =  $userID;
    $column1 = "reportStatus";
    $condition1 = "Banned";
    echo $isBanned = $DBHandler->checkUserReported($tablename,$column,$condition,$column1,$condition1);
                      
    

    // check if restricted


    $condition1 = "Restricted";


    $results =$DBHandler-> checkUserRestricted($tablename,$column,$condition,$column1,$condition1);

    if($results !== "failed to fetch"){
        $results = json_encode($results);
        $results = json_decode($results,true);

        $restrictDuration =  $results[0]['restrictDuration'];
        echo $isRestricted = true;

    } else {
       echo $isRestricted = false;
    }

    
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
    }else{
        $verify = false;
        echo "not verified";
    }



    

    if($verify && $isBanned === false && $isRestricted === false){
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


            if($usertype ==="Responder"){

                header("location: ../Responder_RequestBoard.php");

            } else if($usertype ==="Requestor"){
                header("location: ../Requestor_AvailableServices.php");

            }

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

            if($usertype ==="Responder"){

                header("location: ../Responder_RequestBoard.php");

            } else if($usertype ==="Requestor"){
                header("location: ../Requestor_AvailableServices.php");

            }

        }



    } else if($isBanned === true && $isRestricted === false){
        header("location: ../Login.php?msg=Your Account has been banned");

    } else if($isBanned === false && $isRestricted === true){
        header("location: ../Login.php?msg=Your Account has been Restricted for $restrictDuration days");

    }else if($isBanned === true && $isRestricted === true){
        header("location: ../Login.php?msg=Your Account has been banned");

    }else{
        header("location: ../Login.php?msg= Username or password incorrect!");
    }// end of inner if

} else {
    header("location: ../Login.php?msg= Not isset!");

}


