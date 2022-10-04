<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Requestor Transactions
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