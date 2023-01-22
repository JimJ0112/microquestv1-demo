<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

     
    if(isset($_GET["msg"])){
        $msg = $_GET["msg"];

        echo "<script> alert('$msg')</script>";

    }

    if(isset($_SESSION["userID"]) && isset($_GET["userID"]) && isset($_GET["userType"])){
        
        $myID = $_SESSION["userID"];
        $userID = $_GET["userID"];
        $userType= $_GET["userType"];

        if($myID != $userID){
            header("location:ViewUserProfile.php?userID=$userID&userType=$userType");

        }
        
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

    <title> My User Profile </title>
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
                 
                
                
                            </form>
                        
                    </div>
                </td>
            </tr>
        </table>

        

            
        <div id="SpecializationsTable">
            <div id="SpecializationsTableBody"> 
                <div> 
                <?php 
                $pagename = basename($_SERVER['PHP_SELF']);
                $myID = $_SESSION["userID"];
                $userID = $_GET["userID"];
                $userType = $_SESSION["userType"];

                if($pagename === "ViewMyProfile.php" && $myID === $userID && $userType==="Responder"){
                    echo "<button class='buttonGreen' onclick='showAddSpecializationForm()'> + </button> ";
                }else{
                    echo "<style>
                          #SpecializationsTable {
                            display:none;
                        }         
                    </style>";
                }

                ?> 
            </div>

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

                                echo"My Request Reviews";
    
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

                            
                            }

                        } else{
                            
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
                    <tr class="userInfoTR" style="<?php if($userType === "Requestor"){ echo"display:none;";} else{}?>">
					    <td id="SpecializationTD">Specialization</td>
                        <td class="userSpecialization">  </td>
                    </tr>

                    <tr class="userInfoTR">
					    <td>Location</td>
                        <td class="userLocation">  </td>
                    </tr>


                </table>

                <br/>
                    <div class="userInfoDiv">
                       
                            <input type="hidden" name="userID" value="<?php echo $userID; ?>" id="userDescriptionUserID"/>
                            <textarea name="userDescription" id="userDescriptionTextArea"></textarea>
                            <button class="buttonGreen" onclick="editUserDescription()"> ✎ Save  </button>

                    
                    </div>







            </div>
		</div> 

        <div id="reviewContainer">
            <div id="totalRequestReviews"> </div> <br/> <hr/>
            <div id="reviewContainerContentDiv"> </div>

        </div>

        <div id="moreContainer">
            <?php

                        if(isset($_GET["userType"])){

                            $userType = $_GET["userType"];

                            if($userType === "Responder"){
                                
                                echo"<button class='buttonGeneral' onclick='showNewCertificateForm()'> Add Certificate </button> ";

                            } else if ($userType === "Requestor"){

                                
                            }

                        } else{
                           
                        }
                    
            ?>
            

            <div id="certificatesContainer"> </div>
           
        </div>
    </div>

</div>  


<div id="otherCategoriesFormBack" class="formBack">
    
    
    <form action="Backend/RegisterCertificate.php" method="post" enctype="multipart/form-data" id="otherCategoriesForm" class="ServicePopUp"> 
    <div id="closeButton" onclick="closeForms()"> ✕ </div>
        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 

        
        
        <table id="otherTable">

                <tr>
                    <td class="column1_td">Specialization </td>
                    
                    <td> 
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span> 
                        <Select name="specialization" id="mySpecializationsDropDown" Required> 
                            <option> </option>
                        </Select>
                    </td> 
                </tr>

                <tr>
                    <td class="column1_td">Training/Certificate Title</td>
                    
                    <td> 
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span> 
                        <input type="text" name="certification" Required> 
                    </td> 
                </tr>

                <tr>
                    <td class="column1_td">Training/Certificate File </td>
                    <td>
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span>  
                        <input type="file" name="certificateFile" accept="image/png, image/jpg, image/jpeg" required> 
                    </td>
                </tr>
                
                

            </table>

            <input type="submit" value="Save"/>
    </form>
</div>




<div id="showImageBack"> 
    <div id="closeButton" onclick="closeForms()"> ✕ </div>
    <div id="showImageDiv"> 
       
        <img id="showImage"/>

    </div>

</div>

<div id="updateCertBack"> 
    <div id="closeButton" onclick="closeForms()"> ✕ </div>

    <form action="Backend/updateCertificate.php" method="post" enctype="multipart/form-data"  class="ServicePopUp" id="updateCertForm"> 
            <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 
            <input type="hidden" name="certificateID" id="certificateID"> 


        
        
            <table id="otherTable">
                <tr>
                    <td class="column1_td">Training/Certificate Title</td>
                    
                    <td> 
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span> 
                        <input type="text" name="certification" id="updateCertificateTitle" Required> 
                    </td> 
                </tr>

                <tr>
                    <td class="column1_td">Training/Certificate File </td>
                    <td>
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span>  
                        <input type="file" name="certificateFile" accept="image/png, image/jpg, image/jpeg" id="updateCertificateFile"> 
                    </td>
                </tr>

                <tr>
                    <td class="column1_td">Status </td>

                    <td>

                         <input type="radio" value="Active" name="Status" class="certificateStatusRadio" required/> <label>  Active </label>
						 <input type="radio" value="Delisted" name="Status" class="certificateStatusRadio"/> <label> Delisted <label>

                    </td>

                </tr>
                
                

            </table>

            <input type="submit" value="Update"/>

    </form>

</div>



<div id="AddSpecializationBack" class="formBack">
    
    
    <form action="Backend/AddSpecialization.php" method="post" enctype="multipart/form-data" id="addSpecializationForm" class="ServicePopUp"> 
    <div id="closeButton" onclick="closeForms()"> ✕ </div>
        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 

        
        
        <table id="otherTable">
                <tr>
                    <td class="column1_td">Select a specialization: </td>
                    
                    <td> 
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span> 
                        <Select name="specialization" id="specializationsDropDown" onchange="specializationAlreadyOffered(<?php echo $_SESSION['userID']; ?>)" Required> 
                            <option> </option>
                        </Select>
                    </td> 

                </tr>

        </table>

            <input type="submit" value="ADD" id="submitSpecialization" disabled/>
    </form>
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

<?php
    $userType = $_GET["userType"];
    $userID = $_GET["userID"];

    if($userType === "Requestor"){
        echo "<script> getMyRequests($userID); getMyReviews($userID) </script> ";
        


    }else{
        echo "<script>  getUserReviews($userID);getUserTotalRequestRatings($userID); </script> ";

    }

?>


<?php
    //echo"<script> getUserReviews($userID); getMyCertificates($userID);getServices();  getMySpecializations($userID);</script>";

    echo"<script> getMyCertificates($userID);getServices();  getMySpecializations($userID);</script>";

?>
<script src="js/ViewUserProfile.js"> </script>
<?php
	require_once("imports/footer.php"); 
?>
<link rel="stylesheet" type="text/css" href="css/footer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">


</body>
</html>