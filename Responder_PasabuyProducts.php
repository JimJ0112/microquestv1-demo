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
	<link rel="stylesheet" type="text/css" href="css/Responder_MyProducts.css">

	<script src="js/Responder_PasabuyProducts.js"> </script>
</head>
<body  onload="">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/ResponderNavBar.php"); 
?>


<?php
	$userID = $_SESSION["userID"];
	
	//echo"<script> getMyServices($userID);</script>";
	echo"<script> getProducts($userID); </script>";
?>

<!--Main-->
	<div id="AvailableServicesContainer">

		<center> <h1 id="AvailableServicesTitle"> Responder - My Products </h1> </center>

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

					<li class="AvailableServicesContainer-ControlItem"> 
						
					
				
						<table>
							<tr>
								<td>
									<img src="img/work-icon.png" class="AvailableServicesContainer-ControlItemIcon" id="pasabuyIcon"> 
								</td>

								<td>
									<a href="Responder_MyServices.php"> <span> &nbsp My Services </span> </a>
								</td>
							</tr>
	   					</table>
				
						
				
					</li>
					

					<li class="AvailableServicesContainer-ControlItem" id="pasabuyButton" style="border-bottom:3px solid black"> 
						
						<table>
							<tr>
								<td>
									<img src="img/pasabuy-icon.png" class="AvailableServicesContainer-ControlItemIcon" id="pasabuyIcon"> 
								</td>

								<td>
									<a href="Responder_PasabuyProducts.php"> <span> &nbsp Pasabuy Products </span> </a>
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

			<!--
				<div class="productCard"> 
					<div class="ProductImageDiv">
						<img class="ProductImage">
					 </div>
					<div class="ProductInfo"> 
						<p> productName </p>
						<p> productBrand </p>
						<p> productPrice </p>
						<p> deliveryRate </p>
						<p> itemStatus</p>
					</div>
					<div class="ProductCardButtons">
						<button class="EditButton">Edit</button>
					</div>
				</div>
			-->





		</div>

			


		
	








	
	




<!--<script src="js/Responder_AvailableServices.js"> </script>-->






</body>
</html>