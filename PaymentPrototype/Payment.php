<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
        date_default_timezone_set("Asia/Manila");
        //echo date("Y-m-d H:i:s",time());
         $today = date("Y-m-d H:i:s",time());

         $userEmail = $_SESSION["userEmail"];
    ?>

    <a href="ShowPayments.php"> Show Recorded Payments </a> <br/>

    <form action="SavePayment.php" method="post" enctype="multipart/form-data">
        <br/><br/><br/><br/><br/>
        <input type="hidden" name="userEmail" value="<?php echo $userEmail;?>"/>
        <label> Payment Date: </label>
        <input type="datetime-local" name="PaymentDate" value="<?php echo $today?>"/> <br/>
        <label> Reciever UserEmail:</label>
        <input type="text" name="RecieverUserEmail"/> <br/>
        <label> Amount: Php </label>
        <input type="number" name="PaymentAmount"/> <br/>
        <label> File Attachment: </label>
        <input type="file" name="AttachedPaymentFile"/> <br/>
        <input type="submit" value="Send"/>

    </form>
    
</body>
</html>