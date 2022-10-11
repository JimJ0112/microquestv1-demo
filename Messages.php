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
<body id="MessagesBackground" onload="initMessages()">

<!--<img src="img/b.jpg" id="BodyBackgroundImg"/>-->

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");
?>

<?php 
	if(isset($_SESSION['userID'])){
   	 	$userID = $_SESSION['userID'];
    	echo "<script> getMessages($userID); </script>";
    	echo "<script> sessionStorage.setItem('myID','$userID')</script>";
	}
?>


<!-- main -->
<br/> <br/> <br/> 
<div id="MessagesMainBack">
	
	<div id="MessagesMainContainer">

								<!-- Conversations /* left side */ -->
		<div id="Conversations"> 
			<div id="conversationsContent">

				<table id="conversationSearchDiv">
					<tr>
						<td> 
								<h3 id="Chats"> Chat list </h3>
						</td>
					</tr>

					<tr>

						<td> 
							<input type="search" name="search" id="conversationSearch" placeholder="Search Conversation..."/> 
						</td>

						<td> 
							<input type="button" value="🔍" id="conversationSearchButton"/>
						</td>

						<td> 
							<input type="button" value="📝" id="conversationCreateNewMessage"/>
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
            			<image id="conversationImage"/>
            			<p id="conversationUserName"> Name </p>
            			<span id="conversationUserID" style="display:none"> conversation ID </span>
        			</div>

       		 	<div id="messagesConversation"> </div>
    
        	

        		<div id="messageForm">
                		<input type="hidden" name="senderID" id="senderID">
                		<input type="hidden" name="recieverID" id="recieverID">
                		<input type="hidden" name="senderUserName" value='<?php echo $_SESSION['userName']; ?>'>
                		<input type="hidden" name="recieverUserName" id="recieverUserName">

						<table>
               				<tr>
                    			<td> <input type="button" id="file" value="📎"> </td>
                    			<td> <input type="text" id="messageBody" oninput="checkText()" placeholder="Send Message.."> </td>
                    			<td> <input type="button" id="send" value="SEND" onclick="sendMessage()" disabled> </td>
               				<tr>
						</table>

        		</div>

    		</div>

		</div>



		




	</div>

</div>
<script src="js/messages.js">  </script>


</body>
</html>