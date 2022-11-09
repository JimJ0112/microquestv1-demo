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


    <title>Document</title>
</head>
<body>
    <!-- Nav -->


        <div id="NavBar">
            <ul id="NavBar_Contents">
                <li class="navItem" id="HamburgerContainer"> 
                    <div id="HamburgerButton" onclick="showNavMenu()">
                        <div class="HamburgerButton_Div"> </div>
                        <div class="HamburgerButton_Div"> </div>
                        <div class="HamburgerButton_Div"> </div>
                    </div>
                </li>

                <li class="navItem"> <img src="img/logo.png" id="Nav-Logo" title="Home"> </li>

               <li class="navItem" id="adminName" onclick="showProfileDropDown()">
                    <table>
                        <tr>
                            <td>
                                <img src="img/profile-icon-9.png" id="adminPhoto">
                            </td>
                            <td>

				                <?php
				                    if(isset( $_SESSION["microquest_AdminUsername"])){

						            $username = $_SESSION["microquest_AdminUsername"];
						            $usertype = $_SESSION["microquest_AdminType"];
			

						            echo "<b> $username </b> <br/>";
						            echo " <span style='font-weight: lighter; font-size:small;'> $usertype </span>";
					                }
				                ?>
                            </td>
                        </tr>
                    </table>
			    </li>
                
                

            </ul>
        </div>

        <ul id="profileDropdown" style="display: none;";> 
            <li> Settings </li>
            <a href="backend/Logout.php"> <li> Log out </li> </a>
            

        </ul>

        
  


    <div id="NavMenu">
        <table>
            <tr>
                <td>
                    <div id="HamburgerButton" onclick="hideNavMenu()">
                        <div class="HamburgerButton_Div"> </div>
                        <div class="HamburgerButton_Div"> </div>
                        <div class="HamburgerButton_Div"> </div>
                    </div>
                </td>

                <td id="NavMenuLogoContainer">
                    <center>
                        <img src="img/logo.png" id="NavMenuLogo" title="Home"> 
                    </center>
                
                </td>
            </tr>
        </table>


            <ul id="NavMenu_Contents">

                <li onclick="getRequestors()"> Approve Requestors</li>
                <li onclick="getResponders()"> Approve Responders</li>
                <li onclick="getAllReports()"> Show Reports </li>

                <?php

                   $adminType= $_SESSION["microquest_AdminType"];

                   if($adminType === "Super Admin"){
                        echo "<li> Create Admin Account </li>";
                   } else {

                   }

                
                ?>

            </ul>
    </div>

    <div id="DashBoardContent">
                    <table id="DashBoardContent_Table">
                        <img src="../img/logo.png" id="loadingImage"/>
                        <thead> </thead>
                        <tbody id="DashBoardContent_TableBody"> </tbody>
                    </table>

    </div>
    

    <script src="js/navbar.js"> </script>
</body>
</html> 