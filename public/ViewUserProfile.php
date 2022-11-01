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

    <script src="js/ViewUserProfile.js"> </script>

    <title> User Profile </title>
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
?>
<div id="viewUserProfileContent">
    <table id="viewUserProfileTable">
        <tr>
            <td id="userImageContainerTd">
                <div id="userImageContainer"></div>
            </td>
            <td>
                <div id="userNameAndType">
                        <h1><span id="userName">UserName</span></h1>
                    <span id="userType"></br></br></br>usertype</span>
                </div>
            </td>
            <td>
                <div id="messageMe">
                    <center>
                        <form action="Backend/insertMessage.php" method="post">
                            <label> MESSAGE </label> <br/>

                            <input type="hidden" name="recieverID" id="recieverID"/>
                            <input type="hidden" name="senderID" value='<?php echo $_SESSION['userID']; ?>'>
                            <input type="hidden" name="senderUserName" value='<?php echo $_SESSION['userName']; ?>'>
                            <input type="hidden" name="recieverUserName" id="recieverUserName">
                 
                            <textarea name="messageBody" id="requestInfoMessageBody" oninput="checkText()"> </textarea> <br/>
                            <input type="submit" value="SEND" id="send" disabled/>
                
                        </form>
                    </center>
                </div>
            </td>
    </table>
    <table id="viewUserProfileNav">
        <tr>
            <td name="userPost" id="userNav" type="button" onclick="post()">
               Posts
            </td>
            <td name="userAbout" id="userNav" type="button" onclick="about()">
                About
            </td>
            <td name="userReviews" id="userNav" type="button" onclick="reviews()">
                Reviews
            </td>
            <td name="userMore" id="userNav" type="button" onclick="more()">
                More
            </td>
        </tr>
    </table>
        <div id="postContainer">
			<div id="postContainer-Content">
				<div class="postCard">
					<ul class="postInfoList">
						<li class="postCategory"> Category </li>
						<li class="postDescription"> Description</li>
						<li class="Deadline"> Deadline </li>
						<li class="Price"> Php pice</li>
						<li class="PriceNegotiable"> Negotiable</li>
					</ul>
					<footer class="postcard-footer">
						<button class="ReviewButton" onclick="showViewRequest()"> View </button>
					</footer>			
				</div>
			</div> 
        </div>
        <div id="aboutContainer">
            <div id="aboutContainer-Content">
                <table class="userInfoTable">
                    <tr>
                        <td class="userEmail">Email</td><td> alden@richard.com </td>
                    </tr>
                    <tr>
					    <td class="userFullName">Full Name</td> <td> Alden Richard </td>
                    </tr>
                    <tr>
					    <td class="userAge">Age</td><td> 32 </td>
                    </tr>
                    <tr>
					    <td class="userDob">Birthday</td><td> May 17, 1990 </td>
                    </tr>
                    <tr>
					    <td class="userSpecialization">Spcialization</td><td> Arts </td>
                    </tr>
                    <tr>
					    <td class="userLocation">Location</td><td> Abucay </td>
                    </tr>
                </table>
            </div>
		</div> 
        <div id="reviewContainer">
			<div id="reviewContainer-Content">
				<div class="reviewCard">
					<ul class="reviewInfoList">
						<li class="reviewerName"> Name of Reviewer</li>
                        <li class="jobTitle"> Dishwashing </li>
                        <li class="reviewRating"> 4.5 ★ </li>
						<li class="reviewDescription"> Kitchen Dishwashing</li>
						<li class="price"> 600</li>
					</ul>		
				</div>
			</div> 
        </div>
        <div id="moreContainer">
            content
        </div>
</div>  
</body>
</html>