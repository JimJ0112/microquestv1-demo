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
	$userID = $_SESSION["userID"];
	
	echo"<script> getMyServices($userID) </script>";
	//echo "<script> generatePasabuyButton($userID) </script>";
?>

<!--Main-->
	<div id="AvailableServicesContainer">

		<center> <h1 id="AvailableServicesTitle"> Responder - My Services </h1> </center>

		<div id="ServicesContainer">
			
			<div id="AvailableServicesContainer-Controls">

				<ul id="AvailableServicesContainer-ControlItems">


					

				<!--<li class="AvailableServicesContainer-ControlItem" style="border-bottom:3px solid black"> 
						
					<div id="ControlItemRequestsButton">
                    <table>
                        <tr>
                            <td>
                                <image src="img/requests.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Responder_RequestBoard.php"> <span id="RequestsButtonText"> RequestBoard </span> </a>
                            </td>
                        <tr>
                    </table>
						</div>
					</li>
					
				
				<li class="AvailableServicesContainer-ControlItem" style="border-bottom:3px solid black"> 
						
					
				
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
					

					<li class="AvailableServicesContainer-ControlItem" id="pasabuyButton"> 
						
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
				
					</li>>-->


					<li class="AvailableServicesContainer-ControlItem" id="AvailableServicesCategoryContainer"> 
						
							<a href="Responder_CreateService.php" id="OfferaServiceButton" >Offer a Service </a>
					
					</li>

					

				</ul>

			</div>


			
			<div id="AvailableServicesContainer_Content">
			<!--
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
				
				</div>-->

			</div>

			


		
	</div>

</div>

<div id="myServiceViewBack">
	
	<div id="myServiceView"> 
	<div id="closeButton" onclick="closeServiceView()"> ✕ </div>
	<div id="serviceTableTitle"> Service Details </div>
	<table id="myServiceViewTable">
		
		<tr>
			<td class="serviceFirstRow">
				<b>
					ID
				</b>
			</td>

			<td class="serviceSecondRow" id="serviceIDViewContainer">
				serviceID
			</td>
		</tr>

		<tr>
			<td class="serviceFirstRow">
				<b>
					Category
				</b>
			</td>

			<td class="serviceSecondRow" id="serviceCategoryViewContainer">
				serviceCategory
			</td>
		</tr>

		<tr>
			<td class="serviceFirstRow">
				<b>
					Service
				</b>
			</td>

			<td class="serviceSecondRow" id="servicePositionViewContainer">
				servicePosition
			</td>
		</tr>
		
		<tr>
			<td class="serviceFirstRow">
				<b>
					Rate
				</b>
			</td>

			<td class="serviceSecondRow" id="rateViewContainer">
				rate
			</td>
		</tr>

		<!--
		<tr>
			<td class="serviceFirstRow">
				<b>
					Certification
				</b>
			</td>

			<td class="serviceSecondRow" id="certificationViewContainer">
				certification
			</td>
		</tr>

		
		<tr>
			<td class="serviceFirstRow">
				<b>
					Certificate File
				</b>
			</td>

			<td class="serviceSecondRow" id="certificateFileViewContainer">
				certificateFile
			</td>
		</tr>
		-->

		<tr>
			<td class="serviceFirstRow">
				<b>
					Status
				</b>
			</td>

			<td class="serviceSecondRow" id="serviceStatusViewContainer">
				serviceStatus
			</td>
		</tr>

	</table>
</center>

	<form method="post" action="Backend/UpdateService.php" enctype="multipart/form-data" id="serviceViewForm"> 
			<table id="myServiceViewForm"> 
				
				<tr>
					<td class="serviceFirstRow">
						<b>
							ID
						</b>
					</td >

					<td class="serviceSecondRow" id="ServiceFormID">
						
					</td>
					<input type = "hidden" name="serviceID" id="serviceIDHidden"/>
				</tr>

				<tr>
					<td class="serviceFirstRow">
						<b>
							Category
						</b>
					</td>

					<td class="serviceSecondRow">
						<input type="text" name="category" id="ServiceFormCategory" required/>
					</td>
				</tr>

				<tr>
					<td class="serviceFirstRow">
						<b>
							Service
						</b>
					</td>

					<td class="serviceSecondRow">
						<input type="text" name="position" id="ServiceFormPosition" required/>
					</td>
				</tr>
				
				<tr>
					<td class="serviceFirstRow">
						<b>
							Rate
						</b>
					</td>

					<td  class="serviceSecondRow">
						<input type="text" name="rate" id="ServiceFormRate" required/>
					</td>
				</tr>

				<tr>
					<td class="serviceFirstRow">
						<b>
							Status
						</b>
					</td>

					<td class="statusTD">
						 <input type="radio" value="Active" name="Status" class="serviceStatusRadio" required/> <label>  Active </label>
						 <input type="radio" value="Delisted" name="Status" class="serviceStatusRadio"/> <label> Delisted <label>

					</td>
				</tr>

				<tr>	
					<td></td>
					<td>
						<input type="Button" id="submitChanges" value="Save Changes" onclick="submitEditChanges()">
					</td>
				</tr>
			</table>
	</form>

		<div id="closeBtn">
		<button id="myServiceViewEditButton" onclick="editMyService()"> Edit </button>
		</div>

	</div>
	
</div>




<!--<script src="js/Responder_AvailableServices.js"> </script>-->






</body>
</html>