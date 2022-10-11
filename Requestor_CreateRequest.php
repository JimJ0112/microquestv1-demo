<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:LoginForm.php?msg=Please Login First");
    }

    if(isset($_SESSION["userType"])){
        $usertype = $_SESSION["userType"];
        if($usertype != "Requestor"){
            header("location: User_Profile.php?msg= Not a Reponder");
        }
    }


    date_default_timezone_set("Asia/Manila");
    //echo date("Y-m-d H:i:s",time());
    $today = date("Y-m-d H:i:s",time());

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
    

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/Requestor_CreateRequest.css">

    <script src="js/CreateRequest.js"> </script>


    <title> Create a Request </title>
</head>

<body onload="getServices()" id="Responder_CreateServiceBackground">
    <?php
                require_once("imports/ResponderNavBar.php");
    ?>
<img src="img/b.jpg" id="BodyBackgroundImg"/>


<!-- Main -->
    
        <br/>
            <center> <h1 id="RequestOrdersTitle"> Create a Request</h1> </center>
        <br/> <br/>
 
<div id="Requestor_CreateRequestMainBack">
    <div id="Requestor_CreateRequestMain">

        <center>


       
            <div id="CreateRequestControlsContainer">

                <div id="ControlItemRequestsButton">
                    <table>
                        <tr>
                            <td>
                                <image src="img/g838.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Requestor_AvailableServices.php"> <span id="RequestsButtonText"> Avail Services </span> </a>
                            </td>
                        <tr>
                    </table>
                </div>
            <div>

            <div id="ControlItemRequestsButton">
                    <table>
                        <tr class="navControlSelected">
                            <td>
                                <image src="img/requests.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Requestor_RequestBoard.php" > <span id="RequestsButtonText"> My Requests </span> </a>
                            </td>
                        <tr>
                    </table>
            </div>

            <div class="CreateRequestControlsDropDown" id="AvailableServicesCategoryContainer" onchange="setCategory()"> 
						<select id="DropDownRequestCategory"> 
							<option selected disabled> Category</option>
						</select> 
			</div>
      

        </center>
    
    <!-- Forms for creating request -->

    <!-- regular requests --> 
    <center> <h1 id="DisplayCategory"> Category </h1> </center>

    <div id="FormsContainer">


        <form method="post" action="Backend/CreateRequestBackend.php" id="regularRequestForm" class="requestForm">
      

            <h2 id="selectedCategory"> </h2>
            <input type="hidden" name="formType" value="regularRequest"/> 
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>">
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="requestCategory" id="requestCategory">
            <input type="hidden" name="datePosted" value="<?php $today ?>">

            <label> Title of your request </label> <br/>
            <input type="text" name="requestTitle" required> <br/>
            <label> How much do you offer for your request </label> <br/>
            <input type="number" name="requestExpectedPrice" required><br/>

            <label> Is your expected price negotiable? </label> <br/>
            <select name="isNegotiable" required> 
                <option> Negotiable </option> 
                <option> Not-negotiable </option> 
            </select>  <br/>

            <label> Until when is your request available? </label> <br/>
            <input type="date" name="dueDate" min="<?php echo $today; ?>" max="" value="<?php echo $today;?>" required> <br/>

            <label> More details about your request </label> <br/>
            <textarea name="requestDescription" rows="10" cols="50" required> </textarea> <br/>


            <input type="submit" value="Post">
        </form>

        <!-- pasabuy requests --> 

        <form method="post" action="Backend/CreatePasabuyRequestBackend.php" id="pasabuyRequestForm" class="requestForm" enctype="multipart/form-data">
       
            <input type="hidden" name="formType" value="Pasabuy"> 

            <h2 id="selectedCategory"> Pasabuy Request </h2>
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>">
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="requestCategory" value="pasabuy">
            <input type="hidden" name="datePosted" value="<?php 
                date_default_timezone_set("Asia/Manila");
                echo date("Y-m-d H:i:s",time());?>">

            <label> Sample picture of your requested product </label> <br/>
            <input type="file" name="productImage"required> <br/>

            <label> Product name </label> <br/>
            <input type="text" name="productName"required><br/>
            <label> Product Brand </label> <br/>
            <input type="text" name="productBrand"required><br/>

            <label> How much do you offer for your request </label> <br/>
            <input type="number" name="requestExpectedPrice" required><br/>

            <label> Is your expected price negotiable </label> <br/>
            <select name="isNegotiable" required>
                <option> Negotiable </option> 
                <option> Not-negotiable </option> 
            </select>  <br/>

            <label> Until when is your request available? </label> <br/>
            <input type="date" name="dueDate" min="<?php echo $today; ?>" max="" value="<?php echo $today;?>" required> <br/>

            <label> Additional Notes </label> <br/>
            <textarea name="requestDescription" rows="10" cols="50" required></textarea> <br/>

            <input type="submit" value="Post"> <br/>



        </form>

<!-- other category of requests --> 

        <form method="post" action="Backend/CreateRequestBackend.php" id="otherCategoriesRequestForm" class="requestForm">

            <input type="hidden" name="formType"> 

            <h2 id="selectedCategory"> </h2>
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>"> 
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="datePosted" value="<?php 
                date_default_timezone_set("Asia/Manila");
                echo date("Y-m-d H:i:s",time());?>">

            <label> What category does your request fit in? </label> <br/>
            <input type="text" name="requestCategory" required> <br/>
            <label> Title of your request </label> <br/>
            <input type="text" name="requestTitle" required> <br/>
            <label> How much do you offer for this request </label> <br/>
            <input type="number" name="requestExpectedPrice" required> <br/>

            <label> Is your offer negotiable?  </label> <br/>
            <select name="isNegotiable" required>
                <option value="Negotiable"> Negotiable </option> 
                <option value="Not-negotiable"> Not-negotiable </option> 
            </select>   <br/>

            <label> Until when is your request available? </label> <br/>

            <input type="date" name="dueDate" min="<?php echo $today; ?>" max="" value="<?php echo $today;?>" required> <br/>

            <label> More details about your request </label> <br/>
            <textarea name="requestDescription" rows="10" cols="50" required></textarea> <br/>


            <input type="submit" value="Post"><br/>

        </form>

    </div>





<!--End of main div-->
    </div>
</div>
    



</body>
</html>