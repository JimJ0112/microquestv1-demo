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
//$recipient = $_POST['userEmail'];
//$recipient = "jimmanrique12@gmail.com";
$recipient = $_GET["userEmail"];

$subject = "Registration Status: Approved ";






$message = "

<body style='background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;'>
<table border='0' 'cellpadding='0' cellspacing='0' width='100%'>
<tr>
    <td bgcolor='#443735' align='center'>
        <table border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px;'>
            <tr>
                <td align='center' valign='top' style='padding: 40px 10px 40px 10px;'> </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td bgcolor='#fffff' align='center' style='padding: 0px 10px 0px 10px; color:black;' >
        <table border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px;'>
            <tr>
                <td bgcolor='#fffff' align='center' valign='top' style='padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;'>
                    <h1 style='font-size: 48px; font-weight: 400; margin: 2;'>Welcome to MicroQuest!</h1> <img src=' https://img.icons8.com/clouds/100/000000/handshake.png' width='125' height='120' style='display: block; border: 0px;' />
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td bgcolor='#fffff' align='center' style='color:black;'>
        <table width='100%' border='0' cellspacing='0' cellpadding='0'>
            <tr>
                <td bgcolor='#fffff' align='center' style='padding: 20px 30px 60px 30px;'>
                    <table border='0' cellspacing='0' cellpadding='0'>
                        <tr>
                            <td align='center' style='border-radius: 3px; margin: auto; width: 50%;' bgcolor='#FFA73B'><p style='font-size: 40px; font-family: Helvetica, Arial, sans-serif; color: #6c472c; text-decoration: none; color: #6c472c; text-decoration: none; padding: 10px 25px; border-radius: 2px; border: 1px solid #FFA73B; display: inline-block;'> 
                                Welcome to Microquest, your registration has been approved, you can now login your account
                            </td>
                            </tr>
                            <tr align='center' style='color: black; text-decoration: none;'><td><article>
                            Note: Please ignore this if you did not signup to microQuest.com 
                        </article></td></tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
                   ";

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
?>
