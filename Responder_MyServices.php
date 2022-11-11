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

	<script src="js/Responder_MyServices.js"> </script>
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



			<div id="AvailableServicesContainer_Content">

				<div class="AvailableService_Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

				<div class="AvailableService_Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

				<div class="AvailableService_Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

				<div class="AvailableService_Card">

					<div class="ServiceTitleBackground">
						<span class="ServiceTitle"> Service Title </span>
					</div>
					
					<img class="ServiceBanner" src="img/laundry-services.jpg"/>
				
				</div>

			</div>

			


		
	</div>

</div>

<div id="myServiceViewBack">
	
	<div id="myServiceView"> 
	<div id="closeButton" onclick="closeServiceView()"> ✕ </div>

	<table id="myServiceViewTable"> 
		<tr>
			<td>
				<b>
					ID
				</b>
			</td>

			<td id="serviceIDViewContainer">
				serviceID
			</td>
		</tr>

		<tr>
			<td>
				<b>
					Category
				</b>
			</td>

			<td id="serviceCategoryViewContainer">
				serviceCategory
			</td>
		</tr>

		<tr>
			<td>
				<b>
					Service
				</b>
			</td>

			<td id="servicePositionViewContainer">
				servicePosition
			</td>
		</tr>
		
		<tr>
			<td>
				<b>
					Rate
				</b>
			</td>

			<td id="rateViewContainer">
				rate
			</td>
		</tr>

		<tr>
			<td>
				<b>
					Certification
				</b>
			</td>

			<td id="certificationViewContainer">
				certification
			</td>
		</tr>

		<tr>
			<td>
				<b>
					Certificate File
				</b>
			</td>

			<td id="certificateFileViewContainer">
				certificateFile
			</td>
		</tr>

		<tr>
			<td>
				<b>
					Status
				</b>
			</td>

			<td id="serviceStatusViewContainer">
				serviceStatus
			</td>
		</tr>

	</table>


	<form method="post" action="Backend/UpdateService.php" enctype="multipart/form-data" id="serviceViewForm"> 
			<table id="myServiceViewForm"> 
				<tr>
					<td>
						<b>
							ID
						</b>
					</td>

					<td id="ServiceFormID">
						
					</td>
					<input type = "hidden" name="serviceID" id="serviceIDHidden"/>
				</tr>

				<tr>
					<td>
						<b>
							Category
						</b>
					</td>

					<td>
						<input type="text" name="category" id="ServiceFormCategory" required/>
					</td>
				</tr>

				<tr>
					<td>
						<b>
							Service
						</b>
					</td>

					<td>
						<input type="text" name="position" id="ServiceFormPosition" required/>
					</td>
				</tr>
				
				<tr>
					<td>
						<b>
							Rate
						</b>
					</td>

					<td >
						<input type="text" name="rate" id="ServiceFormRate" required/>
					</td>
				</tr>

				<tr>
					<td>
						<b>
							Status
						</b>
					</td>

					<td>
						<input type="button" name="" id="ServiceFormStatus" required/>
					</td>
				</tr>

				<tr>
					<td>
						<input type="Button" id="submitChanges" value="Save Changes" onclick="submitEditChanges()">
					</td>
				</tr>
			</table>
	</form>

	<center>
		<br/>
		<button id="myServiceViewEditButton" onclick="editMyService()"> Edit </button>
	</center>

	</div>
	
</div>




<script src="js/Responder_AvailableServices.js"> </script>






</body>
</html>