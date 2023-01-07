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
    <link rel="stylesheet" href="css/RequestInfo.css">


        <!-- Load Jspdf -->
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
    
    <script type="text/javascript" src="html2canvas.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>


    <script src="js/Responder_RequestInfo.js"> </script>

    <title> Request </title>
</head>
<!--<body onload="checkTransactionExists()">-->
<body>
    <?php
        if(isset($_GET['requestID'])){

            $requestID = $_GET['requestID'];

            echo "<script> getRequest($requestID);
            sessionStorage.setItem('requestID','$requestID') </script>";
        }
    ?>



<?php
	

	if(isset($_SESSION["userStatus"]) && isset($_SESSION["userType"])){
		$status = $_SESSION["userStatus"];
		$userType = $_SESSION["userType"];

		echo $status;

		if($status === "not verified" || $status === "Declined"){
			header("location: NotVerifiedMessage.php?msg=Not Verified yet");

		}else{
			if($userType === "Responder"){
				require_once("imports/ResponderNavBar.php");
			} else{
				header("location: Requestor_AvailableServices.php?msg=Not a Responder!");
			}

		}


	}
?>





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

<!--
<div id="formBackground"> 
    
    <div id="AreYouSureDialog">
        <center>
        <h3> Are you sure you want to apply to this request?</h3> 
        <input type="Button" value="Yes" onclick="acceptApplyForm()"/>
        <input type="Button" value="No" onclick="cancelApplyForm()"/>
        </center>
    </div>


    <form action="Backend/RegisterRequestApplicationTransaction.php" method="post" id="requestApplicationForm">
        <input type="hidden" name="formType" value="requestApplication"/> 
        <input type="hidden" name="requestID" value="<?php //echo $requestID ?>"/>
        <input type="hidden" name="requestorID" id="requestorID"/>
        <input type="hidden" name="responderID" value="<?php //echo $_SESSION['userID']?>"/>
        <input type="hidden" name="price" id="price"/>
        <input type="hidden" name="transactionStartDate" value="<?php 
           // date_default_timezone_set("Asia/Manila");
            //echo date("Y-m-d H:i:s",time());?>"/>
        <input type="hidden" name="requestDueDate" id="requestDueDate"/>
        <input type="hidden" name="contract" id="contractInput"/>;
    </form>
</div>
-->



<div id="requestInfoContentBack">
    <div id="requestInfoContent">
        <a href="Responder_RequestBoard.php"> <img src="img/back.png" id="Registration-BackButton"/></a>
    
        <!-- for sending the requestor a message -->


        <table id="requestInfoContentTable">
         <tr>
            <td >
                <div id="requestInfoMain"> 

                    <center> <h1 id="requestTitle">Title </h1> </center>

                    <center>  <h3 id="category"> category </h3> </center>
                    <Table id="requestDataTable">
                        <tr>
                            <td id="requestData" ><h3> Requestor's Location: </td><td id="requestData" ><span id="requestorLocation"> location </span> </h3></td> <br/> <br/> <br/> 
                        </tr>
                        <tr>
                            <td id="requestData" ><h3> Date posted: </td><td id="requestData" ><span id="datePosted">  </span> </h3></td>
                        </tr>  
                        <tr>
                            <td id="requestData" ><h3> Due date: </td><td id="requestData" ><span id="dueDate"> 01/01/2022 </span> </h3></td>
                        </tr>   
                        <tr> 
                            <td id="requestData" ><h3> Expected price:  </td><td id="requestData" ><span id="expectedPrice"> price </span></br> 
                            <span id="isNegotiable"> Negotiable </span></td> 
                        </tr>
                        <tr>        
                            <td ><h3> Request Description: </h3></td> 
                            <td ><p id="requestNotes"> more details </p></td>
                        </tr>                         
                    </Table>

            
                    <center>
                        <?php
                            if(isset($_SESSION["userType"])){
                                $usertype = $_SESSION["userType"];

                                if($usertype === "Responder"){
                                    echo "<input type=button value=APPLY id=applyButton class=button onclick='showContract();'/>";
                                }
                            }

                        ?>

                        <p id="alreadyExistsTransactionMessage" class="errorInfoMessage"> ⓘ You already have an ongoing transaction with this request </p> <br/>
                        <p id="noSpecializationMessage" class="errorInfoMessage"> ⓘ You can't apply to this request because you don't have this specialization, please add this request's category to your specializations</p>
                    </center>
                </div>
            </td>

            <td id="messageMeTd">
                <div id="messageMe">
                    <center>
                        <form action="Backend/insertMessage.php" method="post">
                            <div id="requestorImageContainer"> </div> <br/>
                            <b><a id="requestorName"> Requestor Name </a></b> <br/>
                            <label> Send me a message </label> <br/>

                            <input type="hidden" name="recieverID" id="recieverID"/>
                            <input type="hidden" name="senderID" value='<?php echo $_SESSION['userID']; ?>'>
                            <input type="hidden" name="senderUserName" value='<?php echo $_SESSION['userName']; ?>'>
                            <input type="hidden" name="recieverUserName" id="recieverUserName">
                 
                            <textarea name="messageBody" id="requestInfoMessageBody" oninput="checkText()"> </textarea> <br/>
                            <input type="submit" value="SEND" id="send" disabled/>
                
                        </form>
                    </center>
                </div>
               
            
                <!--
                    <table id="viewFeedBacks"> 
                    </table>
                -->

            </td>
         </tr>
        </table>

    <div>
</div>





<!-- Contract --> 
<div id="contractBackGround"> 

     
        <div id="closeButton" onclick="cancelApplyForm()"> ✕ </div>
        <div id="printButton" onclick="h2canvaspdf()" title="Save this document">
          ⎙ Save 
        </div>

        <!--
        <button id="ConfirmContractButton" onclick="acceptApplyForm()" title="Submit" class="buttonGreen">
          Confirm
        </button>
        -->

        <center> 
        <form action="Backend/RegisterRequestApplicationTransaction.php" method="post" id="requestApplicationForm">
            <input type="hidden" name="formType" value="requestApplication"/> 
            <input type="hidden" name="requestID" value="<?php echo $requestID ?>"/>
            <input type="hidden" name="requestorID" id="requestorID"/>
            <input type="hidden" name="responderID" value="<?php echo $_SESSION['userID']?>"/>
            <input type="hidden" name="price" id="price"/>
            <input type="hidden" name="transactionStartDate" value="<?php 
                date_default_timezone_set("Asia/Manila");
                echo date("Y-m-d H:i:s",time());?>"/>
            <input type="hidden" name="requestDueDate" id="requestDueDate"/>
            <input type="hidden" name="contract" id="contractInput"/>

            <input type="checkbox" required/> <label> I agree to this contract </label> <br/>
            <input type="submit" id="ConfirmContractButton" value="Confirm" class="buttonGreen">
            
        </form>
        </center>

        



        <div id="contractDiv" > 
            <img src="img/logo1.jpg" id="microquestLogo" /> 


            <div id="contractHeaderInfo" >
                 Date  <br/> &nbsp <span id="date"> 19/11/2022 </span> <br/><br/>
                 Request ID <br/> &nbsp <span id="serviceIDHeaderInfo"> RQST0-1 </span> <br/><br/>
                 Category  <br/> &nbsp <span id="categoryHeaderInfo"> Home Services </span> <br/><br/>
                 Title  <br/>  &nbsp <span id="titleHeaderInfo"> House Cleaning </span> <br/><br/>
                 Due Date  <br/> &nbsp <span id="dueDateHeaderInfo"> 19/11/2022 </span> <br/><br/>
            </div>

            <center>
                <table id="usersInfo">
                    <tr>
                        <td id="ResponderInfoContract" > 
                             Responder  <br/> 
                            &nbsp<span id="responderIDHeader"> 

                                <?php if(isset($_SESSION['userID'])){
                                    echo $_SESSION['userID'];
                                }?> 

                                </span> <br/>

                            &nbsp<span id="responderUserNameHeader">
                                <?php if(isset($_SESSION['userName'])){
                                    echo $_SESSION['userName'];
                                }?> 
                                
                                </span> <br/>

                            &nbsp<span id="responderNameHeader"> 
                                <?php if(isset($_SESSION['myName'])){
                                    echo $_SESSION['myName'];
                                }?> 
                                </span> <br/>

                            &nbsp<span id="responderEmailHeader"> 
                                <?php if(isset($_SESSION['userEmail'])){
                                    echo $_SESSION['userEmail'];
                                }?> 
                                </span> <br/>
                            


                            

                        </td>

                        <td id="RequestorInfoContract" > 
                             Requestor  <br/> 
                            &nbsp<span id="requestorIDHeader"> 46 </span> <br/>
                            &nbsp<span id="requestorUserNameHeader"> Jimj0112 </span> <br/>
                            &nbsp<span id="requestorNameHeader"> Jim Manrique</span> <br/>
                            &nbsp<span id="requestorEmailHeader"> JimManrique12@gmail.com</span> <br/>

                        </td>
                    </tr>
            
                </table>
                <br/>
                <br/>
                <hr/>
            </center>

     
            <div id="contractContent" > 


            </div>
         
        </div>
   

</div>




<?php
	require_once("imports/footer.php"); 
?>



<link rel="stylesheet" type="text/css" href="css/footer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">


</body>
</html>