<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:Login.php?msg=Please Login First");
    }

    if(isset($_SESSION["userType"])){
        $usertype = $_SESSION["userType"];
        if($usertype != "Responder"){
            header("location: User_Profile.php?msg= Not a Reponder");
        }
    }

    if(isset($_SESSION["specialization"])){
        $specialization = $_SESSION["specialization"];

    }else{
        $specialization = "Home Services";
    }
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
    <link rel="stylesheet" href="css/Responder_CreateService.css">

    <script src="js/NewResponderCreateService.js"> </script>


    <title> Offer a Service </title>
</head>

<body onload="getServices()" id="Responder_CreateServiceBackground">
    
<img src="img/b.jpg" id="BodyBackgroundImg"/>


<!-- forms -->
<div id="regularServicesFormBack" class="formBack">

    <form action="Backend/CreateServiceBackend.php" method="post" enctype="multipart/form-data" id="regularServicesForm" class="ServicePopUp"> 
        <input type="hidden" name="formType" value="regularServices">
        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 
        <input type="hidden" name="serviceCategory" id="serviceCategoryRegular">
            <div id="closeButton" onclick="closeForms()" > X </div>
            <table>
                <tr>
     
                    <td> Service Position </td>
              
                    <td>
                        <select name="servicePosition" id="servicePositionDropDown" onchange="otherPosition()">
                            <option value="Delivery"> Delivery </option>
                        </select><br/>
                    </td>
               
                </tr>

                <tr>
                    <td>
                        Other Service Position:
                    </td>

                    <td>
                        <input name="otherServicePosition" id="otherServicePosition" type="text" placeholder="Please enter"/>
                    </td>
                </tr>

                <tr>
                    <td> Service Fee </td>
                    <td>
                        <input type="number" name="rate">
                    </td> 
                </tr>

                <tr>
                    <td>Training/Certificate</td>
                    <td> <input type="text" name="certification"> </td> <br/>
                </tr>

                <tr>
                    <td>Training/Certificate File </td>
                    <td> <input type="file" name="certificateFile" accept="image/png, image/jpg, image/jpeg"> </td><br/>
                </tr>
        
            </table>
            <br/> <br/> <br/> <br/>
        <input type="submit"/>
    </form>
</div>

<!-- For Pasabuy -->

<div id="pasabuyFormBack" class="formBack">
    <form action="Backend/CreateServiceBackend.php" method="post" enctype="multipart/form-data" id="pasabuyForm" class="ServicePopUp"> 
        <input type="hidden" name="formType" value="pasabuy">
        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 
        <input type="hidden" name="serviceCategory" id="serviceCategory" value="Pasabuy">
        <div id="closeButton" onclick="closeForms()"> X </div>
        
        <h3> Add Item </h3>

        <table>

            <tr> 
                
                <td> Category </td>
                <td>
                    <select name="itemCategory">
                        <option value= "Groceries"> Groceries </option>
                        <option value= "FastFood"> FastFood </option>
                    </select>
                </td>

            </tr>
            <tr>
                <td> Product Name </td>
                <td> <input name="productName" type="text"/></td>
            </tr>

            <tr>
                <td> Product Brand </td>
                <td> <input name="productBrand" type="text"/></td>
            </tr>

            <tr>
                <td> Product Description </td>
                <td> <input name="productDescription" type="text"/></td>
            </tr>

            <tr>
                <td> Product Price </td>
                <td> Php <input name="productPrice" type="number"/></td>
            </tr>

            <tr>
                <td> Delivery fee </td>
                <td> <input type="number" name="rate"> </td> 
            </tr>

            <tr>
                <td> Product Picture </td>
                <td> <input name="productImage" type="file" accept="image/png, image/jpg, image/jpeg"/> </td>
            </tr>


        </table>

        <br/> <br/> <br/>
        <input type="submit">
    </form>
</div>




<!-- For other categories -->
<div class="welcome"><h1>Welcome to </h1><img class="logo" id="Nav-logo" src="img/logo.png"></div>
<div class="welcome"><h3>Create your first service to offer. </h1></div>
<div id="otherCategoriesFormBack" class="formBack" style="display:grid;">
    <form action="Backend/CreateServiceBackend.php" method="post" enctype="multipart/form-data" id="otherCategoriesForm" class="ServicePopUp2"> 

        <input type="hidden" name="formType" value="regularServices">


        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 
       
        

        <center> <h1> <?php echo $specialization; ?> </h1> </center>
        <div id="closeButton" onclick="closeForms()" style="display:none;"> X </div>

            <table id="otherTable">
                <tr style="display:none;">
                    <td> Category </td>
                    <td>
                    <span class="asteriskRequiredField"> * </span>
                    <input type="hidden" name="serviceCategory" id="serviceCategory" value="<?php echo $specialization; ?>" required>
                </td>
                </tr>


                <tr id="newResponderServicePositionDropDownTR">
                    <td  class="column1_td"> Service </td>
                    <td> 
                        <span class="asteriskRequiredField"> * </span>
                      
                        <select name="servicePosition" id="newResponderServicePositionDropDown" onchange="otherPosition()" required>
                            
                        </select>
                   
                    </td>
                </tr>
                <tr id="newResponderOtherServicePositionTR">
                    <td class="column1_td" id="otherServiceTextTD"> Service Title </td>
                    
                    <td td id="otherServiceTextTD1"> 
                        <span class="asteriskRequiredField"> * </span>
                        <input type="text" name="otherServicePosition" id="newResponderOtherServicePosition"/>
                    </td> 
                </tr>
                <!--
                <tr id="newResponderOtherServicePositionTR">
                    <td  class="column1_td" id="otherServiceTextTD"> Other Service </td>
                    <td id="otherServiceTextTD1"> 
                        <span class="asteriskRequiredField"> * </span>  

                        <input type="text" name="otherServicePosition" id="newResponderOtherServicePosition"/>
                    </td>
                </tr>-->

                <tr>
                    <td class="column1_td"> Service Fee </td>
                    
                    <td> 
                        <span class="asteriskRequiredField"> * </span>
                        <input type="number" name="rate" required> 
                    </td> 
                </tr>

                <!--
                <tr>
                    <td class="column1_td">Training/Certificate</td>
                    <td>
                        <span class="asteriskRequiredField"> * </span>
                        <span class="enterNone"> Enter "none" if not applicable </span> 
                         <input type="text" name="certification" required> 
                    </td> 
                </tr>

                <tr>
                    <td class="column1_td">Training/Certificate File </td>
                    <td> <input type="file" name="certificateFile" accept="image/png, image/jpg, image/jpeg"> </td>
                </tr>
                -->

                <tr>
                    <td class="column1_td">Banner Image </td>
                    <td> <input type="file" name="bannerImage" accept="image/*"> </td>
                </tr>
        
            </table>

            <input type="submit"/>
    </form>
</div>


    <?php
    
    if(isset($specialization)){
        echo "<script> getPositions('$specialization') </script> ";
    } else{
        echo "<script> getPositions('Home Services') </script> ";

    }
    ?>




<div id="LoadingScreen"> 

    <div id="loadingDiv"> 
        <h1 id="loadingText"> Loading... </h1>
        <img src="img/loading.gif"  id="loadingImage">
    </div>
  

</div>

<div id="ProcessingScreen"> 

    <div id="loadingDiv"> 
        <h1 id="loadingText"> Processing... </h1>
        <img src="img/processing.gif"  id="loadingImage">
    </div>
  

</div>


</body>
</html>