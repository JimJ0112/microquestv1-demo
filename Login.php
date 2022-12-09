<?php 
session_start();


    if(isset($_SESSION["userEmail"]) && isset($_SESSION["userType"])){
		$userType = $_SESSION["userType"];
       	if($userType ==="Responder"){
			header("location:Responder_RequestBoard.php");
		} else if($userType ==="Requestor"){
			header("location:Requestor_AvailableServices.php");
		}
    }

    if(isset($_GET["msg"])){
        $msg = $_GET["msg"];

        echo "<script> alert('$msg')</script>";

    }
    echo "<script> sessionStorage.clear(); </script> ";
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		microQuest - Login
	</title>

	
    <link rel="manifest" href="manifest.json">
    


	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Login.css">

	<meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>

</head>
<body id="LoginBody">


<table id="LoginTable">
	<tr>
		<td id="LoginTable-Left">
			
				
					<!-- Carousel -->
				<div class="carousel">
			   		<!-- Slideshow container -->
			   		<div class="slideshow-container">
   
			   			<!-- Full-width images with number and caption text -->
				 		<div class="mySlides fade">
				   			<img src="img/home.jpg"  class="SlideImages">
				 		</div>
   
				 		<div class="mySlides fade">
				   			<img src="img/com.png" class="SlideImages">
				 		</div>
   
				 		<div class="mySlides fade">
				  			<img src="img/other.png" class="SlideImages">  
				 		</div>
   
	   
			   		</div>
		
			
   
			 <script src="js/carousel.js"> </script>
			 <!-- End of Carousel-->
		   
	
		</div>
	</td>

		<td id="LoginTable-right">
		<form id="LoginForm" form action="Backend/LoginBackend.php" method="post">
		
		<center>
		<h1 id="Welcome"> Welcome!</h1>
		
		</center>


				<div id="FormControls">	

					<label> Email &nbsp</label><br/> 
					<input type="text" class="Form-Input" name="email" placeholder = "Enter your email..."> <br/> <br/> <br/>
					<label> Password</label><br/>
					<input type="password" class="Form-Input" name="password" placeholder = "Enter your password..."> <br/>

					<br/> 
					<div id="FormControls-Buttons">
						<input type="submit" value="Login" class="LoginForm-button" id="LoginButton"/>

				
							<a href="index.html"  class="LoginForm-button" id="CancelButton"> Cancel </a>
				

					</div>
				</div>
		<center>
			<h4 style= "margin-top: 50px;"> Doesn't have an accout?  <a href="ChooseAccountType.php" > <u id="RegisterButton"> Register</u> </a></h4>
			
		</center>
		

	</form>
		</td>
	</tr>
</table>
<!--
	<form id="LoginForm" form action="Backend/LoginBackend.php" method="post">
		
		<center>
		<h1 id="Welcome"> Welcome Back</h1>
		
		</center>


				<div id="FormControls">	

					<label> Email &nbsp</label><br/> 
					<input type="text" class="Form-Input" name="email" placeholder = "Enter your email..."> <br/> <br/> <br/>
					<label> Password</label><br/>
					<input type="password" class="Form-Input" name="password" placeholder = "Enter your password..."> <br/>

					<br/> 
					<div id="FormControls-Buttons">
						<input type="submit" value="Login" class="LoginForm-button" id="LoginButton"/>
						<input type="reset" value="Reset" class="LoginForm-button" id="CancelButton"/>
					</div>
				</div>
		<center>
			<h4 style= "margin-top: 50px;"> Doesn't have an accout?  <a href="ChooseAccountType.php" > <u id="RegisterButton"> Register</u> </a></h4>
			
		</center>
		

	</form>
-->


	<!-- <img src="img/logo.png" id="Logo"/> -->
	<h1 id="Logo">
		 <span id="Micro"> micro </span> <br/>  
		 <span id="Quest"> QUEST </span> 
	</h1>

</body>
</html>