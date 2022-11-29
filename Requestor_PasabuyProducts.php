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
	
	<script src="js/Requestor_PasabuyProducts.js"> </script>

</head>
<body id="Requestor_AvailableServicesBackground" onload="getProducts()">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

?>

<?php
    date_default_timezone_set("Asia/Manila");
    $today= date("Y-m-d");

?>

<!--Main-->
	<div id="AvailableServicesContainer">

		<center> <h1 id="AvailableServicesTitle"> Pasabuy Products </h1> </center>

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

	<!-- productID	serviceID	responderID	requestorID	dateAssigned	quantity-->

	<div id="addToCartFormBg"> 
		<div id="addToCartFormDiv">
			<div id="closeButton" onclick="closeForm('addToCartFormBg')" style="color:gray; filter: invert(0%);"> ✕ </div>
			<br/><br/>
			<form action="Backend/addToCart.php" method="post" id="addToCartForm"> 
            	

				<input type="hidden" name="productID" id="productID"/>
				<input type="hidden" name="serviceID" id="serviceID"/>
				<input type="hidden" name="responderID" id="responderID"/>
				<input type="hidden" name="requestorID" id="requestorID" value="<?php echo $userID;?>"/>
				<input type="hidden" name="dateAssigned" id="dateAssigned" value="<?php echo $today; ?>"/>

				<img id="cartFormProductImage"> <br/>
				<p id="cartFormProductName"> Name </p>

				<h3> Enter Quantity </h3> <br/>
				<span class="addminusButton" onclick="addQuantity()">&nbsp + &nbsp</span> 
				<input type="number" name="quantity" min="1" max="99" id="quantity" onchange="quantityLimit()" value="1"/> 
				<span class="addminusButton" onclick="subQuantity()">&nbsp - &nbsp</span> 
				<br/><br/>
				<input type="submit" value="Add to cart"/>

			</form>
		</div>
	</div>




	<div id="pasabuyOrderBack">

		<div id="pasabuyOrderForm">

			<form action="Backend/BuyItem.php" method="post"> 
				<div id="closeButton" onclick="closeForm('pasabuyOrderBack')"> ✕ </div>
				<br/><br/><br/>

					<input type="hidden" name="productID" id="orderProductID"/>
					<input type="hidden" name="serviceID" id="orderServiceID"/>
					<input type="hidden" name="responderID" id="orderResponderID"/>
					<input type="hidden" name="price" id="orderPrice"/>
					<input type="hidden" name="requestorID" id="requestorID" value="<?php echo $userID;?>"/>
					<input type="hidden" name="dateAssigned" id="dateAssigned" value="<?php echo $today; ?>"/>


					<h3> Confirm Check Out </h3><br/>

			
					<img id="checkOutFormProductImage"> <br/>
					<p id="checkOutFormProductName"> Name </p>

						<h3> Enter Quantity </h3> <br/>

						<span class="addminusButton" onclick="addQuantity1()">&nbsp + &nbsp</span> 
						<input type="number" name="quantity" min="1" max="99" id="quantity1" onchange="quantityLimit()" value="1"/> 
						<span class="addminusButton" onclick="subQuantity1()">&nbsp - &nbsp</span> 

					<br/><br/> <br/> <br/>

					<label> Expected Delivery Date: </label>

					<input type="date" name="dueDate" min="<?php echo $today; ?>" value="<?php echo $today; ?>"> 
					<br/><br/><br/>
					<span> Total:  ₱ </span> <span id="totalPriceDisplay"> </span> 
					<br/><br/><br/> 




				<input type="submit" value="Check Out" id="CheckOutButton"/>

			</form>

		</div> 

</div>


<script src="js/Requestor_PasabuyProducts.js"> </script>


</body>
</html>