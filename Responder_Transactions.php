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
		Responder Transactions
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Responder_Transactions.css">

</head>
<body id="Responder_TransactionsBackground">

<img src="img/b.jpg" id="BodyBackgroundImg"/>


<!-- NavBar-->
<?php
	require_once("imports/ResponderNavBar.php");

?>

<div id="TransactionsBackContainer">

	<center> <h1 id="TransactionsTitle"> Responder's Transactions </h1> </center>
	
	<div id="TransactionsContainer">
		<div id="TransactionsContainer-Controls">

			<ul id="TransactionsContainer-ControlItems">

				<li class="TransactionsContainer-ControlItem">
					<table>
						<tr>
							<td>
								<img src="img/requests.png" class="TransactionsContainer-ControlItemIcon">
							</td>
							<td>
								
				
					<select id="TransactionsCategory"> 
						<option> Request Applications </option>
						<option> Service Requests</option>
						<option> On going Jobs</option>
						<option> On going Requests</option>
						<option> Completed Jobs</option>
						<option> Completed Requests</option>
						<option> Cancelled </option>
					</select> 
			
							</td>
					 	</tr>
					</table>

				</li>

				<li class="TransactionsContainer-ControlItem"> 
					<table>
						<tr>
							<td>
								<img src="img/work-icon.png" class="RequestsContainer-ControlItemIcon"> 
							</td>

							<td>
								<span> My Services </span> 
							</td>
						</tr>
	   				</table>
				</li>



			</ul>

		</div>

		<div id="TransactionsContainer-Content">


			<center> <h1> There is currently no Request Application </h1></center>





		</div>

	</div>


</div>

</body>
</html>