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

    <script src="js/Responder_RequestInfo.js"> </script>

    <title> Request </title>
</head>
<body onload="checkTransactionExists()">

    <?php
        if(isset($_GET['requestID'])){

            $requestID = $_GET['requestID'];

            echo "<script> getRequest($requestID);
            sessionStorage.setItem('requestID','$requestID') </script>";
        }
    ?>

<!-- NavBar-->
<?php
	
    /*

	if(isset($_SESSION["userType"])){
		$userType = $_SESSION["userType"];
		if($userType === "Responder"){
			require_once("imports/ResponderNavBar.php");

		} else if($userType === "Requestor"){
			require_once("imports/RequestorNavBar.php");

		}
	}
    */
?>

<?php
	//require_once("imports/ResponderNavBar.php");

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
        <input type="hidden" name="requestID" value="<?php echo $requestID ?>"/>
        <input type="hidden" name="requestorID" id="requestorID"/>
        <input type="hidden" name="responderID" value="<?php echo $_SESSION['userID']?>"/>
        <input type="hidden" name="price" id="price"/>
        <input type="hidden" name="transactionStartDate" value="<?php 
            date_default_timezone_set("Asia/Manila");
            echo date("Y-m-d H:i:s",time());?>"/>
        <input type="hidden" name="requestDueDate" id="requestDueDate"/>
    </form>
</div>




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
                                    echo "<input type=button value=APPLY id=applyButton class=button onclick='showApplyForm()'/>";
                                }
                            }

                        ?>
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

</body>
</html>