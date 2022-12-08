<?php
session_start();

    if(!isset($_SESSION["microquest_AdminUsername"])){

        header("Location:Login.php");
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/NavBar.css">
    <link rel="stylesheet" href="css/dashboard.css">

    <link rel="manifest" href="../manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
    <script src="js/adminDashboard.js"> </script>
    <script src="js/dashBoardSummary.js"> </script>



    <title>Admin Dash</title>
</head>
<body>
    <!-- Nav -->


    <?php

        require_once("imports/adminNav.php");

    ?>

    
<div class="grid-content">
    <div class="grid-container">
        <div class="item1">
            <h1> Total number of users: </h1>
            <p id="totalUsers"> N </p>
        </div>
        <div class="item2">
            <div>
                <h1> Responders </h1>
                <p id="totalResponders"> N </p>
            </div>
            <div>
                <h1> Requestors </h1>
                <p id="totalRequestors"> N </p>
            </div>
        </div>
        <div class="item3">
            <div><h1>Pending Users</h1><div>
            </div><p id="totalNewUsers"> N </p></div>
        </div>  
        <div class="item4">
            <h1> Banned users: </h1>
            <p id="totalBannedUsers"> N </p>
        </div>
        <div class="item5">
            <h1> Restricted users: </h1>
            <p id="totalRestrictedUsers"> N </p>
        </div>
    </div>
</div>

 



    <script> init(); </script>
    <script src="js/navbar.js"> </script>
    <script src="js/dashBoardSummary.js"> </script>

</body>
</html> 