<?php 
session_start();


    if(isset($_SESSION["userEmail"]) && isset($_SESSION["userType"])){
		$userType = $_SESSION["userType"];
       	if($userType ==="Responder"){
			header("location:Responder_RequestBoard.php");
		} else if($userType ==="Requestor"){
			header("location:Requestor_AvailableServices.php");
		}
    }

    if(isset($_GET["msg"])){
        $msg = $_GET["msg"];

        echo "<script> alert('$msg')</script>";

    }
    echo "<script> sessionStorage.clear(); </script> ";
?>
<html lang="en"><head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="css/boot_bootstrap.min.css">
<link rel="stylesheet" href="css/login_style.css">

<meta name="theme-color" content="#5f5eaa">
      <meta name="msapplication-TileColor" content="#5f5eaa">
      <meta name="msapplication-navbutton-color" content="#5f5eaa">
      <meta name="apple-mobile-web-app-status-bar-style" content="#5f5eaa">

<link rel="manifest" href="manifest.json">



<title>microQuest - LOGIN</title>

<body>

<script> 
         if('serviceWorker' in navigator){
            navigator.serviceWorker.register('sw.js').then(function(registration){
				console.log('ServiceWorker registration successful with scope:',  registration.scope);
			}).catch(function(error) {
    			console.log('ServiceWorker registration failed:', error);
  			});;
			
         }else{
            console.log("service worker not in navigator");
         }
</script>

<div class="d-lg-flex half">
		<div class="bg order-1 order-md-2"  style="background-image: url('img/asd.jpg');">
		</div>
	<div class="contents order-2 order-md-1">
		<div class="container">
			<div class="row align-items-center justify-content-center">
				<div class="col-md-7">
					<h3>
						<strong>Login to microQuest</strong>
					</h3>

					<p class="mb-4">Are you looking for a job and a service provider? Just browse, find, and hire.</p>
						<!-- FORM -->
						<form form action="Backend/LoginBackend.php" method="post">

							<div class="form-group first">
								<label for="username">Username</label>
								<input type="text" class="Form-Input" name="email" placeholder="ex. imissu@gmail.com" id="username" Required>
							</div>

							<div class="form-group last mb-3">
								<label for="password">Password</label>
								<input type="password" class="Form-Input" name="password" placeholder="enter your password..." id="password" Required>
							</div>

							<div class="d-flex mb-5 align-items-center">
								<span class="ml-auto"> <a href="ChooseAccountType.php" class="register_here">Doesn't have an account? <span class="register">  REGISTER </span></a></span>
							</div>
						<!-- BUTTON -->    
						<input type="submit" value="Log In" class="btn btn-block btn-primary">
						</form>
						<!--END OF FORM-->
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>