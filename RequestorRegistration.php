<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Requestor Registration
	</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body onload="init()">

	<a href="ChooseAccountType.php"> <img src="img/back.png" id="Registration-BackButton"/></a>

		<img src="img/b1.jpg" id="RegistrationBackground">

		<h3 class="RegisterTypeText"> Requestor </h3>

		<img src="img/logo.png" id="RegistrationLogo"> 
		<h3 id="SignUpText"> Sign up</h3>

		<div id="RegistrationContainer">

			<!--Form -->
			<form action="" method="" enctype="multipart/form-data">

				<!-- 1st page -->
					<div id="AccountInfoForm">
						<div id="AccountInfoForm1">

							<div class="inputItem"> 
								Username: <br/>
								<input type="text" name="Username" class="Registration-TextBox" id="Username" oninput="checkInputs_AccountInfo()"> 
							</div><br/>

							<div class="inputItem"> 
								Email: <br/>
								<input type="text" name="Email" class="Registration-TextBox" id="Email" oninput="checkInputs_AccountInfo()"> 
							</div><br/>
				
							<div class="inputItem"> 
								Password: <br/>
								<input type="password" name="Password" class="Registration-TextBox" id="Password" oninput="checkInputs_AccountInfo()"> 
							</div><br/>
				
							<div class="inputItem"> 
								Confirm password: <br/>
								<input type="password" class="Registration-TextBox" id="ConfirmPassword" oninput="checkInputs_ConfirmPassword()"> 
								<p id="passwordmatch"></p>
							</div><br/>
						</div>		
								
					</div>
				
							

				<!-- 2nd page -->
				<div id="GeneralInfoForm">
					<div id="GeneralInfoForm1">
					
						<div class="inputItem"> 
							First name: <br/>
							<input type="text" name="FirstName" class="Registration-TextBox" id="FirstName" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/>

						<div class="inputItem"> 
							Middle name: <br/>
							<input type="text" name="MiddleName" class="Registration-TextBox" id="MiddleName" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/>

						<div class="inputItem"> 
							Last name: <br/>
							<input type="text" name="LastName" class="Registration-TextBox" id="LastName" oninput="checkInputs_GeneralInfo()"> 
						</div><br/>

						
					</div>

					<div id="GeneralInfoForm2">
					
						<div class="inputItem"> 
							Birthdate: <br/>
							<input type="date" class="Registration-TextBox" id="Birthdate" name="Birthdate" oninput="checkInputs_GeneralInfo()"> 
						</div><br/>

						<div class="inputItem"> 
							Municipality: <br/>
								<select name="Municipality" class="Registration-TextBox" id="Municipality" oninput="checkInputs_GeneralInfo()"> 
								</select>
						</div> <br/>

						<div class="inputItem"> 
							Address: <br/>
							<input type="text" name="Address" class="Registration-TextBox" id="Address" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/>


						<div class="inputItem"> 
							Sex: <br/>
							<input type="radio" name="Sex"  value="Male" id="Sex"> Male 
							<input type="radio" name="Sex"  value="Female" id="Sex"> Female 

						</div><br/>
						
					</div>

				</div>


				<!--3rd page-->

				<div id="ResponderInfoForm">
					<div id="ResponderInfoForm1">
					
						<div class="inputItem"> 
							Educational Attainment: <br/>
							<select name="Education" class="Registration-TextBox" id="Education"> 
							</select>
						</div> <br/>

						<div class="inputItem"> 
							Identification Card: <br/>
							<select name="IDType" class="Registration-TextBox" id="IDType"> 
							</select>
						</div> <br/>

						<div class="inputItem"> 
							ID: <br/>
							<input type="file" name="IDFile" id="IDFile"> 
						</div><br/>

						<div class="inputItem"> 
							ID Number: <br/>
							<input type="text" name="IDNumber" class="Registration-TextBox" id="IDNumber"> 
						</div><br/>
						
					</div>

					<div id="ResponderInfoForm2">
					
						<div class="inputItem"> 
							ID Expiration date: <br/>
								<input type="date" name="IDExpirationDate" class="Registration-TextBox" id="IDExpirationDate"> 
								
						</div> <br/>



						<div class="inputItem"> 
							Profile Picture <br/>
							<input type="file" name="ProfilePicture" id="ProfilePicture" > 
	

						</div><br/>
						
					</div>

				</div>



			</form>

			<input type="button" id="RegistrationBackButton" value= "Back" onclick="backForm()" > 
			<input type="button" id="RegistrationNextButton" value= "Next" onclick="nextForm()" disabled> 

			<a href="Requestor_AvailableServices.html">
				<input type="submit" id="RegistrationRegisterButton" value= "Register"> 
			</a>

		</div>


		<script src="js/Registration.js"> </script>

</body>
</html>