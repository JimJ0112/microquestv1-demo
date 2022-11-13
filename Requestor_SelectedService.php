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
	
    <script src="js/Requestor_SelectedService.js"> </script>
</head>
<body id="Requestor_AvailableServicesBackground" onload="<?php
    
    if(isset($_GET["category"])){
        $category = $_GET["category"];
        echo "getServices('$category');";
    }

    if(isset($_SESSION["userID"]) && isset($_SESSION["userType"])){
        $userID = $_SESSION["userID"];
        $userType = $_SESSION["userType"];

        echo  "getMyInfo($userID,'$userType')";
    }

?>">

<img src="img/b.jpg" id="BodyBackgroundImg"/>

<!-- NavBar-->
<?php
	require_once("imports/RequestorNavBar.php");

?>


<div id="contractBackGround"> 

    <div id="contractDivContainer">
        <div id="closeButton" onclick="hideContract()"> X </div>
        <div id="contractDiv"> 

        </div>
    </div>

</div>


    <div id="AvailServiceFormContainer"> 
        <div id="AvailServiceForm"> 
        
            <div id="closeButton" onclick="closeForms()"> ✕ </div>

            <form action="Backend/RegisterServiceOrder.php" method="post">

            <h3> Confirm Transaction </h3> <br/><br/><br/>

            <input type="hidden" name="formServiceID" id="formServiceID"/>
            <input type="hidden" name="requestorID" id="formRequestorID" value="<?php echo $_SESSION["userID"] ?> "/>
      
            <Table class="transactionTable">
                <tr>
                    <td>
                        <label> Category </label>
                    </td>

                    <td>
                        <input type="text" name="category" id="Category" readonly>
                    </td>
                </tr>
        

                <tr>
                    <td>
                        <label> Service </label> 
                    </td>

                    <td>
                        <input type="text" name="position" id="Position" readonly> <br/>
                    </td>

                </tr>


                <tr>
                    <td>
                        <label> Responder ID </label> 
                    </td>

                    <td>
                        <input type="text" name="responderID" id="responderID" readonly> 
                    </td>

                </tr>

                <tr>
                    <td>
                        <label> Price(Php) </label> 
                    </td>

                    <td>
                         <input type="text" name="servicePrice" id="servicePrice" readonly> 
                    </td>

                </tr>

                <tr>
                    <td>
                        <label> Select Date </label>
                    </td>

                    <td>
                        <?php
                            date_default_timezone_set("Asia/Manila");
                            $today = date("Y-m-d");
                            $nextFiveDays =  date("Y-m-d",strtotime($today . ' +5 day'));
                        ?>

                        <input type = "date" name="dueDate" id="dueDate" min="<?php echo $today; ?>" max="<?php echo $nextFiveDays; ?>" value="<?php echo $today;?>"onchange="availableTimeSlots()"required> <br/>
                        </td>

                </tr>

                <tr>
                    <td>
                        <label> Time Slot </label> <br/>
                    </td>

                    <td>

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
                     </td>

                </tr>

                <tr>
                    <td>
                        <label> Additional Notes </label>
                    </td>

                    <td>

                        <textarea name="additionalNotes" id="additionalNotes" onkeypress="generateContract()" cols="30" rows="5"></textarea> <br/><br/>
                    </td>

                </tr>
                
                </table>

                    <a href="#" onclick="showContract()">Terms and Conditions </a> <br/> <br/>
                    <input type="hidden" name="contract" id="contractInput"/>
                    <input type="checkBox" required/>
                    <label> I agree to the terms and conditions </label>
                    <br/> <br/>
                
 
                <input type="submit" value="Confirm">

            </form>


        </div>





    </div>


<div id="Requestor_SelectedServiceMainBack">
    <div id="Requestor_SelectedServiceMain">
      
            <div id="Requestor_SelectedServiceMainControls">
                <Table> 
                    <tr>
                        <td>
                            <img> Search
                        </td>

                        <td>
                            <input type="Search" name="q" class="SearchBar">
                        </td>

                    </tr>

                </table>
                
               

        
           
         

            </div>
        
    

        <br/>
        <center> 
            <h2 id="selectedCategory">  </h2>
        </center>
        <h3 id="WhatService"> What service do you need? </h3>
        <script> setSelectedCategory(); </script>



        <div id="AvailServiceContent">
        </div>


    </div>
</div>





        <div id="RespondersBack">
            <div id="Responders">
                <div id="closeButtonBack">
                    <div id="closeButton" onclick="closeResponders()"> ✕ </div>
                </div>

                <table>
                    <tr>
                        <td>My Location: </td> <br/>
                        <td><span id="myLocation"> </span> </td>
                    </tr>

                    <tr>
                        <td>
                            <label class="switch">
 						        <input type="checkbox" id="nearestResponderSlider" onchange="setNearestResponders()">
 						        <span class="slider round"></span>
					        </label>
                        </td>
                        <td>
                            Nearest Responders
                        </td>
                </tr>

                </table>

            
                <div id="SuggestedResponders">
                </div> 

            
                </div> 

            </div>
        </div>
      

    








</body>
</html>