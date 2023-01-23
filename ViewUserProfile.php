<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }


    if(isset($_SESSION["userID"]) && isset($_GET["userID"]) && isset($_GET["userType"])){
        
        $myID = $_SESSION["userID"];
        $userID = $_GET["userID"];
        $userType= $_GET["userType"];

        if($myID === $userID){
            header("location:ViewMyProfile.php?userID=$userID&userType=$userType");

        }
        
	}

    if(isset($_GET["msg"])){
        $msg = $_GET["msg"];

        echo "<script> alert('$msg')</script>";

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

    if(isset($_GET["userID"])&&isset($_GET["userType"])){

        $userID = $_GET["userID"];
        $userType = $_GET["userType"];

               
              echo"<script> getUserInfo($userID,'$userType');</script> ";
    }
?>

<div id="viewUserProfileContent">
    <div id="viewUserProfileTableBackground">
        <table id="viewUserProfileTable">
            <tr>
                <td id="userImageContainerTd">
                    <div id="userImageContainer"></div>
                </td>
                <td>
                    <div id="userNameAndType">

                           <h1><span id="userName">UserName</span></h1>
    
                            <p id="userType">usertype</p> 

                    </div>
                </td>

                <td>
                    <div id="messageMe">
                       
                            <form action="Backend/insertMessage.php" method="post">
                            

                                <input type="hidden" name="recieverID" id="recieverID"/>
                                <input type="hidden" name="senderID" value='<?php echo $_SESSION['userID']; ?>'>
                                <input type="hidden" name="senderUserName" value='<?php echo $_SESSION['userName']; ?>'>
                                <input type="hidden" name="recieverUserName" id="recieverUserName">
                 
                                <input type="text" name="messageBody" id="requestInfoMessageBody" oninput="checkText()" placeholder="MESSAGE" Required></textarea> <br/>
                                <input type="submit" value="SEND" id="send" />
                
                            </form>
                        
                    </div>
                </td>
            </tr>
        </table>

       
        <div id="SpecializationsTable">
            <div id="SpecializationsTableBody"> 
 

            </div> 
            

        </div>

        <table id="viewUserProfileNav">
            <tr>
                <td name="userPost" class="userPost" id="userNav" type="button" onclick="post()">
                   <?php
                    if(isset($_GET["userType"])){
                        $userType = $_GET["userType"];
                        if($userType === "Requestor"){
                            echo"Posted Requests";
                        } else if ($userType === "Responder"){
                            echo"Services";
                        }
                    } else{
                        echo"Posts";
                    }
                   
                   ?> 
                </td>
                <td name="userAbout" class="userAbout" id="userNav" type="button" onclick="about()">
                    About
                </td>
                <td name="userReviews" class="userReviews" id="userNav" type="button" onclick="reviews()">
                    <?php

                        if(isset($_GET["userType"])){
                            $userType = $_GET["userType"];

                            if($userType === "Responder"){

                             echo"Completed Requests Reviews";

                            } else if ($userType === "Requestor"){

                                echo"Reviews";

                            }

                        } else{
                                echo "Reviews";
                        }

                    ?>

                </td>

                <td name="userMore"  class="userMore" id="userNav" type="button" onclick="more()" style="<?php if(isset($_GET["userType"])){if($userType === "Requestor"){ echo "Display:none;";}}; ?>">
                    <?php

                        if(isset($_GET["userType"])){
                            $userType = $_GET["userType"];

                            if($userType === "Responder"){
                                
                                echo"Certificates";

                            } else if ($userType === "Requestor"){

                                echo"";
                            }

                        } else{
                            echo"";
                        }
                    
                    ?>
                </td>
            </tr>
        </table>
        
    </div>
    
    <div id="ContainerBackground">
       
        <div id="postContainer">
			<div id="postContainer-Content">
  
			</div> 
        </div>

        <div id="aboutContainer">
            <div id="aboutContainer-Content">
                <table class="userInfoTable">


                <!--
                    <tr class="userInfoTR">
                        <td>Email</td>
                        <td class="userEmail">  </td>
                    </tr>
                -->
                   
                    <tr class="userInfoTR">
					    <td>Full Name</td>
                         <td class="userFullName"></td>
                    </tr>
                    <!--
                    <tr class="userInfoTR">
					    <td>Age</td>
                        <td class="userAge">  </td>
                    </tr>
                    <tr class="userInfoTR">
					    <td>Birthday</td>
                        <td class="userDob">  </td>
                    </tr>
                    -->
                    <tr class="userInfoTR">
					    <td id="SpecializationTD">Spcialization</td>
                        <td class="userSpecialization">  </td>
                    </tr>
                    <tr class="userInfoTR">
					    <td>Location</td>
                        <td class="userLocation">  </td>
                    </tr>

                    <tr class="userInfoTR">
                        <td> About Me </td>
                        <td id="userDescriptionTextArea"> </td> 

                    </tr>
                </table>
            </div>
		</div> 

        <div id="reviewContainer">
            <div id="totalRequestReviews"> </div> <br/> <hr/>
            <div id="reviewContainerContentDiv"> </div>
        </div>

        <div id="moreContainer">

            <div id="certificatesContainer"> </div>
           
        </div>
    </div>

</div>  


<div id="LoadingScreen"> 

    <div id="loadingDiv"> 
        <h1 id="loadingText"> Loading... </h1>
        <img src="img/loading.gif"  id="loadingImage">
    </div>
  

</div>

<div id="ProcessingScreen"> 

    <div id="loadingDiv"> 
        <h1 id="loadingText"> Processing... </h1>
        <img src="img/processing.gif"  id="loadingImage">
    </div>
  

</div>


<div id="showImageBack"> 
    <div id="closeButton" onclick="closeUserForms()"> ✕ </div>
    <div id="showImageDiv"> 
       
        <img id="showImage"/>

    </div>

</div>

<?php
    $userType = $_GET["userType"];
    $userID = $_GET["userID"];

    if($userType === "Requestor"){
        echo "<script> getMyRequests($userID); getMyReviews($userID) </script> ";
        


    }else{
        echo "<script>  getUserReviews($userID);getUserTotalRequestRatings($userID);</script> ";

    }

?>

<?php
   // echo"<script> getUserReviews($userID); getUserCertificates($userID); getMySpecializations($userID); </script>";

   echo"<script>getUserCertificates($userID); getMySpecializations($userID); </script>";

?>
<script src="js/ViewUserProfile.js"> </script>
<?php
	require_once("imports/footer.php"); 
?>
<link rel="stylesheet" type="text/css" href="css/footer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">


</body>
</html>