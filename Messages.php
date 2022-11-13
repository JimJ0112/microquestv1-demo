<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

    if(isset($_SESSION["municipality"])){
        $municipality = $_SESSION["municipality"];

        echo"<script> sessionStorage.setItem('municipality','$municipality')</script>";
    }

	
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		Messages
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/Messages.css">

	<script src="js/conversations.js">  </script>

</head>
<body id="MessagesBackground" onload="<?php 
	if(isset($_SESSION['userID'])){
   	 	$userID = $_SESSION['userID'];
    	echo "getMessages($userID);";
    	echo "sessionStorage.setItem('myID','$userID');";
		echo "init(); initMessages();";
	}
?>">



<!-- NavBar-->
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



<?php
if(isset($_SESSION["userName"])){

	$myUserName = $_SESSION["userName"];
	echo"<script> sessionStorage.setItem('myUserName','$myUserName')</script>";
}
?>
<!-- main -->

<div id="MessagesMainBack">
<br/> <br/> <br/> 
	
	<div id="MessagesMainContainer">

								<!-- Conversations /* left side */ -->
		<div id="Conversations"> 
			<div id="conversationsContent">

				<table id="conversationSearchDiv">
					<tr>
						<td> 
								<h3 id="Chats"> Chat list </h3>

								<div class="chatlistButton"> 
									<svg viewBox="0 0 36 36" fill="currentColor" height="28" width="28">
										<path d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"></path>

										<path d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"></path>
									</svg>
								</div>

						</td>

					</tr>

					<tr>

						<td> 
							<input type="search" name="search" id="conversationSearch" placeholder="Search Conversation..."/> 
						</td>


					</tr>

				</table>

			</div>

			<div id="conversationsList">

			</div>
		
		</div>

								<!-- Messages /* right side */ -->

		<div id="Messages" >

			<div id="messagesContent">
				

    			<div id="messagesMain"> 
        			<div id="conversationHeader">
						<center>
							<table>
								<tr>
									<td>
            							<image id="conversationImage" src="img/b.jpg"/>
									</td>
									<td>
            							<span id="conversationUserName"> Name </span>
									</td>
            							<span id="conversationUserID" style="display:none"> conversation ID </span>
									
								</tr>
							</table>
						</center>
        			</div>

       		 	<div id="messagesConversation"> </div>
    
        	

        		<div id="messageForm">
                		<input type="hidden" name="senderID" id="senderID" value="<?php echo $_SESSION["userID"]?>">
                		<input type="hidden" name="recieverID" id="recieverID">
                		<input type="hidden" name="senderUserName" value='<?php echo $_SESSION['userName']; ?>'>
                		<input type="hidden" name="recieverUserName" id="recieverUserName">

						<table>
               				<tr>
                    			<td> <input type="button" id="file" value="📎" onclick="openMessageSendPhotoBack()"> </td>
                    			<td> <input type="text" id="messageBody" oninput="checkText()" placeholder="Send Message.."> </td>
                    			<td> <input type="button" id="send" value="SEND" onclick="sendMessage()" disabled> </td>
               				<tr>
						</table>

        		</div>

    		</div>

		</div>

		<div id="messagesContentEmpty" style="display:block;">
				<center>
					<h1> No selected conversation yet </h1>
				</center> 
		</div>


		




	</div>

</div>


			<div id="messageSendPhotoBack"> 
				<div id="messageSendPhoto">
						<form action="backend/insertPhotoMessage.php" method="post" enctype="multipart/form-data" target="votar" id="messageSendPhotoForm">
							<div id="closeImage" onclick="closeMessageSendPhotoBack()"> ✕ </div>
            				<input type="hidden" name="senderID"  value="<?php echo $_SESSION["userID"]?>">
            				<input type="hidden" name="recieverID" id="sendPhotoRecieverID">
            				<input type="hidden" name="senderUserName" value='<?php echo $_SESSION['userName']; ?>'>
            				<input type="hidden" name="recieverUserName" id="sendPhotoRecieverUserName">

                	    		<center>
								<br/>
            	    			<input type="text" id="messageSendPhotoBody" name="message" oninput="checkText()" placeholder="Send Message.."> 
								<br/>
								<br/>
								<div id="messageImageFileOutputContainer">
									<div id="closeImage" onclick="closeMessageFile()"> ✕ </div>
									<img id="imageFileOutput"/>
								</div>
								<br/>
								<input type="file" name="messageImageFile" id="messageImageFile" oninput="showMessageImageFile(event)" required/>
								<br/>
								<br/>
            	    			<input type="button" id="send" value="SEND" onclick="sendForm()"> 
							</center>
						</form>
        		</div>
			</div>

</div>

<div id="viewImageBack">
	<div id="viewImage">
		<div id="closeImage" class="closeImageClass" onclick="closeImage()"> ✕ </div>
		<img id="viewImageFile"/>
	</div>
</div>


<script> noMessageSelected(); </script>
<script src="js/messages.js">  </script>




<iframe name="votar" style="display:none;"></iframe>
</body>
</html>