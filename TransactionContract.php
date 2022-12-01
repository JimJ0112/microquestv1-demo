<?php
	session_start();

	if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

    if(isset($_SESSION["municipality"])){
        $municipality = $_SESSION["municipality"];

        echo"<script> sessionStorage.setItem('municipality','$municipality')</script>";
    }

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Available Services
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	

	<link rel="stylesheet" type="text/css" href="css/style.css">
	
    
    <!-- Load Jspdf -->
    

    <script src="https://unpkg.com/pdfjs-dist@latest/build/pdf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js"> </script>
    <script src="js/TransactionContract.js"> </script>


</head>
<body>


<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

?>

<!--
<embed id="contractView" type="application/pdf" name="plugin" height="100%" width="100%" style="margin:auto" src="">


<a id="contractLink" download="hahaha.pdf"> hahahaha </a>

-->



<div id="my_pdf_viewer" style="margin:auto; width:100%; height:100%; margin-top:300px;">
        <center>
        <div id="canvas_container" style="margin:auto; width:100%;">
            <canvas id="pdf_renderer"></canvas>
        </div>

        <br/> <br/>
 
        
        <div id="navigation_controls">
            <button id="go_previous">Previous</button>
            <input id="current_page" value="1" type="number"/>
            <button id="go_next">Next</button>
        </div>
 
        <div id="zoom_controls">  
            <button id="zoom_in">+</button>
            <button id="zoom_out">-</button>
        </div>
        </center>   
</div>


<!--<img id="contractView">-->
<?php
        if(isset($_GET["ID"])){
            $id = $_GET["ID"];
    
            echo"<script> getContract($id);</script>";
        }

?>


</body>
</html>