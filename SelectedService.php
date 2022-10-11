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
		Available Services
	</title>

	
    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
	
	<link rel="stylesheet" type="text/css" href="css/Requestor_SelectedService.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	

</head>
<body id="Requestor_AvailableServicesBackground" onload="getServices()">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

?>


<div id="contractBackGround"> 
    <div id="closeButton" onclick="hideContract()"> X </div>
        <br/> <br/>
        <br/> <br/>
    <div id="contractDiv"> 

    </div>

</div>

<center>
    <div id="AvailServiceFormContainer"> 
    <div id="closeButton" onclick="closeForms()"> X </div><br/> <br/> <br/>
     <div id="AvailServiceForm"> 
        
        <form action="Backend/RegisterServiceOrder.php" method="post">

            <h3> Confirm Transaction </h3> <br/><br/><br/>

            <input type="hidden" name="formServiceID" id="formServiceID"/>
            <input type="hidden" name="requestorID" id="formRequestorID" value="<?php echo $_SESSION["userID"] ?> "/>
      
                <label> Category </label> <br/>
                <input type="text" name="category" id="Category" readonly> <br/> 
        

        
                <label> Service </label> <br/>
                <input type="text" name="position" id="Position" readonly> <br/>
            

    
                <label> Responder ID </label> <br/>
                <input type="text" name="responderID" id="responderID" readonly> <br/>
  

                <label> Price  </label> <br/>
                Php <input type="text" name="servicePrice" id="servicePrice" readonly> <br/>
  

         
                <label> Select Date </label> <br/>
                
                <?php
                            date_default_timezone_set("Asia/Manila");
                            $today = date("Y-m-d");
                            $nextFiveDays =  date("Y-m-d",strtotime($today . ' +5 day'));
                          
                ?>

                <input type = "date" name="dueDate" id="dueDate" min="<?php echo $today; ?>" max="<?php echo $nextFiveDays; ?>" value="<?php echo $today;?>"onchange="availableTimeSlots()"required> <br/>

                <label> Time Slot </label> <br/>
                <select id="responderTimeSlots" name="responderTimeSlots" onchange="availableTimeSlots()" required>
                    <option default hidden> Choose time</option>
                    <option class="timeSlot" value="9:00  to 10:00 AM"> 9:00  to 10:00 AM</option>
                    <option class="timeSlot" value="10:00 to 11:00 AM"> 10:00 to 11:00 AM</option>
                    <option class="timeSlot" value="11:00 to 12:00 PM"> 11:00 to 12:00 PM</option>
                    <option class="timeSlot" value="12:00 to 01:00 PM"> 12:00 to 01:00 PM</option>
                    <option class="timeSlot" value="01:00 to 02:00 PM"> 01:00 to 02:00 PM</option>
                    <option class="timeSlot" value="02:00 to 03:00 PM"> 02:00 to 03:00 PM</option>
                    <option class="timeSlot" value="03:00 to 04:00 PM"> 03:00 to 04:00 PM</option>
                    <option class="timeSlot" value="04:00 to 05:00 PM"> 04:00 to 05:00 PM</option>
                    <option class="timeSlot" value="05:00 to 06:00 PM"> 05:00 to 06:00 PM</option>

                </select> <br/>



                <label> Additional Notes </label> <br/>

                <textarea name="additionalNotes" id="additionalNotes" onkeypress="generateContract()"></textarea> <br/><br/>
                <a href="#" onclick="showContract()">Terms and Conditions </a> <br/> <br/>
                <input type="hidden" name="contract" id="contractInput"/>
                <input type="checkBox" required/>
                <label> I agree to the terms and conditions </label>
                <br/> <br/>
                
 
                <input type="submit" value="Confirm">

        </form>


     </div>





    </div>
</center>


<center>
<h2 id="selectedCategory">  </h2>
    <br/>

            <form method="GET"> 
                Search <input type="Search" name="q">
            </form>

    <br/>
</center>
    

    <br/>
    <h3> What service do you need? </h3>

    <div id="AvailServiceContent">
        
    </div>


    <center>
    <div id="Responders">

                <table>
                <tr>
                    <td>My Location </td> <br/>
                    <td><h5 id="myLocation"> </h5> </td>
                </tr>
                </table>

        <h5> Nearest Responders: </h5>
        <div id="SuggestedResponders">
        </div> 

        <h5> Other available responders </h5>
        <div id="AllResponders">
            
        </div> 

    </div>
    </center>









    








</body>
</html>