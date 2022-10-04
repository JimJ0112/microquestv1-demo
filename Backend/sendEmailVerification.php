<?php


/* Config mailer */

// Import PHPMailer classes into the global namespace 

use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 


// Include library files 
require 'PHPMailer/src/Exception.php'; 
require 'PHPMailer/src/PHPMailer.php'; 
require 'PHPMailer/src/SMTP.php'; 
 
// Create an instance; Pass `true` to enable exceptions 
$mail = new PHPMailer; 

// Server settings 
//$mail->SMTPDebug = SMTP::DEBUG_SERVER;    //Enable verbose debug output 
$mail->SMTPDebug = 1;
$mail->isSMTP();                            // Set mailer to use SMTP 
$mail->Host = 'smtp.gmail.com';           // Specify main and backup SMTP servers 
$mail->SMTPAuth = true;                     // Enable SMTP authentication 
$mail->Username = 'microquestteam@gmail.com';       // SMTP username 
$mail->Password = 'hrmajekiljfojowz';         // SMTP password 
$mail->SMTPSecure = 'ssl';                  // Enable TLS encryption, `ssl` also accepted 
$mail->Port = 465;                          // TCP port to connect to 
//$mail->Port = 25;                          // TCP port to connect to 
$mail->SMTPDebug = SMTP::DEBUG_SERVER;

/* set email  */
$recipient = $_POST['userEmail'];
//$recipient = "jimmanrique12@gmail.com";

$subject = "microQuest verification code";

$code = $_POST['code'];
//$code = "11111";

$message = "Hello $recipient, <br/>  your verification code is <b>  $code </b>  <br/> Note: Please ignore this if you did not signup to microQuest.com ";

//$sender = "microQuest";


$mail->setFrom('microquestteam@gmail.com');
$mail->addAddress($recipient);
$mail->isHTML(true);

$mail->Subject =$subject;
$mail->Body = $message;

// Send email 
if(!$mail->send()) { 
    echo 'Message could not be sent. Mailer Error: '.$mail->ErrorInfo; 
} else { 
    echo 'Message has been sent.'; 
}

