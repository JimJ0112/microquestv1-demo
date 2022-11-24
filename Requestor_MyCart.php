<?php
	session_start();

	if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

    if(isset($_SESSION["municipality"])){
        $municipality = $_SESSION["municipality"];

        echo"<script> sessionStorage.setItem('municipality','$municipality')</script>";
    }

	if(isset($_SESSION["userID"])){
		$userID = $_SESSION["userID"];
		echo "<script > sessionStorage.setItem('myID',$userID); </script>";
	}


?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		My Cart
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/Requestor_PasabuyProducts.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<script src="js/Requestor_PasabuyProducts.js"> </script>

</head>
<body id="Requestor_AvailableServicesBackground" onload="getProducts()">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

?>


<!--Main-->
	<div id="AvailableServicesContainer">

		<center> 
			
						<table>
							<tr>
								<td>
									<img src="img/shopping-cart.png" class="AvailableServicesContainer-ControlItemIcon" id="cartIcon"> 
								</td>

								<td>
									<h1 id="AvailableServicesTitle"> My Cart </h1>
								</td>
							</tr>
	   					</table>
	
			
		</center>

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
									<a href="Requestor_RequestBoard.php"> <span> My Requests</span> </a>
								</td>
							</tr>
	   					</table>
					</li>

					<li class="AvailableServicesContainer-ControlItem">
						<table>
							<tr>
								<td>
									<img src="img/g838.png" class="RequestsContainer-ControlItemIcon">
								</td>
								<td>
									<a href="Requestor_AvailableServices.php">
									<span class="PageIndicator"> Available Services </span>
									</a>
								</td>
					 		</tr>
						</table>
					</li>


					<li class="AvailableServicesContainer-ControlItem" id="pasabuyButton"> 
						
						<table>
							<tr>
								<td>
									<img src="img/pasabuy-icon.png" class="AvailableServicesContainer-ControlItemIcon" id="pasabuyIcon"> 
								</td>

								<td>
									<a href="Requestor_PasabuyProducts.php"> <span> &nbsp Pasabuy Products </span> </a>
								</td>
							</tr>
	   					</table>
				
					</li>



					<a href="Requestor_MyCart.php">
					 <li class="AvailableServicesContainer-ControlItem" id="myCart" style="border-bottom:4px solid black"> 
						
						<table>
							<tr>
								<td>
									<img src="img/shopping-cart.png" class="AvailableServicesContainer-ControlItemIcon" id="cartIcon"> 
								</td>

								<td>
									 <span>  </span> 
								</td>
							</tr>
	   					</table>
				
					 </li>
					</a>



				</ul>

			</div>



			<div id="AvailableServicesContainer_Content">

			



			</div>

			


		
	</div>




<script src="js/Requestor_PasabuyProducts.js"> </script>


</body>
</html>