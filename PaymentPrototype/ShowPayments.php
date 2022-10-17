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
    <a href="Payment.php"> Make a Payment </a>
    <h3> Payments </h3>
    <?php
            $userEmail = $_SESSION["userEmail"];
            $dir = "payment_files/$userEmail/$userEmail.txt";
            $dirname = "payment_files/$userEmail/";

            $myfile = fopen($dir,'r') or die('unable to open file');

            $n = 0;
            while(!feof($myfile)){
                echo fgets($myfile) . '<br/>';
            }


            $images = glob($dirname."*.png");

            echo"<h3> Attached files </h3> ";
            foreach($images as $image) {
                echo '<img src="'.$image.'" style="width:200px;height:300px;"/><br />';
                echo '-------------------------------------------- <br/>';
            }

            fclose($myfile);
    ?>
</body>
</html>