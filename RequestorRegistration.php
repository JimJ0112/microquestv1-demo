<?php

	date_default_timezone_set("Asia/Manila");
	
	
?>	
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Requestor Registration
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Registration.css">


</head>
<body onload="init()">



	<a href="ChooseAccountType.php"> <img src="img/back.png" id="Registration-BackButton"/></a>

		<img src="img/b1.jpg" id="RegistrationBackground">

		<h3 class="RegisterTypeText"> Requestor </h3>

		<img src="img/logo.png" id="RegistrationLogo"> 
		<h3 id="SignUpText"> Sign up</h3>

		<div id="RegistrationContainer">

			<!--Form -->
			<form action="Backend/RegisterBackend.php" method="post" enctype="multipart/form-data">
				
				<input type="hidden" name="userType" value="Requestor">
				<!-- 1st page -->
					<div id="AccountInfoForm">
						<span class="formPageIndicator"> 1 out of 4</span>
						<div id="AccountInfoForm1">

							<div class="inputItem"> 
								Username: <br/>
								<input type="text" name="userName" class="Registration-TextBox" id="Username" oninput="checkUserName()" onkeyup="checkInputs_AccountInfo()"> 
								<br/>
								<span id="userNameChecker" class="checker"> </span>
							</div><br/>

							<div class="inputItem"> 
								Email: <br/>
								<input type="email" name="userEmail" class="Registration-TextBox" id="Email" oninput="checkEmail()" onkeyup="checkInputs_AccountInfo()"> 
								<br/>
								<span id="emailChecker" class="checker"> </span>
							</div><br/>
				
							<div class="inputItem"> 
								Password: <br/>
								<input type="password" name="userPassword" class="Registration-TextBox" id="Password" oninput="checkInputs_AccountInfo()"> 
							</div><br/>
				
							<div class="inputItem"> 
								Confirm password: <br/>
								<input type="password" class="Registration-TextBox" id="ConfirmPassword" oninput="checkInputs_ConfirmPassword()"> 
								<p id="passwordmatch"></p>
							</div><br/>
						</div>		
								
					</div>
				
					<!-- 2nd page -->
					<div id="EmailVerificationForm">
						<span class="formPageIndicator"> 2 out of 4</span>
						<div id="EmailVerificationForm1">

							<div class="inputItem"> 
								<br/>
								<center> Enter the code we have sent to your email </center> <br/>
								<input type="number"  class="Registration-TextBox" id="emailConfirmationInput"> <br/> 
								<span id="ConfirmEmailResult"> </span>
								<span id="ConfirmEmailAttempts"> </span>
							</div><br/>
								
				
							<div class="inputItem"> 
								<center> <input type="button"  onclick="checkEmailVerificationCode()" value="Confirm" id="ConfirmEmailButton"> </center>
								<center>
									<p id="ResumeInText"> Resume in: 
										<span id="emailTimerMinutes"> 3 </span> : <span id="emailTimerSeconds"> 00 </span>
									</p>
								</center>
							</div><br/>
				
						</div>		
								
					</div>


				<!-- 3rd page -->
				<div id="GeneralInfoForm">
					<span class="formPageIndicator"> 3 out of 4</span>
					<div id="GeneralInfoForm1">
					
						<div class="inputItem"> 
							First name: <br/>
							<input type="text" name="firstName" class="Registration-TextBox" id="FirstName" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/>

						<div class="inputItem"> 
							Middle name: <br/>
							<input type="text" name="middleName" class="Registration-TextBox" id="MiddleName" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/>

						<div class="inputItem"> 
							Last name: <br/>
							<input type="text" name="lastName" class="Registration-TextBox" id="LastName" oninput="checkInputs_GeneralInfo()"> 
						</div><br/>

						<div class="inputItem"> 
							Birthdate: <br/>

							<input type="date" class="Registration-TextBox" id="Birthdate" name="birthDate"  oninput="checkInputs_GeneralInfo()"/> 
						</div><br/>

						<div class="inputItem"> 
							Sex: <br/>
							<input type="radio" name="Sex"  value="Male" id="Male" oninput="checkInputs_GeneralInfo()"> Male 
							<input type="radio" name="Sex"  value="Female" id="Female" oninput="checkInputs_GeneralInfo()"> Female 

						</div>

						
					</div>

					<div id="GeneralInfoForm2">
					
						<div class="inputItem"> 
							Municipality: <br/>
								<select name="municipality" class="Registration-TextBox" id="Municipality" oninput="checkInputs_GeneralInfo()"> 
									<option selected="" disabled="">Select City / Municipality</option>
                     				<option value="Abucay">Abucay</option>
                     				<option value="Bagac">Bagac</option>
                     				<option value="Balanga">Balanga</option>
                     				<option value="Dinalupihan">Dinalupihan</option>
                     				<option value="Hermosa">Hermosa</option>
                     				<option value="Limay">Limay</option>
                     				<option value="Mariveles">Mariveles</option>
                     				<option value="Morong">Morong</option>
                     				<option value="Orani">Orani</option>
                     				<option value="Orion">Orion</option>
                     				<option value="Pilar">Pilar</option>
                     				<option value="Samal">Samal</option>
								</select>
						</div> <br/>

						<div class="inputItem"> 
							House No: <br/>
							<input type="text" name="houseNumber" class="Registration-TextBox" id="Address" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/>

						<div class="inputItem"> 
							Street: <br/>
							<input type="text" name="street" class="Registration-TextBox" id="Address" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/>

						<div class="inputItem"> 
							Baranggay: <br/>
							<input type="text" name="baranggay" class="Registration-TextBox" id="Address" oninput="checkInputs_GeneralInfo()"> 
						</div> <br/> <br/><br/>
						
					</div>

				</div>


				<!--4th page-->

				<div id="ResponderInfoForm">
					<span class="formPageIndicator"> 4 out of 4</span>
					<div id="ResponderInfoForm1">
					
						<div class="inputItem"> 
							Educational Attainment: <br/>
							<select name="education" class="Registration-TextBox" id="Education" oninput=" checkInputs_ResponderInfo()"> 
								<option selected="" disabled="">Select  Education</option>
                     			<option value="Elementary Graduate">Elementary Graduate</option>
                     			<option value="Secondary Graduate">Secondary Graduate</option>
                     			<option value="Junior High School Graduate">Junior High School Graduate</option>
                     			<option value="Senior High School Graduate">Senior High School Graduate</option>
                     			<option value="College/University Graduate">College/University Graduate</option>
                     			<option value="Vocational Training Graduate">Vocational Training Graduate</option>
							</select>
						</div> <br/>

						<div class="inputItem"> 
							Identification Card: <br/>
							<select name="idType" class="Registration-TextBox" id="IDType" oninput=" checkInputs_ResponderInfo()"> 
								<option value="Driver's License"> Driver's License</option>    
                    			<option value="Philhealth"> Philhealth</option>    
                    			<option value="Voter's ID"> Voter's ID</option> 
							</select>
						</div> <br/>

						<div class="inputItem"> 
							<img id="userIDPicOutput"> <br/>
							ID: <br/>
							<input type="file" name="idFile" id="IDFile" oninput=" checkInputs_ResponderInfo()" onchange="showIDPicOutput(event)"> 
						</div><br/>

						<div class="inputItem"> 
							ID Number: <br/>
							<input type="text" name="idNumber" class="Registration-TextBox" id="IDNumber" oninput=" checkInputs_ResponderInfo()"> 
						</div><br/>
						
					</div>

					<div id="ResponderInfoForm2">
					
						<div class="inputItem"> 
							ID Expiration date: <br/>
								<input type="date" name="idExpiration" class="Registration-TextBox" id="IDExpirationDate" oninput=" checkInputs_ResponderInfo()"> 
								
						</div> <br/>



						<div class="inputItem"> 
							<img id="userProfilePicOutput"> <br/>
							Profile Picture <br/>
							<input type="file" name="userPhoto" id="ProfilePicture" oninput=" checkInputs_ResponderInfo()" onchange="showProfilePicOutput(event)" > 
	

						</div><br/>
						
					</div>

				</div>

				<input type="button" id="RegistrationBackButton" value= "Back" onclick="backForm()" > 
				<input type="button" id="RegistrationNextButton" value= "Next" onclick="nextForm()" disabled> 

			
				<input type="submit" id="RegistrationRegisterButton" value= "Register">
			

			</form>



		</div>

		<script src="js/Requestor_Registration.js"> </script>

</body>
</html>