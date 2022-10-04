<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Responder Transactions
	</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body id="Responder_TransactionsBackground">

<img src="img/b.jpg" id="RequestboardBackground"/>

<!-- NavBar-->
<div id="NavContainer">
	<img src="img/logo.png" id="Nav-Logo" title="Home"> 
	<ul id="NavBar">
		

	
		<a> <li class="Nav-item" title="My Transactions">RequestBoard</li> </a>
		<a> <li class="Nav-item" title="My Messages">Messages </li> </a>
		<a> <li class="Nav-item" title="Me">User Profile</li> </a>
		<a> <li class="Nav-item" id="LogOutButton" title="Log Out">Log out</li> </a>
	
	</ul>
</div>

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