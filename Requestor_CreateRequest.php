<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:LoginForm.php?msg=Please Login First");
    }

    if(isset($_SESSION["userType"])){
        $usertype = $_SESSION["userType"];
        if($usertype != "Requestor"){
            header("location: User_Profile.php?msg= Not a Reponder");
        }
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
    <link rel="stylesheet" href="css/Requestor_CreateRequest.css">

    <!--<script src="js/createService.js"> </script>-->


    <title> Create a Request </title>
</head>

<body onload="getServices()" id="Responder_CreateServiceBackground">
    <?php
                require_once("imports/ResponderNavBar.php");
    ?>
<img src="img/b.jpg" id="BodyBackgroundImg"/>


<!-- Main -->


<div id="Responder_CreateServiceMainBack">
    
        <br/>
            <center> <h1 id="RequestOrdersTitle"> Create a Request</h1> </center>
        <br/>

        
 <div id="Responder_CreateServiceMain">

    <center>


       
            <div id="CreateRequestControlsContainer">

                <div id="ControlItemRequestsButton">
                    <table>
                        <tr>
                            <td>
                                <image src="img/g838.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Requestor_AvailableServices.php"> <span id="RequestsButtonText"> Avail Services </span> </a>
                            </td>
                        <tr>
                    </table>
                </div>
            <div>

            <div id="ControlItemRequestsButton">
                    <table>
                        <tr class="navControlSelected">
                            <td>
                                <image src="img/requests.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Requestor_RequestBoard.php" > <span id="RequestsButtonText"> My Requests </span> </a>
                            </td>
                        <tr>
                    </table>
            </div>

            <div class="CreateRequestControlsDropDown" id="AvailableServicesCategoryContainer"> 
						<select id="AvailableServicesCategory"> 
							<option> Category</option>
						</select> 
			</div>
      

    </center>
    




 </div>
</div>
    



</body>
</html>