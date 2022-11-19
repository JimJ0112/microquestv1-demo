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
	
    
    <!-- Load Jspdf -->
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
    
    <script type="text/javascript" src="html2canvas.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>



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

     
        <div id="closeButton" onclick="hideContract()"> ✕ </div>
        <div id="printButton" onclick="h2canvaspdf()" title="Save this document">
         <center> ⎙ Save </center>
        </div>
        <div id="contractDiv" > 
            <img src="img/logo1.jpg" id="microquestLogo" /> 


            <div id="contractHeaderInfo" >
                <b> Date </b> <br/> &nbsp <span id="date"> 19/11/2022 </span> <br/><br/>
                <b> Service ID</b> <br/> &nbsp <span id="serviceIDHeaderInfo"> SVC0-1 </span> <br/><br/>
                <b> Category </b> <br/> &nbsp <span id="categoryHeaderInfo"> Home Services </span> <br/><br/>
                <b> Title </b> <br/>  &nbsp <span id="titleHeaderInfo"> House Cleaning </span> <br/><br/>
                <b> Due Date </b> <br/> &nbsp <span id="dueDateHeaderInfo"> 19/11/2022 </span> <br/><br/>
            </div>

            <center>
                <table id="usersInfo">
                    <tr>
                        <td id="ResponderInfoContract" > 
                            <b> Responder </b> <br/> 
                            &nbsp<span id="responderIDHeader"> 11 </span> <br/>
                            &nbsp<span id="responderUserNameHeader"> Jimj0112 </span> <br/>
                            &nbsp<span id="responderNameHeader"> Jim Manrique</span> <br/>
                            &nbsp<span id="responderEmailHeader"> JimManrique12@gmail.com</span> <br/>
                            


                            

                        </td>

                        <td id="RequestorInfoContract" > 
                            <b> Requestor </b> <br/> 
                            &nbsp<span id="requestorIDHeader"> 46 </span> <br/>
                            &nbsp<span id="requestorUserNameHeader"> Jimj0112 </span> <br/>
                            &nbsp<span id="requestorNameHeader"> Jim Manrique</span> <br/>
                            &nbsp<span id="requestorEmailHeader"> JimManrique12@gmail.com</span> <br/>

                        </td>
                    </tr>
            
                </table>
                <br/>
                <br/>
                <hr/>
            </center>

     
            <div id="contractContent" > 


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
                    <td class="transactionFirstRow">
                        <label> Category </label>
                    </td>

                    <td class="transactionSecondRow">
                        <input type="text" name="category" id="Category" readonly>
                    </td>
                </tr>
        

                <tr>
                    <td class="transactionFirstRow">
                        <label> Service </label> 
                    </td>

                    <td class="transactionSecondRow">
                        <input type="text" name="position" id="Position" readonly> <br/>
                    </td>

                </tr>


                <tr>
                    <td class="transactionFirstRow">
                        <label> Responder ID </label> 
                    </td>

                    <td class="transactionSecondRow">
                        <input type="text" name="responderID" id="responderID" readonly> 
                    </td>

                </tr>

                <tr>
                    <td class="transactionFirstRow">
                        <label> Price(Php) </label> 
                    </td>

                    <td class="transactionSecondRow">
                         <input type="text" name="servicePrice" id="servicePrice" readonly> 
                    </td>

                </tr>

                <tr>
                    <td class="transactionFirstRow">
                        <label> Select Date </label>
                    </td>

                    <td class="transactionSecondRow">
                        <?php
                            date_default_timezone_set("Asia/Manila");
                            $today = date("Y-m-d");
                            $nextFiveDays =  date("Y-m-d",strtotime($today . ' +5 day'));
                        ?>

                        <input type = "date" name="dueDate" id="dueDate" min="<?php echo $today; ?>" max="<?php echo $nextFiveDays; ?>" value="<?php echo $today;?>"onchange="availableTimeSlots()"required> <br/>
                        </td>

                </tr>

                <tr>
                    <td class="transactionFirstRow">
                        <label> Time Slot </label> <br/>
                    </td>

                    <td class="transactionSecondRow">

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
                    <td class="transactionFirstRow">
                        <label> Additional Notes </label>
                    </td>

                    <td class="transactionSecondRow">

                        <textarea name="additionalNotes" id="additionalNotes" onkeypress="generateContract()" cols="30" rows="5"></textarea> 
                    </td>

                </tr>
                
                
                </table>

                <br/><br/>

                    <a href="#" onclick="showContract()">Terms and Conditions </a> <br/> <br/>
                    <input type="hidden" name="contract" id="contractInput"/>
                    <input type="checkBox" required/>
                    <label> I agree to the terms and conditions </label>
                    <br/> <br/>
                
 
                <input type="submit" value="Confirm" class="confirmButton">

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
      

        <canvas id="canvas" width="480" height="500"></canvas> 




        <script type="text/javascript" src="html2canvas.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>



    <script src="js/Requestor_SelectedService.js"> </script>



</body>
</html>