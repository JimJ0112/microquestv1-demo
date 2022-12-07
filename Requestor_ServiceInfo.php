<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

     
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="manifest" href="manifest.json">
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/Requestor_ServiceInfo.css">

    <script src="js/Requestor_ServiceInfo.js"> </script>

    <title> Service </title>
</head>
<body>



<!-- NavBar-->
<?php
	if(isset($_SESSION["userType"])){
		$userType = $_SESSION["userType"];
		if($userType === "Responder"){
			require_once("imports/ResponderNavBar.php");

		} else if($userType === "Requestor"){
			require_once("imports/RequestorNavBar.php");

		}
	}
?>


<!-- MAIN -->
<center>
    <table id="serviceInfoDivBg"> 
        <tr>
            <td id="serviceInfoDiv"> 
                <div id="serviceInfo">
                    <h2 id="serviceCategory"> Service Category </h2>
                    <h3 id="serviceTitle"> Service Title </h3>
                </div>

                
                <div id="serviceFeedbacksDiv"> 

                </div>

            </td>

            <td id="userInfoDiv"> 
                <div id="userInfo">
                    <img id="userProfileImg">  <br/>
                    <b id="responderUserName"> Username </b> <br/>
                    <b id="responderUserEmail"> User Email </b> <br/>
                    <b id="responderUserType"> User Type </b> <br/>
                <div>

                <br/>
                <hr/>
                <br/>

                <div id="serviceRatingsDiv"> 
                <h1 id="totalRatings"></h1>
                        <b> ⭐ 5 Stars </b> <progress id="ratings5StarsProgress"> </progress> &nbsp<span id="ratings5Stars"> </span> <br/>
                        <b> ⭐ 4 Stars </b> <progress id="ratings4StarsProgress"> </progress> &nbsp<span id="ratings4Stars"> </span><br/>
                        <b> ⭐ 3 Stars </b> <progress id="ratings3StarsProgress"> </progress> &nbsp<span id="ratings3Stars"> </span><br/>
                        <b> ⭐ 2 Stars </b> <progress id="ratings2StarsProgress"> </progress> &nbsp<span id="ratings2Stars"> </span><br/>
                        <b> ⭐ 1 Stars </b> <progress id="ratings1StarsProgress"> </progress> &nbsp<span id="ratings1Stars"> </span><br/>
                        <br/>
                        <b> Total number of ratings: <span id="totalNumberOfRatings"> </span> </b>


                </div>
            </td>

        </tr>
    </table>
    
</center>


<?php
    if(isset($_GET['serviceID'])){
        $serviceID = $_GET['serviceID'];

        echo "<script> getServiceInfo($serviceID) </script>";
    }

?>
</body>
</html>