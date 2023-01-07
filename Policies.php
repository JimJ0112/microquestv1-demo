<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

     
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="manifest" href="manifest.json">
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/ViewUserProfile.css">

 

    <title> Microquest Policies </title>
</head>
<body>
<?php
	

	if(isset($_SESSION["userType"])){
		$userType = $_SESSION["userType"];

		if($userType === "Responder"){
			require_once("imports/ResponderNavBar.php");

		} else if($userType === "Requestor"){
			require_once("imports/RequestorNavBar.php");

		}
	}

    if(isset($_GET["userID"])&&isset($_GET["userType"])){

        $userID = $_GET["userID"];
        $userType = $_GET["userType"];

               
              echo"<script> getUserInfo($userID,'$userType');</script> ";
    }
?>
<br> <br> <br>
<div id="policies Content" style="width:80%; margin:auto; overflow:hidden">

    <h1> PRIVACY POLICY </h1>
    
    <p> At MicroQuest, accessible from https://www.microquestbpsu.online/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by MicroQuest and how we use it.</p>
    <p> If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
    <p> This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in MicroQuest. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.</p> 
    <b> Consent <b>
    <p> By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

    <b> Information we collect </b>
    <p> The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. </p>
    <p> If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. </p>
    <p> When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

    <ul> 
        <li> Provide, operate, and maintain our website </li>
        <li> Improve, personalize, and expand our website </li>
        <li> Understand and analyze how you use our website </li>
        <li> Develop new products, services, features, and functionality </li>
        <li> Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes </li>
        <li> Send you emails </li>
        <li> Find and prevent fraud </li>
   
    </ul>


    <b> Children's Information </b>
    <pre> 
        Another part of our priority is adding protection for children while using the internet. 
        We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

        MicroQuest does not knowingly collect any Personal Identifiable Information from children under the age of 18. 
        If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
    </pre>

    <b> Report information </b>
    <pre> 
    We use your email address as your username, and to send emails about your use of Report-URI and our services
    We're quite serious about security
    We only use essential cookies to provide our service 
    </pre>
    <b>The Following Behaviors can lead to user being  banned or restricted to use Microquest: </b>
    <ul> 
        <li> Pretending to be someone  </li>
        <li> Posting inappropriate things </li>
        <li> Harassment or bullying  </li>
        <li> Doing inappropriate things during transaction </li>
    </ul> 
    <p> Users can still report other unwanted behaviors that they encounter with other users and our team will investigate the situation and do proper actions</p>

</div>

<?php
	require_once("imports/footer.php"); 
?>
<link rel="stylesheet" type="text/css" href="css/footer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

</body>
</html>