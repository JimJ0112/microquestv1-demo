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
		echo"<script> alert('$msg')</script> ";
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
	
	<link rel="stylesheet" type="text/css" href="css/Requestor_MyCart.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<script src="js/Requestor_MyCart.js"> </script>

</head>
<body id="Requestor_AvailableServicesBackground">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

?>

<?php
	if(isset($_SESSION['userID'])){
		$userID = $_SESSION['userID'];

		echo"<script> getMyCartItems($userID); </script>";
	}


	date_default_timezone_set("Asia/Manila");
    $today = date("Y-m-d");


?>
<!--Main-->
	<div id="AvailableServicesContainer">

		<center> 
			<br/>
						<table>
							<tr>
								<td>
									<img src="img/shopping-cart.png" id="titleCartIcon"> 
								</td>

								<td>
									<p id="AvailableServicesTitle"> My Cart </p>
								</td>
							</tr>
	   					</table>
	
			<br/>
			
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
				<form action="Backend/CheckOutCartItems.php" method="post">
				<input type="hidden" name="requestorID" id="requestorID" value="<?php echo $userID;?>"/>

					<table id="myCartItemsTable"> 

						<thead id="myCartItemsTableHead">
							<tr>
								<td> &nbsp &nbsp &nbsp</td>
								<td> Product </td>
								<td> &nbsp &nbsp &nbsp</td>
								<td> Item Price </td>
								<td> Quantity </td>
								<td> Total Price </td>
								<td> Action </td>


							</tr>
						 
						</thead>

						<tbody id="myCartItemsTableBody"> </tbody>


					</table> 

					<div id="cartFormControls">
					
					

							
									<table id="cartFormControlsTableLeft">
										<tr>
											<td>
												<span> Delete All </span>
											</td>

											<td>
												<img src="img/delete.png" id="deleteAllButton">
											</td>
										</tr>
									<table>

									


									<table id="cartFormControlsTableRight"> 
										<tr>
											<td>
												<span> Total: ₱ </span> <span id="allTotal"> 0 </span> 
											</td>

											<td>
												&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
												<input type="button" value="Check Out" id="CheckOutButton" onclick="showForms()"/>
											</td>
										</tr>

									</table>




							
				
						
					</div>


					<div id="deliverDateBack">
						<div id="deliverDateForm">
						<div id="closeButton" onclick="closeForms()"> ✕ </div>

							<h3> Confirm Check Out </h3>
							<label> Expected Delivery Date: </label>
							<input type="date" name="dueDate" min="<?php echo $today; ?>" value="<?php echo $today; ?>"> 
							<br/>
							<span> Total:  ₱ </span> <span id="totalPriceDisplay"> </span> 
							<br/>
							<br/>
							<br/>
							<br/>
							<input type="submit" value="Check Out" id="CheckOutButton"/>

							

						</div> 

					</div>

				</form>



			</div>

			


		
	</div>




<script src="js/Requestor_MyCart.js"> </script>


</body>
</html>