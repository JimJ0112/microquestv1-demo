<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Responder Registration
	</title>
	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Registration.css">
	<script src="js/Requestor_Registration.js"> </script>


</head>

<body onload="getServices()" class ="bg">

	
	
	



 


		<div id="RegistrationContainer">

			<!--Form -->
			<form action="Backend/RegisterBackend.php" method="post" enctype="multipart/form-data" id="RegistrationForm">
				<input type="hidden" name="userType" value="Responder">
				<div class="half">
				<div id="AccountInfoForm">
						
						<div id="AccountInfoForm1">
						<center> <h2> Sign up as a Responder </h2> </center>
							<div class="inputItem"> 
								Username: <br/>
								<span class="asteriskRequiredField" title="This Field is Required"> * </span>
								<input type="text" name="userName" class="Registration-TextBox" id="Username" oninput="checkUserName()" placeholder="Username.."> 
								
								<br/>
								<span id="userNameChecker" class="checker"> </span>
							</div><br/>

							<div class="inputItem"> 
								Email: <br/>
								<span class="asteriskRequiredField" title="This Field is Required"> * </span>
								<input type="email" name="userEmail" class="Registration-TextBox" id="Email" oninput="checkEmail()" placeholder="Email.."> 
								<br/>
								<span id="emailChecker" class="checker"> </span>
							</div><br/>
				
							<div class="inputItem"> 
								Password: <br/>
								<span class="asteriskRequiredField" title="This Field is Required"> * </span>
								<input type="password" name="userPassword" class="Registration-TextBox" id="Password" oninput="checkInputs_ConfirmPassword()" placeholder="Password.."> 
							</div><br/>
				
							<div class="inputItem"> 
								Confirm password: <br/>
								<span class="asteriskRequiredField" title="This Field is Required"> * </span>
								<input type="password" class="Registration-TextBox" id="ConfirmPassword" oninput="checkInputs_ConfirmPassword()" placeholder="Confirm Password.."> 
								<p id="passwordmatch"></p>
							</div><br/>

							<input type="button" id="RegistrationNextButton" value= "Next" onclick="checkInputs_AccountInfo()">
							<a href ="ChooseAccountType.php" style = "font-size: 19px; text-decoration: underline"> Go Back </a>
						</div>		
						 		
					</div>
				
					
					<div id="EmailVerificationForm">
						<span class="formPageIndicator"> 2 out of 4</span>
						<div id="EmailVerificationForm1">

							<div class="inputItem"> 
								<br/>
								<center> Enter the code we have sent to your email </center> <br/>
								<input type="number"  class="Registration-TextBox" id="emailConfirmationInput">
								<span class="asteriskRequiredField" title="This Field is Required"> * </span>
								<br/> 
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
</div>

				<!-- 3rd page -->
				<div id="hidden">
					<div class ="half">
				<div id="GeneralInfoForm">
					<div id="GeneralInfoForm1">
					
						<div class="inputItem1">
						<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>First name:</div>
							<input type="text" name="firstName" class="Registration-TextBox" id="FirstName" Required> 
						
						<div class="textBox">Middle name:</div>
							<input type="text" name="middleName" class="Registration-TextBox" id="MiddleName"Required> 
					
						<div class="textBox">Last name: </div>
							<input type="text" name="lastName" class="Registration-TextBox" id="LastName" Required> 
						
						</div> 
						<div class="inputItem2">
						<div class="textBox"> <span class="asteriskRequiredField" title="This Field is Required"> * </span>Birthdate: </div>
							<input type="date" class="Registration-TextBox" id="Birthdate" name="birthDate" Required /> 

						<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>Sex: </div>
							
							<div class="textBox1"><input  type="radio" name="Sex"  value="Male" id="Male" Required > Male 
							<input type="radio" name="Sex"  value="Female" id="Female" > Female </div>

						</div>

						
					</div>

					<div id="GeneralInfoForm2">
					
						<div class="inputItem3"> 
						<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>Municipality:</div> 
							
								<select name="municipality" class="Registration-TextBox" id="Municipality" onchange="listBaranggay()" Required> 
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

						<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>Barangay: </div>
							
							<!--<input type="text" name="baranggay" class="Registration-TextBox" id="Address" oninput="checkInputs_GeneralInfo()" Required>-->
							<select name="baranggay" class="Registration-TextBox" id="baranggay"  Required> 
								
							</select>
						
						<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>House No: </div>
							
							<input type="text" name="houseNumber" class="Registration-TextBox" id="Address" Required> 
						
						<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>Street: </div>
							
							<input type="text" name="street" class="Registration-TextBox" id="Address" Required> 
						
					
						</div> 

					
					</div>	
					<div id="ResponderInfoForm1">
					
						<div class="inputItem4"> 
							
								<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>Educational Attainment </div>
								<select name="education" class="Registration-TextBox" id="Education" Required> 
									<option selected="" disabled="">Select  Education</option>
                     				<option value="Elementary Graduate">Elementary Graduate</option>
                     				<option value="Secondary Graduate">Secondary Graduate</option>
                     				<option value="Junior High School Graduate">Junior High School Graduate</option>
                     				<option value="Senior High School Graduate">Senior High School Graduate</option>
                     				<option value="College/University Graduate">College/University Graduate</option>
                     				<option value="Vocational Training Graduate">Vocational Training Graduate</option>
								</select>

								<div class="textBox"> <span class="asteriskRequiredField" title="This Field is Required"> * </span>Specialization</div>
									<select name="specialization" id="specialization"> 

									</select>
							
						</div>
						<div class="inputItem4"> 	
							
						
							<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>Identification Card: </div>
							<select name="idType" class="Registration-TextBox" id="IDType" Required> 
								<option value="Driver's License"> Driver's License</option>    
                    			<option value="Philhealth"> Philhealth</option>    
                    			<option value="Voter's ID"> Voter's ID</option> 
								<option value="National ID"> National ID</option> 
							</select>
						
							
							
							<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>ID Expiration date: </div>
								<input type="date" name="idExpiration" class="Registration-TextBox" id="IDExpirationDate" Required> 

						<div class="textBox">
							ID Number: </div>
							<input type="text" name="idNumber" class="Registration-TextBox" id="IDNumber" Required> 
						</div>

						
						
					</div>
					
						<div class="inputItem5"> 
						
						<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>ID: </br>
						<input type="file" name="idFile" id="IDFile"  onchange="showIDPicOutput(event)" accept="image/png, image/jpg, image/jpeg" Required></div><img id="userIDPicOutput"> 
							 
								

							 
							<div class="textBox"><span class="asteriskRequiredField" title="This Field is Required"> * </span>Profile Picture</br>
							<input  type="file" name="userPhoto" id="ProfilePicture"  onchange="showProfilePicOutput(event)" accept="image/png, image/jpg, image/jpeg" Required>  </div><img id="userProfilePicOutput">
							
	

						</div>
						
					
						<!--<input type="button" id="RegistrationNextButton" value= "Next" onclick="nextForm()" disabled>-->
						<!--<input type="submit" id="RegistrationRegisterButton" value= "Register">-->
						<input class="nextBtn" type="submit" id="RegistrationNextButton1" value= "Register">
						<a href ="ChooseAccountType.php" style = "font-size: 19px; text-decoration: underline"> Go Back </a>
				
						
					

				</div>

	</div>



				
				<!--<input type="button" id="RegistrationNextButton" value= "Next" onclick="nextForm()" disabled> -->

			
				<!--<input type="submit" id="RegistrationRegisterButton" value= "Register" onclick="submitForm()">-->
				<!--<input type="submit" id="RegistrationRegisterButton" value= "Register" onclick="submitForm()"-->
				<!--<input type="submit" id="RegistrationRegisterButton" value= "Register">-->
				

			

			</form>

</div>

		</div>


		<script> getServices(); </script>
		<script src="js/Requestor_Registration.js"> </script>

</body>
</html>