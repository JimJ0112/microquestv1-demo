<?php 
session_start();


    if(isset($_SESSION["microquest_AdminUsername"])){

        header("Location:adminDashboard.php");
    }

    if(isset($_GET["msg"])){
        $msg = $_GET["msg"];

        echo "<script> alert('$msg')</script>";

    }
    echo "<script> sessionStorage.clear(); </script> ";
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		microQuest - Admin Login
	</title>

	
    <link rel="manifest" href="../manifest.json">
    


	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Login.css">

	<meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>

</head>
<body id="LoginBody">


	<form id="LoginForm" form action="backend/LoginBackend.php" method="post">
		
		<center>
		<h1 id="Welcome"> Admin </h1>
		<h2 id="Back"> Log in</h2> 
		</center>


				<div id="FormControls">

					<label>ADMIN USERNAME</label><br/>
					<input type="email" class="Form-Input" name="email"> <br/> 
					<label> PASSWORD</label><br/>
					<input type="password" class="Form-Input" name="password"> <br/><br/><br/>

					<br/> 
					<div id="FormControls-Buttons">
						<input type="submit" value="Log In" class="LoginForm-button" id="LoginButton"/>
						<input type="reset" value="Cancel" class="LoginForm-button" id="CancelButton"/>
					</div>
				</div>
		
		

	</form>



	<!-- <img src="img/logo.png" id="Logo"/> -->
	<h1 id="Logo">
		 <span id="Micro"> micro </span> <br/>  
		 <span id="Quest"> QUEST </span> 
	</h1>

</body>
</html>