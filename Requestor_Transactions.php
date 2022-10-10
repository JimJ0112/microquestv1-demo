<?php
	session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Requestor Transactions
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>

	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Requestor_Transactions.css">
</head>
<body id="Responder_TransactionsBackground">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->

<?php
	require_once("imports/RequestorNavBar.php");

?>

<div id="TransactionsBackContainer">

	<center> <h1 id="TransactionsTitle"> Requestor's Transactions </h1> </center>
	
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
						<option style="color: black;"> Request Applications </option>
						<option style="color: black;"> On going Requests</option>
						<option style="color: black;"> Completed Requests</option>
						<option style="color: black;"> Cancelled </option>
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
								<select id="TransactionsCategory" style="color:white"> 
									<option style="color: black;"> Service Orders</option>
									<option style="color: black;"> On going Jobs</option>
									<option style="color: black;"> Completed Jobs</option>
									<option style="color: black;"> Cancelled </option>
								</select> 
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