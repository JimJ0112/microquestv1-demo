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
		My Services
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Responder_MyServices.css">

	<script src="js/Responder_AvailableServices.js"> </script>
</head>
<body  onload="">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/ResponderNavBar.php");

?>


<?php
	$userID = $_SESSION["userID"];
	
	echo"<script> getMyServices($userID) </script>";
?>

<!--Main-->
	<div id="AvailableServicesContainer">

		<center> <h1 id="AvailableServicesTitle"> Responder - My Services </h1> </center>

		<div id="ServicesContainer">
			
			<div id="AvailableServicesContainer-Controls">

				<ul id="AvailableServicesContainer-ControlItems">

					<li class="AvailableServicesContainer-ControlItem">
						<table>
							<!--
							<tr>
								<td>
									<img src="img/g838.png" class="RequestsContainer-ControlItemIcon">
								</td>
								<td>
									<span class="PageIndicator"> Available Services </span>
								</td>
					 		</tr>
							-->
						</table>
					</li>

					<li class="AvailableServicesContainer-ControlItem"> 
						<table>
							<tr>
								<td>
									<img src="img/requests.png"class="AvailableServicesContainer-ControlItemIcon"> 
								</td>

								<td>
									<a href="Responder_RequestBoard.php"> <span> RequestBoard </span> </a>
								</td>
							</tr>
	   					</table>
					</li>

					<li class="AvailableServicesContainer-ControlItem" id="AvailableServicesCategoryContainer"> 
						
							<a href="Responder_CreateService.php" id="OfferaServiceButton" >Offer a Service </a>
					
					</li>

				</ul>

			</div>



			<div id="AvailableServicesContainer-Content">

				<div class="AvailableService-Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

				<div class="AvailableService-Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

				<div class="AvailableService-Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

				<div class="AvailableService-Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

			</div>

			


		
	</div>








<script src="js/Responder_AvailableServices.js"> </script>






</body>
</html>