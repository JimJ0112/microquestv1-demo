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
		Available Services
	</title>

	<link rel="stylesheet" type="text/css" href="css/footer.css">
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/Requestor_AvailableServices.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	

</head>
<body id="Requestor_AvailableServicesBackground" onload="getServices()">



<!-- NavBar-->
<?php
	//require_once("imports/RequestorNavBar.php");


	if(isset($_SESSION["userStatus"]) && isset($_SESSION["userType"])){
		$status = $_SESSION["userStatus"];
		$userType = $_SESSION["userType"];
		echo $status;

		if($status === "not verified" || $status === "Declined"){
			header("location: NotVerifiedMessage.php?msg=Not verified yet");

		}else{
			if($userType === "Requestor"){
				require_once("imports/RequestorNavBar.php");
			} else{
				header("location: Responder_RequestBoard.php?msg=Not a Responder!");
			}

		}


	}

?>

<script> 
         if('serviceWorker' in navigator){
            navigator.serviceWorker.register('js/sw.js');
         }else{
            console.log("service worker not in navigator");
         }
      </script>

<!--Main-->
	<div id="AvailableServicesContainer">
	<center> <h1 id="AvailableServicesTitle"> Choose Service Category </h1> </center>
		

		<div id="ServicesContainer">

			<div id="AvailableServicesContainer-Controls">

				<ul id="AvailableServicesContainer-ControlItems">

					<li class="AvailableServicesContainer-ControlItem" >
						<table style="background-color: #a6999975;padding: 4px;">
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

					
					
					
					
					



				</ul>

			</div>



			<div id="AvailableServicesContainer-Content">
				
				<div class="AvailableService-Card">



			</div>

			


		
	</div>



</div>
<script src="js/Requestor_AvailableServices.js"> </script>
<?php
	require_once("imports/footer.php"); 
?>


</body>
</html>