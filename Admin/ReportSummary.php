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
    <link rel="stylesheet" href="css/ReportSummary.css">

    <link rel="manifest" href="../manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
    <!--<script src="js/adminDashboard.js"> </script>-->
    <script src="js/ReportSummary.js"> </script>


    <title>Report Summary </title>
</head>
<body>
    <!-- Nav -->
    <?php
        require_once("imports/adminNav.php");
    ?>

    <!-- main content -->

    <div id="reportSummary"> 

    <img src="../img/logo.png" id="microquestLogo"/> 
    <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/>
    <center>
        <h1> Report Summary <h1>
    </center>

        <br/><br/>
    <div id="reportInfoHeader">
 
        <b> Report ID </b> <br/>
            <span id="reportID"> rprt 0001 </span> 
        <br/>
        <br/>
        <b> Report Category </b> <br/>
            <span id="reportCategory"> rprt 0001 </span> 
        <br/>
        <br/>
        <b> Report Status </b> <br/>
            <span id="reportStatus"> Restricted </span> 
        <br/>
        <br/>
        <b> Report Date </b> <br/>
            <span id="reportDate"> 18/11/2022 </span> 
        <br/>
        <br/>
        <b> Report Response Date </b> <br/>
            <span id="reportResponseDate"> 18/11/2022 </span> 
        <br/>
        <br/>
        <br/>
        <br/>
     
    </div>
    
    <center>
    <table id="UsersInfo">
        <tr>
            <td id="ReporterInfo">
                <b> Reporter: </b> <br/><br/>
                    
                        <span id="reporterName"> Jim Lourdy Manrique </span> <br/>
                        <span id="reporterEmail"> Jimmanrique12@gmail.com </span> <br/>
                        <span id="reporterUserType"> Responder </span> 
                   
            </td>

            <td id="ReportedInfo">
                <b> Reported Account: </b> <br/><br/>
                    
                        <span id="reportedUserID"> 10 </span> <br/>
                        <span id="reportedName"> Jim Lourdy Manrique </span> <br/>
                        <span id="reportedEmail"> Jimmanrique12@gmail.com </span> <br/>
                        <span id="reportedUserType"> Responder </span> 
                    
            </td>
        </tr>
    </table>

    <p> <b>  Report Description  </b> </p> <br/>
    <p id="ReportDescription"> </p>
    </center>

    <hr/>

    <div id="RequestsInfo"> 
        
        <center> 
            <h3> Requests Info </h3> 
        </center>

        <div id="RequestsInfoInner"> 
            <b> Request ID </b> <br/>
            <span id="requestID"> 10 </span> <br/><br/>

            <b> Request Category</b> <br/>
            <span id="requestCategory">  Home Services </span> <br/><br/>

            <b> Title </b> <br/>
            <span id="requestTitle"> Lawn Cleaning </span> <br/><br/>

            <b> Due Date </b> <br/>
            <span id="dueDate"> 18-11-2022</span> <br/><br/>


            <b> Expected Price </b> <br/> 
        
                <span id="expectedPrice"> Php 10000.00 </span> <br/>
                <span id="isNegotiable"> Negotiable </span>
   

            <br/><br/>
            <b> Description </b> 
            <p id="RequestDescription"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> 
            <br/><br/>


        </div> 
        
         
    </div>

    <hr/>

    <div id="ServiceInfo"> 
        
        <center> 
            <h3> Service Info </h3> 
        </center>

        <div id="ServiceInfoInner"> 
            <b> Service ID </b> <br/>
            <span id="ServiceID"> 10 </span> <br/><br/>

            <b> Service Category</b> <br/>
            <span id="ServiceCategory">  Home Services </span> <br/><br/>

            <b> Title </b> <br/>
            <span id="ServiceTitle"> Lawn Cleaning </span> <br/><br/>


            <b> Price </b> <br/> 
                <span id="serviceExpectedPrice"> Php 10000.00 </span> <br/>
               
   

            <br/><br/>

        </div> 
        
         
    </div>



    </div>

 



<?php
    if(isset($_GET["reportID"])){
        $reportID = $_GET["reportID"];
        echo"<script> getReportsInfo($reportID) </script>";
    }
?>

<script src="js/ReportSummary.js"> </script>
   <!-- <script src="js/navbar.js"> </script>-->
  

</body>
</html> 