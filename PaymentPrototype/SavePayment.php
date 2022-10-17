<?php

date_default_timezone_set("Asia/Manila");
//echo date("Y-m-d H:i:s",time());
$today = date("YmdHis",time());

$userEmail = $_POST["userEmail"];

$PaymentDate = $_POST["PaymentDate"]; 

$RecieverUserEmail = $_POST["RecieverUserEmail"];

$PaymentAmount = $_POST["PaymentAmount"];

$AttachedPaymentFile = $_FILES["AttachedPaymentFile"]["tmp_name"];

if(is_dir("payment_files/$userEmail")){

    $dir = "payment_files/$userEmail/";
    $myfile = fopen($dir.$userEmail.".txt",'a') or die('unable to open file');

    $Date = "Payment Date: ".$PaymentDate;
    $Reciever = "Reciever Email: ".$RecieverUserEmail;
    $Amount = "Amount: Php ".$PaymentAmount;
    $filename = $today."_".$userEmail."_".$RecieverUserEmail."_Payment.png";

    //$filedir = $dir.$filename;
    $filedir = $dir."/".$filename;
   

    $breakline = "-------------------------------------------------------";
    
    if(file_exists($filedir)){
        echo "file exists";
        $savefiledir = "Directory: Error";
        fwrite($myfile,$Date."\n");
        fwrite($myfile,$Reciever."\n");
        fwrite($myfile,$Amount."\n");
        fwrite($myfile,"filename: ".$filename."\n");
        fwrite($myfile,$savefiledir."\n");
        fwrite($myfile,$breakline."\n");
    } else {
        echo move_uploaded_file($AttachedPaymentFile,$filedir);
        $savefiledir = "Directory: ".$filedir;
        fwrite($myfile,$Date."\n");
        fwrite($myfile,$Reciever."\n");
        fwrite($myfile,$Amount."\n");
        fwrite($myfile,"filename: ".$filename."\n");
        fwrite($myfile,$savefiledir."\n");
        fwrite($myfile,$breakline."\n");
    }
    fclose($myfile);



} else{
    $dir = "payment_files/$userEmail";
    mkdir($dir);

    $myfile = fopen($dir."/$userEmail.txt",'w') or die('unable to open file');


    $Date = "Payment Date: ".$PaymentDate;
    $Reciever = "Reciever Email: ".$RecieverUserEmail;
    $Amount = "Amount: Php ".$PaymentAmount;
    $filename = $today."_".$userEmail."_".$RecieverUserEmail."_Payment.png";
    $breakline = "-------------------------------------------------------";

    $filedir = $dir."/".$filename;
    
    if(file_exists($filedir)){
        echo "file already exists";
        $savefiledir = "Directory: Error";
        fwrite($myfile,$Date."\n");
        fwrite($myfile,$Reciever."\n");
        fwrite($myfile,$Amount."\n");
        fwrite($myfile,"filename: ".$filename."\n");
        fwrite($myfile,$savefiledir."\n");
        fwrite($myfile,$breakline."\n");
    } else {
        echo move_uploaded_file($AttachedPaymentFile,$filedir);

        $savefiledir = "Directory: ".$filedir;
        fwrite($myfile,$Date."\n");
        fwrite($myfile,$Reciever."\n");
        fwrite($myfile,$Amount."\n");
        fwrite($myfile,"filename: ".$filename."\n");
        fwrite($myfile,$savefiledir."\n");
        fwrite($myfile,$breakline."\n");
    }

    
    fclose($myfile);


}

header("location: ShowPayments.php");