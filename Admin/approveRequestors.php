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


    <title>Admin Dash</title>
</head>
<body>
    <!-- Nav -->


    <?php
        require_once("imports/adminNav.php");

    ?>
    <div id="DashBoardContent">


                    <table id="DashBoardContent_Table">

                        <img src="../img/logo.png" id="loadingImage"/>


                        <thead id="DashBoardContent_TableHead"> 
                            <tr> 
                                <td> Actions </td>
                                <td> User </td>

                                <td> Location </td>

                                <td> Name </td>

                                <td> ID provided </td>

                            </tr>
                        </thead>

                        <tbody id="DashBoardContent_TableBody">
                        </tbody>

                    </table>

    </div>
    

    <!-- report action forms --> 
    <div id="restrictFormBack"> 
    
        

    <form id="restrictForm" method="post" action="backend/RestrictUser.php"> 
        <div id="closeButton" onclick="closeForms()"> ✕ </div>
        <h1> Restrict </h1>
        <input type="hidden" name="reportedUserID"/>
        <input type="hidden" name="reportID" id="reportIDRestrict"/>
        <label for="restrictDuration"> Duration in days: </label>
        <input type="number" name="restrictDuration" max="360" min="1"/> 
        <br/>
        <br/>
        <input type="submit" value="Confirm"/>
        <input type="reset" value="Cacncel" onclick="closeForms()"/>


    </form>

</div>

<div id="BanFormBack" method="post" action="backend/BanUser.php"> 
    <form id="banForm" method="post"> 
        <div id="closeButton" onclick="closeForms()"> ✕ </div>
        
        <h1> Ban </h1>
        <input type="hidden" name="reportedUserID"  id="reportedUserIDBan"/>
        <input type="hidden" name="reportID"/>

        <br/>
        <br/>
        <label> Are you sure to ban this user? </label>
        <input type="submit" value="Confirm"/>
        <input type="reset" value="Cacncel" onclick="closeForms()"/>


    </form>
</div>

<div id="sendNotificationFormBack"> 
    <form id="NotificationForm" method="post" action="backend/sendNotifications.php"> 
        <div id="closeButton" onclick="closeForms()"> ✕ </div>

        <h1> Send Notification </h1>
        <input type="hidden" name="reportedUserID" id="reportIDNotif" />
        <input type="hidden" name="reportID" />
        <label for="notifType"> Notification Type: </label> <br/>
        <select name="notifType"> 
            <option value="Warning"> Warning </option>
            <option value="Update"> Update </option>
            <option value="Message"> Message </option>
        </select> <br/>
        <textarea name="notifMessage" col="10" rows="5" style="resize:none;"></textarea>
        <br/>
        <br/>
        <input type="submit" value="Confirm"/>
        <input type="reset" value="Cacncel" onclick="closeForms()"/>

    </form>
</div>


<div id="viewImageBack">
    <div id="viewImageForm"> 
        <div id="closeButton" onclick="closeImage()"> ✕ </div> 
        <img id="viewImage"> 


    </div> 


</div>


<div id="LoadingScreen"> 

    <div id="loadingDiv"> 
        <h1 id="loadingText"> Loading... </h1>
        <img src="img/loading.gif"  id="loadingImage">
    </div>
  

</div>

<div id="ProcessingScreen"> 

    <div id="loadingDiv"> 
        <h1 id="loadingText"> Processing... </h1>
        <img src="img/processing.gif"  id="loadingImage">
    </div>
  

</div>

    <script>getRequestors() </script>   
    <script src="js/navbar.js"> </script>
</body>
</html> 