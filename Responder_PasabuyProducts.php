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

	if(isset($_GET['msg'])){
		$msg = $_GET['msg'];
        echo"<script> alert('$msg') </script>";

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
	<link rel="stylesheet" type="text/css" href="css/style2.css">
	
	<script src="js/Responder_myProducts.js"> </script>

</head>
<body id="Requestor_AvailableServicesBackground">



<!-- NavBar-->
<?php
	//require_once("imports/ResponderNavBar.php");

?>

<?php
	//require_once("imports/ResponderNavBar.php");

	if(isset($_SESSION["userStatus"]) && isset($_SESSION["userType"])){
		$status = $_SESSION["userStatus"];
		$userType = $_SESSION["userType"];

		echo $status;

		if($status === "not verified" || $status === "Declined"){
			header("location: NotVerifiedMessage.php?msg=Not Verified yet");

		}else{
			if($userType === "Responder"){
				require_once("imports/ResponderNavBar.php");
			} else{
				header("location: Requestor_AvailableServices.php?msg=Not a Responder!");
			}

		}


	}
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
		<div id="closeImage" class="closeButtonProduct" onclick="closeForm('updateProductFormBack')"> ✕ </div>

		
		<form method="post" action="Backend/UpdateProduct.php" enctype="multipart/form-data"> 
			<table id="myProductViewTable"> 
				<input type="hidden" name="productID" id="productIDHidden"/>
				<tr> 
					<td class="serviceFirstRow"> Product Name </td>
					<td class="serviceSecondRow">  
						<input type="text" name="productName" id="productNameText" Required/>
					</td>
				</tr>

				<tr> 
					<td class="serviceFirstRow" > Product Brand </td>
					<td class="serviceSecondRow"> 
						<input type="text" name="productBrand" id="productBrandText" Required/>
					</td>
				</tr>

				<tr> 
					<td class="serviceFirstRow" > Description </td>
					<td class="serviceSecondRow"> 
						<input type="text" name="productDescription" id="productDescriptionText" Required/>
					</td>
				</tr>

				<tr> 
					<td class="serviceFirstRow"> Product Price </td>
					<td class="serviceSecondRow"> 
						<input type="number" name="productPrice" id="productPriceText" placeholder="Php 0.00" Required/>
					</td>
				</tr>

				<tr> 
					<td class="serviceFirstRow" > Delivery Price </td>
					<td class="serviceSecondRow"> 
						<input type="number" name="productDeliveryPrice" id="productDeliveryPriceText" placeholder="Php 0.00" Required/>

					</td>
				</tr>

				<tr> 
					<td class="serviceFirstRow" > Status </td>
					<td class="serviceSecondRow"> 
						 <input type="radio" value="Available" name="productStatus" class="productStatus" Required/> <label>  Available </label>
						 <input type="radio" value="Not Available" name="productStatus" class="productStatus"/> <label> Not Available <label>

					</td>
				</tr>
		
			</table>

			<input class="Button" type="submit" value="Save"/>

		</form>
	</div>
 

</div>





<script src="js/Responder_myProducts.js"> </script>

<?php
	require_once("imports/footer.php"); 
?>
<link rel="stylesheet" type="text/css" href="css/footer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">



</body>
</html>