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
		Requestor's Requestboard
	</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body id="Requestor_AvailableServicesBackground">

<img src="img/b.jpg" id="RequestboardBackground"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

?>

<!--Main-->
	<div id="AvailableServicesContainer">

		<center> <h1 id="AvailableServicesTitle"> Available Services </h1> </center>

		<div id="ServicesContainer">
			
			<div id="AvailableServicesContainer-Controls">

				<ul id="AvailableServicesContainer-ControlItems">

					<li class="AvailableServicesContainer-ControlItem">
						<table>
							<tr>
								<td>
									<img src="img/g838.png" class="RequestsContainer-ControlItemIcon">
								</td>
								<td>
									<span class="PageIndicator"> Available Services </span>
								</td>
					 		</tr>
						</table>

					</li>

					<li class="AvailableServicesContainer-ControlItem"> 
						<table>
							<tr>
								<td>
									<img src="img/requests.png"class="AvailableServicesContainer-ControlItemIcon"> 
								</td>

								<td>
									<a href="Requestor_RequestBoard.php"> <span> My Requests</span> </a>
								</td>
							</tr>
	   					</table>
					</li>

					<li class="AvailableServicesContainer-ControlItem" id="AvailableServicesCategoryContainer"> 
						<select id="AvailableServicesCategory"> 
							<option> Category</option>
						</select> 
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







</body>
</html>