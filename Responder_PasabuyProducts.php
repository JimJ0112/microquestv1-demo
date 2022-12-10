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
		Services - Pasabuy
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/Requestor_PasabuyProducts.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<script src="js/Responder_myProducts.js"> </script>

</head>
<body id="Requestor_AvailableServicesBackground">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/ResponderNavBar.php");

?>

<?php
    date_default_timezone_set("Asia/Manila");
    $today= date("Y-m-d");

?>

<!--Main-->
	<div id="AvailableServicesContainer">

		<center> <h1 id="AvailableServicesTitle"> My Products </h1> </center>
		<div><a href="Requestor_MyCart.php"> 
					  <div class="AvailableServicesContainer-ControlItem" id="myCart"> 
					</div>
					</a></div>

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
									<a href="Requestor_AvailableServices.php">
									<span class="PageIndicator"> Available Services </span>
									</a>
								</td>
					 		</tr>
						</table>
					</li>


					<li class="AvailableServicesContainer-ControlItem" id="pasabuyButton" style="border-bottom:4px solid black"> 
						
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
					  <li class="AvailableServicesContainer-ControlItem" id="myCart"> 
						
						<table>
							<tr>
								<td>
									<img src="img/shopping-cart.png" class="AvailableServicesContainer-ControlItemIcon" id="cartIcon"> 
								</td>

								<td>
									<a href="Requestor_MyCart.php"> <span>  </span> </a>
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




<?php
	$myID = $_SESSION['userID'];
	echo"<script> getProducts($myID) </script>";
?>


<div id="updateProductFormBack">

	<div id="productUpdateForm">
		
		<form method="post" action="Backend/" enctype="multipart/form-data"> 
			<table id="myServiceViewForm"> 
				<input type="hidden" name="productID" id="productIDHidden"/>
				<tr> 
					<td> Product Name </td>
					<td>  
						<input type="text" name="productName" id="productNameText" Required/>
					</td>
				</tr>

				<tr> 
					<td> Product Brand </td>
					<td> 
						<input type="text" name="productBrand" id="productBrandText" Required/>
					</td>
				</tr>

				<tr> 
					<td> Product Price </td>
					<td> 
						<input type="number" name="productPrice" id="productPriceText" placeholder="Php 0.00" Required/>
					</td>
				</tr>

				<tr> 
					<td> Delivery Price </td>
					<td> 
						<input type="number" name="productDeliveryPrice" id="productDeliveryPriceText" placeholder="Php 0.00" Required/>

					</td>
				</tr>

				<tr> 
					<td> Status </td>
					<td> 
						 <input type="radio" value="Available" name="productStatus" id="productStatus"/> Available
						 <input type="radio" value="Not Available" name="productStatus" id="productStatus"/> Not Available

					</td>
				</tr>
		
			</table>

			<input type="submit" value="Save"/>

		</form>
	</div>
 

</div>





<script src="js/Responder_myProducts.js"> </script>



</body>
</html>