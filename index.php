<?php 
session_start();

        header("location:Login.php");

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
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>

</head>
<body id="LoginBody">


<table id="LoginTable">
	<tr>
		<td id="LoginTable-Left">
			
				<center>
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
		   </center>
	
		</div>
	</td>

		<td id="LoginTable-right">

		</td>
	</tr>
</table>

	<form id="LoginForm" form action="Backend/LoginBackend.php" method="post">
		<center>
		<h1 id="Welcome"> Test </h1>
		<h2 id="Back"> Back</h2> 
		</center>


				<div id="FormControls">

					<label> USERNAME</label><br/>
					<input type="email" class="Form-Input" name="email"> <br/> <br/> <br/>
					<label> PASSWORD</label><br/>
					<input type="password" class="Form-Input" name="password"> <br/>

					<br/> 
					<div id="FormControls-Buttons">
						<input type="submit" value="Log In" class="LoginForm-button" id="LoginButton"/>
						<input type="reset" value="Cancel" class="LoginForm-button" id="CancelButton"/>
					</div>
				</div>
		<center>
			<h4> DOESN'T HAVE AN ACCOUNT? </h4>
			<a href="ChooseAccountType.html"> <h5 id="RegisterButton"> <u> REGISTER HERE </u> </h5></a>
		</center>
		

	</form>



	<!-- <img src="img/logo.png" id="Logo"/> -->
	<h1 id="Logo">
		 <span id="Micro"> micro </span> <br/>  
		 <span id="Quest"> QUEST </span> 
	</h1>

</body>
</html>