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
            <h2> Total number of users: </h2>
            <p id="totalUsers"> N </p>
            <img src="img/ad1.png" width="50" height="50" >
        </div>
        <div class="item2">
            <div>
                <h2> Responders </h2>
                <p id="totalResponders"> N </p>
                <img src="img/aw1.png" width="50" height="50">
            </div>
            <div>
                <h2> Requestors </h2>
                <p id="totalRequestors"> N </p>
                <img src="img/ae1.png" width="50" height="50">
            </div>
        </div>
        <div class="item3">
            <div><h2>Pending Users</h2><div>
            </div><p id="totalNewUsers"> N </p>
            <img src="img/as1.png" width="50" height="50"></div>
            
        </div>  
        <div class="item4">
            <h2> Banned users: </h2>
            <p id="totalBannedUsers"> N </p>
            <img src="img/ar1.png" width="50" height="50">
        </div>
        <div class="item5">
            <h2> Restricted users: </h2>
            <p id="totalRestrictedUsers"> N </p>
            <img src="img/ar1.png" width="50" height="50" >
        </div>
    </div>
</div>

 



    <script> init(); </script>
    <script src="js/navbar.js"> </script>
    <script src="js/dashBoardSummary.js"> </script>

</body>
</html> 