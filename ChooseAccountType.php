<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		microQuest - Choose Account Type
	</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body id="ChooseAccountType-Body">
	
		<div id="ChooseAccountTypeBackground">
		</div>

		<div id="ChooseAccountTypeBackground1">
		</div>

		<div id="ChooseAccountTypeBackground2">
		</div>
	
		<div id="ChooseAccountTypeBackground3">
		</div>
			
		<div id="ChooseAccountTypeBackground4">
		</div>


	
		<div id="ChooseAccountType-Container">
			<center>
				 <h1 id="SelectAccountType"> Select Account Type 
				</h1>
			

				<div id="Responder" class="ChooseAccountType-Option">
				
					<label>
						<input type="radio" name="chooseAccount[]" value="Responder" id="ResponderCheck" class="RadioCheck"/>
						<img src="img/Eo_circle_brown_checkmark.svg" class="CheckMark" id="ResponderCheckMark">
					<label>

					<label For="ResponderCheck">
						<img id="ResponderImage" class="Option-Image" src="img/responder1.jpg">
						<h3> Responder </h3>
						<p>Start your day right. Be the one who responds to requests and earns additional income for your work.</p>
					</label>
				</div>


				<div id="Requestor" class="ChooseAccountType-Option">
					<label>
						<input type="radio" name="chooseAccount[]" value="Requestor" id="RequestorCheck" class="RadioCheck"/>
						<img src="img/Eo_circle_brown_checkmark.svg" class="CheckMark" id="RequestorCheckMark">

					</label>

					<label For="RequestorCheck">
						<img id="RequestorImage" class="Option-Image" src="img/requestor.jpg">
						<h3> Requestor </h3>
						<p>Start your day right. Be the one who requests and <br/> gives additional income to people who want to earn.</p>
					</label>
				</div>

			</center>

							
			<footer id="ChooseAccountType-Footer">
				<input type="submit" class="ChooseAccountType-Button" id="Next" value="NEXT" disabled> 
				<a href="Login.php"> <button class="ChooseAccountType-Button" id="Cancel"> Cancel </button> </a>
			</footer>

		</div>
	
		<img id="microQuestLogo" src="img/logo.png"/>

		<script src="js/ChooseAccountType.js"> </script>
	
</body>
</html>