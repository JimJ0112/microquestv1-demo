<?php


class DBHandler {
// properties
    private $dbservername;
    private $dbusername;
    private $dbpassword;
    private $dbname;
    private $dbconnection;


// constructor

function __construct(){
    
    /* Localhost connection */
    
    
    $this->dbservername = "localhost:3307";
    $this->dbusername = "root";
    $this->dbpassword = "";
    $this->dbname = "microquestdbv2";
    

    

    /* remote database connection */
    
    /* 
    $this->dbservername = "remotemysql.com";
    $this->dbusername = "Ze2pK93XLv";
    $this->dbpassword = "ytsYYcZNGw";
    $this->dbname = "Ze2pK93XLv";
   */

  /* remote database connection 2 */
  
    /*
    $this->dbservername = "containers-us-west-126.railway.app:5950";
    $this->dbusername = "root";
    $this->dbpassword = "1u9IP95GW0pSguFi9Eam";
    $this->dbname = "railway";
    */

    $this-> dbconnection = mysqli_connect($this->dbservername,$this->dbusername,$this->dbpassword,$this->dbname);
 
  

    // for error message
    if (mysqli_connect_errno()) {
        $errorlog = "MySQL Error: " . mysqli_connect_errno();
        exit($errorlog);
    }
}


// destructor

function __destruct(){

    if(isset($this->dbconnection)){
        mysqli_close($this->dbconnection);
        
    }

}
// methods

//to run sql queries
public function runGET($query){

    $query = $query;

	
    $result = mysqli_query($this->dbconnection, $query);
    $row = mysqli_fetch_assoc($result);
   
    return $row;

}


public function runInsert($query){

    $query = $query;

	
    $result = mysqli_query($this->dbconnection, $query);

   
    return $result;

}


// for registration
public function registerUser($userType,	$userName, $userEmail,$userPassword,$userPhoto,$firstName,$lastName,$userGender,$education,$birthDate,$houseNo,$street,$baranggay,$municipality,$idType,$idFile,$idNumber,$idExpiration,$otherIDType,$otherIDFile,$otherIDNumber,$otheridExpiration,$idFileType,$specialization = null){

    $tablename = "userprofile";
    $userID = 0;
    $userStatus = 'not verified';
    $userType  = mysqli_real_escape_string($this->dbconnection, $userType);
    $userName  = mysqli_real_escape_string($this->dbconnection, $userName);
    $userEmail = mysqli_real_escape_string($this->dbconnection, $userEmail);
    $userPassword = mysqli_real_escape_string($this->dbconnection, $userPassword);
    $userPhoto = mysqli_real_escape_string($this->dbconnection, $userPhoto);
    $firstName = mysqli_real_escape_string($this->dbconnection, $firstName);
    $lastName  = mysqli_real_escape_string($this->dbconnection, $lastName );
    $userGender= mysqli_real_escape_string($this->dbconnection, $userGender);
    $education = mysqli_real_escape_string($this->dbconnection, $education);
    $birthDate = mysqli_real_escape_string($this->dbconnection, $birthDate);
    $houseNo   = mysqli_real_escape_string($this->dbconnection, $houseNo);
    $street    = mysqli_real_escape_string($this->dbconnection, $street);
    $baranggay = mysqli_real_escape_string($this->dbconnection, $baranggay);
    $municipality = mysqli_real_escape_string($this->dbconnection, $municipality);
    $idType    = mysqli_real_escape_string($this->dbconnection, $idType);
    $idFile    = mysqli_real_escape_string($this->dbconnection, $idFile);
    $idNumber  = mysqli_real_escape_string($this->dbconnection, $idNumber);
    $idExpiration = mysqli_real_escape_string($this->dbconnection, $idExpiration);
    $otherIDType = mysqli_real_escape_string($this->dbconnection, $otherIDType);
    $otherIDFile = mysqli_real_escape_string($this->dbconnection, $otherIDFile);
    $otherIDNumber = mysqli_real_escape_string($this->dbconnection, $otherIDNumber);
    $otheridExpiration = mysqli_real_escape_string($this->dbconnection, $otheridExpiration);
    $idFileType = mysqli_real_escape_string($this->dbconnection, $idFileType);

    if(isset($specialization)){
    
        $query = "INSERT INTO $tablename() VALUES ($userID, '$userType','$userStatus','$userName', '$userEmail','$userPassword','$userPhoto','$firstName','$lastName','$userGender','$education','$birthDate','$houseNo','$street','$baranggay','$municipality','$idType','$idFile','$idNumber','$idExpiration','$otherIDType','$otherIDFile','$otherIDNumber','$otheridExpiration','$idFileType','$specialization')";
    } else{
        $query = "INSERT INTO $tablename() VALUES ($userID, '$userType','$userStatus','$userName', '$userEmail','$userPassword','$userPhoto','$firstName','$lastName','$userGender','$education','$birthDate','$houseNo','$street','$baranggay','$municipality','$idType','$idFile','$idNumber','$idExpiration','$otherIDType','$otherIDFile','$otherIDNumber','$otheridExpiration','$idFileType')";
    }
	

   
    return mysqli_query($this->dbconnection, $query);

}


// for registration of admins

public function registerAdmin($adminusername,$adminemail,$adminpassword,$admintype){
   
    $tablename = "admins";
    $adminusername = mysqli_real_escape_string($this->dbconnection, $adminusername);
    $adminemail = mysqli_real_escape_string($this->dbconnection, $adminemail);
    $adminpassword = mysqli_real_escape_string($this->dbconnection, $adminpassword);
    $admintype = mysqli_real_escape_string($this->dbconnection, $admintype);





    $query = "INSERT INTO $tablename() VALUES (0,'$adminusername','$adminemail','$adminpassword','$admintype')";
    return mysqli_query($this->dbconnection, $query);

}

// for login

public function verifyuser($email,$password){
    $tablename = "userprofile";
    $email = mysqli_real_escape_string($this->dbconnection, $email);
    $password = mysqli_real_escape_string($this->dbconnection, $password);

    $query = "SELECT * FROM $tablename WHERE userEmail = '$email' AND userPassword='$password'";
    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }
  

}


public function firstConversation($myID,$userID){
    $tablename = "conversations";
    $myID = mysqli_real_escape_string($this->dbconnection, $myID);
    $userID = mysqli_real_escape_string($this->dbconnection, $userID);

    $query = "SELECT * FROM $tablename WHERE senderID = $myID AND recieverID=$userID OR senderID = $userID AND recieverID=$myID";
   
    //$query = "SELECT messages.*, sender.userName, sender.userPhoto, reciever.userName, reciever.userPhoto FROM messages INNER JOIN userprofile as sender ON(messages.messageSender = sender.userID) INNER JOIN userprofile as reciever ON(messages.messageReciever = reciever.userID) WHERE messages.messageSender = $myID AND messages.messageReciever=$userID OR messages.messageSender = $userID AND messages.messageReciever=$myID ";
    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
        return 1;
    } else {
        return 0;
    }
  

}


public function newConversation($senderID,$recieverID,$latestMessage,$date,$conversationStatus){
    //	conversationID	senderID	recieverID	latestMessage	latestMessageDate	conversationStatus	

    $senderID = mysqli_real_escape_string($this->dbconnection, $senderID);
    $recieverID = mysqli_real_escape_string($this->dbconnection, $recieverID);
    $latestMessage = mysqli_real_escape_string($this->dbconnection, $latestMessage);
    $date = mysqli_real_escape_string($this->dbconnection, $date);
    $conversationStatus = mysqli_real_escape_string($this->dbconnection,$conversationStatus);    

    $query = "INSERT INTO conversations VALUES(0,'$senderID','$recieverID','$latestMessage','$date','$conversationStatus');";
    $result = mysqli_query($this->dbconnection, $query);

    return $result;
}



// for admin login
public function verifyadmin($email,$password){
    $tablename = "admin";
    $email = mysqli_real_escape_string($this->dbconnection, $email);
    $password = mysqli_real_escape_string($this->dbconnection, $password);

    $query = "SELECT * FROM $tablename WHERE adminEmail = '$email' AND adminPassword='$password'";
    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }
  

}


// check if exists
public function exists($tablename,$column,$name){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $name = mysqli_real_escape_string($this->dbconnection, $name);

    $query = "SELECT * FROM $tablename WHERE $column = '$name'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }
  
}

// check if exists
public function existsLike($tablename,$column,$name){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $name = mysqli_real_escape_string($this->dbconnection, $name);

    $query = "SELECT * FROM $tablename WHERE $column LIKE '%$name'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }
  
}

/*------------------------------------------GET FUNCTIONS---------------------------------------------- */
// get data, 1 column only
public function getData($tablename,$column,$condition,$name){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $name = mysqli_real_escape_string($this->dbconnection, $name);

    $query = "SELECT $name FROM $tablename WHERE $column = '$condition'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
    
        
        $row = mysqli_fetch_array($result);
        return $row[$name];
        
              
       /*
       $row = mysqli_fetch_field($result);
       echo mysqli_error($this->dbconnection);
       return $row;
       */



    } else {return "failed to fetch";}

        
  
}



// get data, 1 column only
public function getCount($tablename,$column,$condition,$name){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $name = mysqli_real_escape_string($this->dbconnection, $name);

    $query = "SELECT COUNT ($name) FROM $tablename WHERE $column = '$condition'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
    
        
        $row = mysqli_fetch_array($result);
        return $row[$name];
        
              
 



    } else {return "failed to fetch";}

        
  
}

// get image data from database
public function getImage($tablename,$column,$condition,$name){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $name = mysqli_real_escape_string($this->dbconnection, $name);

    $query = "SELECT $name FROM $tablename WHERE $column = '$condition'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
       
        $row = mysqli_fetch_array($result);

  
        $file = 'data:image/image/png;base64,'.base64_encode($row[0]);
        $row[0] = $file;
            

        //$data[] = $row;
        return $file;

    } else {return "failed to fetch";}

        
  
}

// get Rows 
public function getRow($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($orderby)){
        $query = "SELECT * FROM $tablename WHERE $column = '$condition' ORDER BY $orderby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                /*
                $file = 'data:image/image/png;base64,'.base64_encode($row['bannerimage']);
                $row['bannerimage'] = $file;
                */

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// check if user is reported
public function checkUserReported($tablename,$column,$condition,$column1,$condition1){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $column1 = mysqli_real_escape_string($this->dbconnection, $column1);
    $condition1 = mysqli_real_escape_string($this->dbconnection, $condition1);
    
   

        $query = "SELECT * FROM $tablename WHERE $column = $condition AND $column1 = '$condition1'";
    

    $result = mysqli_query($this->dbconnection, $query) or die;
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       
        return true;
        

    } else {
        return false;
    }

        
  
}


// check if user is reported
public function checkUserRestricted($tablename,$column,$condition,$column1,$condition1){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $column1 = mysqli_real_escape_string($this->dbconnection, $column1);
    $condition1 = mysqli_real_escape_string($this->dbconnection, $condition1);
    
   

        $query = "SELECT * FROM $tablename WHERE $column = $condition AND $column1 = '$condition1'";
    

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                



                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


function checkIfUserReported($userID){
    $userID = $userID;


        // check if user is reported
        $tablename = "reportsinfo";
        $column = "reportedAccountID";
        $condition = $userID;
        $column1 = "reportStatus";
        $condition1 = "Banned";

        $isBanned = $DBHandler->checkUserReported($tablename,$column,$condition,$column1,$condition1);
               
    
        $tablename = "reportsinfo";
        $column = "reportedAccountID";
        $condition = $userID;
        $column1 = "reportStatus";
        $condition1 = "Restricted";

    
        $results =$DBHandler-> checkUserRestricted($tablename,$column,$condition,$column1,$condition1);

        if($results !== "failed to fetch"){
            $results = json_encode($results);
            $results = json_decode($results,true);

            $restrictDuration =  $results[0]['restrictDuration'];
            $isRestricted = true;

        } else {
             $isRestricted = false;
        }


}


// get Categories
public function getReviewsWithRatings($userID){
    $userID = mysqli_real_escape_string($this->dbconnection, $userID);

    
   
    /*

        $query = "SELECT feedbacks.revieweeID as feedbacksReviewee,feedbacks.reviewerID as feedbacksReviewer, feedbacks.transactionID as feedbacksTransactionID, feedbacks.serviceID, feedbacks.requestID, feedbacks.feedback,rating.reviewerID as ratingReviewerID, rating.revieweeID as ratingRevieweeID, rating.transactionID as ratingTransactionID, rating.rating1star, rating.rating2star,rating.rating3star,rating.rating4star,rating.rating5star 
        FROM feedbacks 
        INNER JOIN rating
        ON feedbacks.transactionID = rating.transactionID
        WHERE feedbacks.revieweeID = $userID";
    */


    /*
    $query= "SELECT feedbacks.revieweeID as feedbacksReviewee,feedbacks.feedbackID,feedbacks.reviewerID as feedbacksReviewer, feedbacks.transactionID as feedbacksTransactionID, feedbacks.serviceID, feedbacks.requestID, feedbacks.feedback,rating.reviewerID as ratingReviewerID, rating.revieweeID as ratingRevieweeID, rating.transactionID as ratingTransactionID, rating.rating1star, rating.rating2star,rating.rating3star,rating.rating4star,rating.rating5star,
    userprofile.userID as userprofileReviewerID, userprofile.userID as userprofileRevieweeID, userprofile.userName as ReviewerUserName, userprofile.userName as RevieweeUserName
    
            FROM feedbacks 
            INNER JOIN rating
              ON (feedbacks.transactionID = rating.transactionID)
            INNER JOIN userprofile
                ON feedbacks.reviewerID = userprofile.userID
            WHERE feedbacks.revieweeID = $userID ORDER BY feedbacks.feedbackID DESC";
    */

    /*
    $query= "SELECT feedbacks.revieweeID as feedbacksReviewee,feedbacks.feedbackID,feedbacks.reviewerID as feedbacksReviewer, feedbacks.transactionID as feedbacksTransactionID, feedbacks.serviceID, feedbacks.requestID, feedbacks.feedback,rating.ratingID,rating.reviewerID as ratingReviewerID, rating.revieweeID as ratingRevieweeID, rating.transactionID as ratingTransactionID, rating.rating1star, rating.rating2star,rating.rating3star,rating.rating4star,rating.rating5star,
    userprofile.userID as userprofileReviewerID, userprofile.userID as userprofileRevieweeID, userprofile.userName as ReviewerUserName, userprofile.userName as RevieweeUserName, servicesinfo.serviceID, servicesinfo.serviceCategory, servicesinfo.servicePosition
    
            FROM feedbacks 
            INNER JOIN rating
              ON (feedbacks.transactionID = rating.transactionID)
            INNER JOIN userprofile
                ON feedbacks.reviewerID = userprofile.userID
            INNER JOIN servicesinfo
                ON feedbacks.serviceID = servicesinfo.serviceID
            WHERE feedbacks.revieweeID = $userID GROUP BY rating.ratingID DESC";
        
    */

    $query= "SELECT feedbacks.revieweeID as feedbacksReviewee,feedbacks.feedbackID,feedbacks.reviewerID as feedbacksReviewer, feedbacks.transactionID as feedbacksTransactionID, feedbacks.serviceID, feedbacks.requestID, feedbacks.feedback,rating.ratingID,rating.reviewerID as ratingReviewerID, rating.revieweeID as ratingRevieweeID, rating.transactionID as ratingTransactionID, rating.rating1star, rating.rating2star,rating.rating3star,rating.rating4star,rating.rating5star,
    userprofile.userID as userprofileReviewerID, userprofile.userID as userprofileRevieweeID, userprofile.userName as ReviewerUserName, userprofile.userName as RevieweeUserName, servicesinfo.serviceID, servicesinfo.serviceCategory, servicesinfo.servicePosition
    
            FROM feedbacks 
            INNER JOIN rating
              ON (feedbacks.transactionID = rating.transactionID)
            INNER JOIN userprofile
                ON feedbacks.reviewerID = userprofile.userID
            INNER JOIN servicesinfo
                ON feedbacks.serviceID = servicesinfo.serviceID
            WHERE feedbacks.revieweeID = $userID GROUP BY feedbacks.transactionID DESC";
            
    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                


                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// get Categories
public function getServiceReviewsWithRatings($serviceID){
    $userID = mysqli_real_escape_string($this->dbconnection,$serviceID);



    $query= "SELECT feedbacks.revieweeID as feedbacksReviewee,feedbacks.feedbackID,feedbacks.reviewerID as feedbacksReviewer, feedbacks.transactionID as feedbacksTransactionID, feedbacks.serviceID, feedbacks.requestID, feedbacks.feedback,rating.ratingID,rating.reviewerID as ratingReviewerID, rating.revieweeID as ratingRevieweeID, rating.transactionID as ratingTransactionID, rating.rating1star, rating.rating2star,rating.rating3star,rating.rating4star,rating.rating5star,
    userprofile.userID as userprofileReviewerID, userprofile.userPhoto as userprofileReviewerPhoto, userprofile.userID as userprofileRevieweeID, userprofile.userName as ReviewerUserName, userprofile.userName as RevieweeUserName, servicesinfo.serviceID, servicesinfo.serviceCategory, servicesinfo.servicePosition
    
            FROM feedbacks 
            INNER JOIN rating
              ON (feedbacks.transactionID = rating.transactionID)
            INNER JOIN userprofile
                ON feedbacks.reviewerID = userprofile.userID
            INNER JOIN servicesinfo
                ON feedbacks.serviceID = servicesinfo.serviceID
            WHERE feedbacks.serviceID = $serviceID GROUP BY feedbacks.transactionID DESC";
            
    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userprofileReviewerPhoto']);
                $row['userprofileReviewerPhoto'] = $file;
                

                $data[] = $row;


    
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get Categories
public function getMyCart($requestorID){
  
    $requestorID = mysqli_real_escape_string($this->dbconnection, $requestorID);

    
   
   
        $query = "SELECT cart.cartID,
        cart.productID,
        cart.serviceID,
        cart.responderID,
        cart.requestorID,
        cart.dateAssigned,
        cart.quantity,
        cart.productStatus,
        products.productID,	
        products.servicesInfoID,
        products.productCategory,
        products.productName,	
        products.productBrand,	
        products.productDescription,	
        products.productPrice,	
        products.productImage,	
        products.responderID	,
        products.itemStatus,	
        products.deliveryRate
        
        FROM `cart` 
        INNER JOIN products 
        ON cart.productID = products.productID
         
         WHERE cart.requestorID = $requestorID
         AND productStatus = 'Available';";
    

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['productImage']);
                $row['productImage'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get Categories
public function getCategories($tablename,$column,$condition,$groupby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($groupby)){
        $query = "SELECT * FROM $tablename WHERE $column = '$condition' GROUP BY $groupby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                $row['certificateFile'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

public function getRequestCategories($tablename,$column,$condition,$groupby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($groupby)){
        $query = "SELECT requestCategory FROM $tablename WHERE $column = '$condition' GROUP BY $groupby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                /*
                $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                $row['certificateFile'] = $file;
                */

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// getting user row from users table
public function getUserRow($tablename,$column,$condition){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
   
   
    $query = "SELECT * FROM $tablename WHERE $column = '$condition'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    $file;


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                
                //if(strpos($row['ID_FILETYPE'],"image")){
                    $file = 'data:image/image/png;base64,'.base64_encode($row['idFile']);
                    $row['idFile'] = $file;
                /*} else {
                    $file = 'data:application/pdf;base64,'.base64_encode($row['IDCARD']);
                    $row['IDCARD'] = $file;
                    
                  } 
                */

                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;

                $file = 'data:image/image/png;base64,'.base64_encode($row['otherIDFile']);
                $row['otherIDFile'] = $file;

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// get data, 1 column only
public function getProfilePic($tablename,$column,$condition,$name){

    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $name = mysqli_real_escape_string($this->dbconnection, $name);

    $query = "SELECT $name FROM $tablename WHERE $column = '$condition'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){
       
        $row = mysqli_fetch_array($result);
        $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
        $row['userPhoto'] = $file;


        return $row[$name];

    } else {return "failed to fetch";}

        
  
}

// get Products row 
public function getProducts($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($orderby)){
        $query = "SELECT * FROM $tablename WHERE $column = '$condition' ORDER BY $orderby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['productImage']);
                $row['productImage'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get Products row 
public function getMyProducts($tablename,$responderID){

    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    //$column = mysqli_real_escape_string($this->dbconnection, $column);
   // $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $responderID = mysqli_real_escape_string($this->dbconnection,$responderID);
    
   

       // $query = "SELECT * FROM $tablename WHERE $column = '$condition' AND responderID = $responderID";
     $query = "SELECT * FROM $tablename WHERE  responderID = $responderID";
    


    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['productImage']);
                $row['productImage'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get Products row 
public function getProductsResponders($municipality,$column,$condition,$orderby = null){
   
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $municipality = mysqli_real_escape_string($this->dbconnection,$municipality);
    
   
    if(isset($orderby)){
        $query = "SELECT 
        userprofile.userID,
        userprofile.userName, 
        userprofile.municipality,
        userprofile.userType,
        userprofile.userPhoto,
        products.productName,
        products.productDescription,
        products.productPrice,
        products.deliveryRate
        
        FROM products
        INNER JOIN userprofile
        
        
        ON products.responderID = 
        userprofile.userID
        
        WHERE '$column' = '$condition'
        AND userprofile.municipality = '$municipality'
        AND products.responderID = userprofile.userID
        ORDER BY $orderby
        ";

    }else{
        $query = "SELECT 
        userprofile.userID,
        userprofile.userName, 
        userprofile.userPhoto,
        userprofile.municipality,
        userprofile.userType,
        products.productName,
        products.productDescription,
        products.productPrice,
        products.deliveryRate
        
        FROM products
        INNER JOIN userprofile
        
        
        ON products.responderID = 
        userprofile.userID
        
        WHERE $column = '$condition'
        AND userprofile.municipality = '$municipality'
        AND products.responderID = userprofile.userID
        ";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                
         
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


public function getAllProductsResponders($municipality,$column,$condition,$orderby = null){
   
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $municipality = mysqli_real_escape_string($this->dbconnection,$municipality);
    
   
    if(isset($orderby)){
        $query = "SELECT 
        userprofile.userID,
        userprofile.userName, 
        userprofile.userPhoto,
        userprofile.municipality,
        userprofile.userType,
        products.productName,
        products.productDescription,
        products.productPrice,
        products.deliveryRate
        
        FROM products
        INNER JOIN userprofile
        
        
        ON products.responderID = 
        userprofile.userID
        
        WHERE '$column' = '$condition'
        AND userprofile.municipality != '$municipality'
        AND products.responderID = userprofile.userID
        ORDER BY $orderby
        ";
        
    }else{
        $query = "SELECT 
        userprofile.userID,
        userprofile.userName, 
        userprofile.userPhoto,
        userprofile.municipality,
        userprofile.userType,
        products.productName,
        products.productDescription,
        products.productPrice,
        products.deliveryRate
        
        FROM products
        INNER JOIN userprofile
        
        
        ON products.responderID = 
        userprofile.userID
        
        WHERE $column = '$condition'
        AND userprofile.municipality != '$municipality'
        AND products.responderID = userprofile.userID
        ";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                

                
         
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// get Services row 
public function getServices($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
// 09/06/2022 1:28am nilagyan ko muna ng servicesinfo.serviceStatus = 'Active', not sure if that's a good idea tho
    
   
    if(isset($orderby)){
        $query = "SELECT * FROM $tablename WHERE $column = '$condition' AND serviceStatus = 'Active'  GROUP BY $orderby";
       //$query = "SELECT * FROM $tablename WHERE $column = '$condition' AND serviceStatus = 'Active'";
    
       //$query = "SELECT DISTINCT servicePosition, bannerImage,certificateFile FROM $tablename WHERE $column = '$condition' AND serviceStatus = 'Active'";

    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                $row['certificateFile'] = $file;
                
                

                $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                $row['bannerImage'] = $file;

                $data[] = $row;
                
             
            }
            echo mysqli_error($this->dbconnection);
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get Services row 
public function getServiceInfo($tablename,$column,$condition){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);

   

        $query = "SELECT * FROM $tablename WHERE $column = '$condition' AND serviceStatus = 'Active'";



    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                $row['certificateFile'] = $file;
                
                

                $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                $row['bannerImage'] = $file;

                $data[] = $row;
                
             
            }
            echo mysqli_error($this->dbconnection);
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get Services row 
public function getServicesForSpecialization($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
// 09/06/2022 1:28am nilagyan ko muna ng servicesinfo.serviceStatus = 'Active', not sure if that's a good idea tho
    
   
    if(isset($orderby)){
        $query = "SELECT * FROM $tablename WHERE $column = '$condition' GROUP BY $orderby";
       // $query = "SELECT * FROM $tablename WHERE $column = '$condition'";

    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                $row['certificateFile'] = $file;
                

                $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                $row['bannerImage'] = $file;

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// get other Services row 
public function getOtherServices(){
    $tablename = "servicesinfo";
    $column = "serviceCategory";
 
    
// 09/06/2022 1:28am nilagyan ko muna ng servicesinfo.serviceStatus = 'Active', not sure if that's a good idea tho
   
    // 
    $query = "SELECT * FROM $tablename WHERE $column != 'Home Service' AND $column !='Computer related work' AND $column !='Pasabuy' AND serviceStatus = 'Active' GROUP BY serviceCategory";
    //$query = "SELECT * FROM $tablename WHERE $column != 'Home Service' AND $column !='Computer related work' AND $column !='Pasabuy' AND serviceStatus = 'Active'";
    //$query = "SELECT * FROM $tablename WHERE ($column != 'Home Service' AND $column !='Computer related work' AND $column !='Pasabuy' AND serviceStatus = 'Active') GROUP BY servicesinfo.serviceCategory";

   // $query = "SELECT DISTINCT serviceCategory, bannerImage FROM $tablename WHERE serviceCategory != 'Home Service' AND serviceCategory  !='Computer related work' AND serviceCategory !='Pasabuy' AND serviceStatus = 'Active'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                $row['certificateFile'] = $file;
                
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                $row['bannerImage'] = $file;

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// get user services
// 2:25 am nilagyan ko ng serviceCategory != 'Pasabuy' condition to

public function getMyServices($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($orderby)){
        $query = "SELECT * FROM $tablename WHERE $column = '$condition' GROUP BY $orderby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition' AND serviceCategory != 'Pasabuy'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                $row['certificateFile'] = $file;
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                $row['bannerImage'] = $file;

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}




// get responders based on their services and location


public function getResponders($position,$municipality,$serviceCategory){

    $position= mysqli_real_escape_string($this->dbconnection, $position);
    $municipality = mysqli_real_escape_string($this->dbconnection, $municipality);
    $serviceCategory = mysqli_real_escape_string($this->dbconnection, $serviceCategory);

    
   
// 29/05/2022 9:51pm nilagyan ko muna ng group by tong query na to para hindi dumoble, need to check out later - jim 
// 09/06/2022 1:28am nilagyan ko muna ng servicesinfo.serviceStatus = 'Active', not sure if that's a good idea tho
   
    $query = "SELECT servicesinfo.responderID, userprofile.userName,userprofile.municipality,userprofile.userPhoto, servicesinfo.rate, servicesinfo.serviceCategory, servicesinfo.serviceID FROM userprofile INNER JOIN servicesinfo ON servicesinfo.responderID = userprofile.userID WHERE servicesinfo.servicePosition = '$position' AND userprofile.municipality = '$municipality' AND userprofile.userType = 'Responder' AND servicesinfo.serviceCategory = '$serviceCategory' AND servicesinfo.serviceStatus = 'Active' GROUP BY userprofile.userID";
   
   // $query = "SELECT servicesinfo.responderID, userprofile.userName,userprofile.municipality,userprofile.userPhoto, servicesinfo.rate, servicesinfo.serviceCategory, servicesinfo.serviceID FROM userprofile INNER JOIN servicesinfo ON servicesinfo.responderID = userprofile.userID WHERE servicesinfo.servicePosition = '$position' AND userprofile.municipality = '$municipality' AND userprofile.userType = 'Responder' AND servicesinfo.serviceCategory = '$serviceCategory' AND servicesinfo.serviceStatus = 'Active'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    $file;
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;

                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get responders based on their services 


public function getAvailableResponders($position,$municipality,$category){

    $position= mysqli_real_escape_string($this->dbconnection, $position);
    $municipality = mysqli_real_escape_string($this->dbconnection, $municipality);
    $category= mysqli_real_escape_string($this->dbconnection, $category);

    
   
// 29/05/2022 9:51pm nilagyan ko muna ng group by tong query na to para hindi dumoble, need to check out later - jim 
// 09/06/2022 1:28am nilagyan ko muna ng servicesinfo.serviceStatus = 'Active', not sure if that's a good idea tho
$query = "SELECT servicesinfo.responderID, userprofile.userName,userprofile.userPhoto,userprofile.municipality, servicesinfo.rate, servicesinfo.serviceID FROM userprofile INNER JOIN servicesinfo ON servicesinfo.responderID = userprofile.userID WHERE servicesinfo.servicePosition = '$position' AND userprofile.municipality != '$municipality' AND userprofile.userType = 'Responder' AND servicesinfo.serviceCategory = '$category' AND servicesinfo.serviceStatus = 'Active' GROUP BY userprofile.userID";
//$query = "SELECT  servicesinfo.responderID, userprofile.userName,userprofile.userPhoto,userprofile.municipality, servicesinfo.rate, servicesinfo.serviceID FROM userprofile INNER JOIN servicesinfo ON servicesinfo.responderID = userprofile.userID WHERE servicesinfo.servicePosition = '$position' AND userprofile.municipality != '$municipality' AND userprofile.userType = 'Responder' AND servicesinfo.serviceCategory = '$category' AND servicesinfo.serviceStatus = 'Active'";
   

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    $file;
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                


                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get responders based on their services 


public function getAllAvailableResponders($position,$category){

    $position= mysqli_real_escape_string($this->dbconnection, $position);
    //$municipality = mysqli_real_escape_string($this->dbconnection, $municipality);
    $category= mysqli_real_escape_string($this->dbconnection, $category);

    
   
// 29/05/2022 9:51pm nilagyan ko muna ng group by tong query na to para hindi dumoble, need to check out later - jim 
// 09/06/2022 1:28am nilagyan ko muna ng servicesinfo.serviceStatus = 'Active', not sure if that's a good idea tho
$query = "SELECT servicesinfo.responderID, userprofile.userName,userprofile.userPhoto,userprofile.municipality, servicesinfo.rate, servicesinfo.serviceID FROM userprofile INNER JOIN servicesinfo ON servicesinfo.responderID = userprofile.userID WHERE servicesinfo.servicePosition = '$position' AND userprofile.userType = 'Responder' AND servicesinfo.serviceCategory = '$category' AND servicesinfo.serviceStatus = 'Active' GROUP BY userprofile.userID";
   
//$query = "SELECT DISTINCT CASE WHEN servicesinfo.responderID, userprofile.userName,userprofile.userPhoto,userprofile.municipality, servicesinfo.rate, servicesinfo.serviceID FROM userprofile INNER JOIN servicesinfo ON servicesinfo.responderID = userprofile.userID WHERE servicesinfo.servicePosition = '$position' AND userprofile.userType = 'Responder' AND servicesinfo.serviceCategory = '$category' AND servicesinfo.serviceStatus = 'Active'";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    $file;
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                


                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}



// get product Categories row 
public function getProductCategories(){
    $tablename = "products";
    $column = "serviceCategory";
 
    
   
// 29/05/2022 9:51pm nilagyan ko muna ng group by tong query na to para hindi dumoble, need to check out later - jim 
    $query = "SELECT * FROM $tablename  GROUP BY productCategory";


    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['productImage']);
                $row['productImage'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}





// get Requests
public function getRequests($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($orderby)){
        $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' AND requestStatus = 'active' ORDER BY $orderby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// get All Nearest Requests
public function getNearestAllRequests($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($orderby)){
       // $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' AND requestStatus = 'active' ORDER BY $orderby";
        $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' ORDER BY $orderby";

    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// get Nearest Requests
public function getNearestRequests($tablename,$column,$condition,$category,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $category  = mysqli_real_escape_string($this->dbconnection,$category);
   
    if(isset($orderby)){
       // $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' AND requestStatus = 'active' ORDER BY $orderby";
        $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' AND $tablename.requestCategory = '$category' ORDER BY $orderby";

    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}



// get other Requests
public function getOtherRequests(){
    $tablename = "requestsinfo";

    
   
    
    $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE( requestCategory != 'Home Service' AND  requestCategory != 'Computer related work' AND  requestCategory != 'Pasabuy')AND requestStatus = 'active'";
   

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


// get other Requests
public function getPasabuyRequests(){
    $tablename = "pasabuyrequests";

    
   
    
    $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE requestStatus = 'Active';";
   

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                
                $file = 'data:image/image/png;base64,'.base64_encode($row['productImage']);
                $row['productImage'] = $file;

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}



// get My Requests
public function getMyRequests($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($orderby)){
        $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' ORDER BY $orderby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                //$file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                //$row['userPhoto'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

// getting nearest requests
function nearestRequests($tablename,$column,$condition,$orderby = null){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    
   
    if(isset($orderby)){
        $query = "SELECT $tablename.*,userprofile.userName,userprofile.municipality,userprofile.userPhoto FROM $tablename INNER JOIN userprofile ON $tablename.requestorID = userprofile.userID WHERE $column = '$condition' ORDER BY $orderby";
    }else{
        $query = "SELECT * FROM $tablename WHERE $column = '$condition'";
    }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['userPhoto']);
                $row['userPhoto'] = $file;
                

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}



// getting Messages from messages table
/*

public function getUserMessages($ID,$groupBy=null){
    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $tablename = "messages";
    $column = "messageReciever";
    $column1 = "messageSender";
   

   
   if(isset($groupBy)){


        $query = "select messages.*,sender.userID, sender.userPhoto as senderUserPhoto, sender.userName as senderUserName,reciever.userID, reciever.userPhoto as recieverUserPhoto, reciever.userName 
        FROM  $tablename
        INNER JOIN userprofile as sender ON(sender.userID = messages.messageSender)
        INNER JOIN userprofile as reciever ON(reciever.userID = messages.messageReciever)
        WHERE (messageSender =  $ID  OR messageReciever =  $ID ) 
        AND firstchat = 1 GROUP BY messageSender,messageReciever ORDER BY messageID ;";

   } else {


       $query = "select messages.*,sender.userID, sender.userPhoto as senderUserPhoto, sender.userName as senderUserName,reciever.userID, reciever.userPhoto as recieverUserPhoto, reciever.userName 
       FROM  $tablename
       INNER JOIN userprofile as sender ON(sender.userID = messages.messageSender)
       INNER JOIN userprofile as reciever ON(reciever.userID = messages.messageReciever)
       WHERE (messageSender =  $ID  OR messageReciever =  $ID ) 
       AND firstchat = 1 GROUP BY messageSender,messageReciever ORDER BY messageID ;";
   }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    $file;


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                
                //if(strpos($row['ID_FILETYPE'],"image")){

                    if(isset($row['messageFile'])){
                    $file = 'data:image/image/png;base64,'.base64_encode($row['messageFile']);
                    $row['messageFile'] = $file;
                    }
  
                  
                 $file = 'data:image/image/png;base64,'.base64_encode($row["recieverUserPhoto"]);

                 $row['recieverUserPhoto'] = $file;

                 $file = 'data:image/image/png;base64,'.base64_encode($row["senderUserPhoto"]);

                 $row['senderUserPhoto'] = $file;



                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

*/



public function getUserMessages($ID,$groupBy=null){
    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $tablename = "conversations";

   

   
   if(isset($groupBy)){


    /*
        $query = "select $tablename.*,sender.userID, sender.userPhoto as senderUserPhoto, sender.userName as senderUserName,reciever.userID, reciever.userPhoto as recieverUserPhoto, reciever.userName as recieverUserName 
        FROM $tablename
        INNER JOIN userprofile as sender ON(sender.userID = conversations.senderID) 
        INNER JOIN userprofile as reciever ON(reciever.userID = conversations.recieverID) 
        WHERE (senderID = $ID OR recieverID = $ID ) ORDER BY latestMessageDate DESC;";
    */
        $query = "select $tablename.*,sender.userID, sender.userPhoto as senderUserPhoto, sender.userName as senderUserName,reciever.userID, reciever.userPhoto as recieverUserPhoto, reciever.userName as recieverUserName 
        FROM $tablename
        INNER JOIN userprofile as sender ON(sender.userID = conversations.senderID) 
        INNER JOIN userprofile as reciever ON(reciever.userID = conversations.recieverID) 
        WHERE (senderID = $ID OR recieverID = $ID )";

   } else {


    /*
        $query = "select $tablename.*,sender.userID, sender.userPhoto as senderUserPhoto, sender.userName as senderUserName,reciever.userID, reciever.userPhoto as recieverUserPhoto, reciever.userName as recieverUserName 
        FROM $tablename
        INNER JOIN userprofile as sender ON(sender.userID = conversations.senderID) 
        INNER JOIN userprofile as reciever ON(reciever.userID = conversations.recieverID) 
        WHERE (senderID = $ID OR recieverID = $ID ) ORDER BY latestMessageDate DESC;";
    */

    $query = "select $tablename.*,sender.userID, sender.userPhoto as senderUserPhoto, sender.userName as senderUserName,reciever.userID, reciever.userPhoto as recieverUserPhoto, reciever.userName as recieverUserName 
    FROM $tablename
    INNER JOIN userprofile as sender ON(sender.userID = conversations.senderID) 
    INNER JOIN userprofile as reciever ON(reciever.userID = conversations.recieverID) 
    WHERE (senderID = $ID OR recieverID = $ID ) ORDER BY latestMessageDate DESC";

    
   }

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    $file;


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                
                //if(strpos($row['ID_FILETYPE'],"image")){

                    if(isset($row['messageFile'])){
                    $file = 'data:image/image/png;base64,'.base64_encode($row['messageFile']);
                    $row['messageFile'] = $file;
                    }
  
                  
                    $file = 'data:image/image/png;base64,'.base64_encode($row["recieverUserPhoto"]);

                     $row['recieverUserPhoto'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row["senderUserPhoto"]);

                    $row['senderUserPhoto'] = $file;



                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}


function getUserNewMessagesNotifs($myID){

    $myID = mysqli_real_escape_string($this->dbconnection,$myID);
    $tablename = "conversations";

    $query = "SELECT * FROM $tablename WHERE (recieverID = $myID AND conversationStatus = 'New Message')";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
        
    
    if($resultCheck > 0){
        return "true";
    } else {
        return "false";
    }

}

// getting Messages from messages table
public function getUserConversation($myID,$ID){
    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $myID = mysqli_real_escape_string($this->dbconnection, $myID);
    $tablename = "messages";
    $column = "messageReciever";
    $column1 = "messageSender";
   

   

       // $query = "SELECT * FROM $tablename WHERE $column = $ID AND $column1 = $myID OR $column = $myID AND $column1 = $ID";
        
        $query = "SELECT * FROM $tablename WHERE $column = $ID AND $column1 = $myID OR $column = $myID AND $column1 = $ID ORDER BY messageDate ASC";
   

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
    $file;


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                
                //if(strpos($row['ID_FILETYPE'],"image")){

                    if(isset($row['messageFile'])){
                    $file = 'data:image/image/png;base64,'.base64_encode($row['messageFile']);
                    $row['messageFile'] = $file;
                    }
                /*} else {
                    $file = 'data:application/pdf;base64,'.base64_encode($row['IDCARD']);
                    $row['IDCARD'] = $file;
                    
                  } 
                */




                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}





//get transactions

public function getMyTransactions($ID,$column,$transactionType){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $transactionType = mysqli_real_escape_string($this->dbconnection, $transactionType);

    $tablename = "transactions";

   

    if($transactionType === "Request"){
        // added AND transactionStatus = 'pending'
        $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID AND transactionStatus = 'pending';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
  
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else if($transactionType === "Service"){
       // $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM transactions INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.responderID = 11;";
       // added AND transactionStatus = 'pending'
       $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.$column = $ID AND transactionStatus = 'pending';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;

                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else {
        echo "failed query"; 
    }
   

 
    //$query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID;";






        
  
}// end of function



//get transactions

public function getMyPasabuyTransactions($ID,$column,$status){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $status = mysqli_real_escape_string($this->dbconnection, $status);
    

    $tablename = "pasabuytransactions";

   

       //$query = "SELECT pasabuytransactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.*, products.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = pasabuytransactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = pasabuytransactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = pasabuytransactions.serviceID) INNER JOIN products product ON (product.servicesInfoID = pasabuytransactions.serviceID) WHERE pasabuytransactions.$column = $ID AND transactionStatus = 'pending';";

       //$query = "SELECT pasabuytransactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, product.*, services.* FROM pasabuytransactions INNER JOIN userprofile requestor ON (requestor.userID = pasabuytransactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = pasabuytransactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = pasabuytransactions.serviceID) INNER JOIN products product ON (product.servicesInfoID = pasabuytransactions.serviceID) WHERE pasabuytransactions.$column = $ID AND pasabuytransactions.orderStatus = '$status';";

       /*
       $query = "SELECT pasabuytransactions.*, requestor.userID, responder.userID, responder.userPhoto, requestor.userName as 

       RequestorName, responder.userName as ResponderName, responder.userEmail as ResponderEmail, requestor.userEmail as RequestorEmail,requestor.userPhoto as requestorPhoto, product.*, services.* FROM pasabuytransactions
       
       INNER JOIN userprofile requestor ON (requestor.userID = pasabuytransactions.requestorID) 
       
       INNER JOIN userprofile responder ON (responder.userID = pasabuytransactions.responderID) 
       
       INNER JOIN servicesinfo services ON (services.serviceID = pasabuytransactions.serviceID) 
       
       INNER JOIN products product ON (product.productID = pasabuytransactions.productID)
       
       WHERE pasabuytransactions.$column = $ID AND pasabuytransactions.orderStatus = '$status'";

       */

       $query="SELECT 
       pasabuytransactions.*, 
       requestor.userID, 
       responder.userID, 
       responder.userPhoto as responderPhoto, 
       requestor.userName as RequestorName, 	
       responder.userName as ResponderName,
       responder.userEmail as ResponderEmail,
       requestor.userEmail as RequestorEmail, 
       requestor.userPhoto as requestorPhoto, 
       product.*, 
       services.* 
       
       FROM pasabuytransactions	
              
       INNER JOIN userprofile requestor ON (requestor.userID = pasabuytransactions.requestorID) 
              
       INNER JOIN userprofile responder ON (responder.userID = pasabuytransactions.responderID) 
              
       INNER JOIN servicesinfo services ON (services.serviceID = pasabuytransactions.serviceID) 
              
       INNER JOIN products product ON (product.productID = pasabuytransactions.productID)
       
       WHERE pasabuytransactions.$column = $ID AND pasabuytransactions.orderStatus = '$status'";


        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
      // print_r(array_keys(mysqli_fetch_assoc($result)));
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
                    mb_convert_encoding($row, 'UTF-8', 'UTF-8');
                    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;

                  
                    $file = 'data:image/image/png;base64,'.base64_encode($row['responderPhoto']);
                    $row['responderPhoto'] = $file;
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['productImage']);
                    $row['productImage'] = $file;
                    

                    $file = 'data:image/image/png;base64,'.base64_encode($row['requestorPhoto']);
                    $row['requestorPhoto'] = $file;


                    $data[] = $row;
                    
                   
                 
                }
                
                return $data;
            
            
         
    
        } else {return "failed to fetch";}
    

   
   

 
  
}// end of function

//get transactions

public function requestTransactionExists($requestID,$responderID,$requestorID){

    $requestID= mysqli_real_escape_string($this->dbconnection, $requestID);
    $responderID = mysqli_real_escape_string($this->dbconnection, $responderID);
    $requestorID = mysqli_real_escape_string($this->dbconnection, $requestorID);

    $tablename = "transactions";

   

    $query = "SELECT * FROM $tablename WHERE requestID = $requestID AND responderID = $responderID AND requestorID = $requestorID AND ( transactionStatus = 'pending' OR transactionStatus ='accepted')";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
        
    
    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }



        
  
}// end of function

//check if report exists already
public function reportExists($reporterID,$reportedID){

    $reporterID= mysqli_real_escape_string($this->dbconnection, $requestID);
    $reportedID = mysqli_real_escape_string($this->dbconnection, $responderID);
 

    $tablename = "reportsinfo";

   

    $query = "SELECT * FROM $tablename WHERE reportedAccountID = $reportedID AND reporterAccountID = $reporterID AND (reportedServiceID = NULL AND reportedRequestID = NULL)";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
        
    
    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }



        
  
}// end of function

// check if request report exists already
public function reportRequestExists($reporterID,$reportedID,$requestID){

    $reporterID= mysqli_real_escape_string($this->dbconnection, $reporterID);
    $reportedID = mysqli_real_escape_string($this->dbconnection, $reportedID);
    $requestID = mysqli_real_escape_string($this->dbconnection, $requestID);

    $tablename = "reportsinfo";

   

    $query = "SELECT * FROM $tablename WHERE (reportedAccountID = $reportedID AND reporterAccountID = $reporterID) AND reportedRequestID = $requestID";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
        
    
    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }



        
  
}// end of function

//check if service report exists already
public function reportServiceExists($reporterID,$reportedID,$serviceID){

    $reporterID= mysqli_real_escape_string($this->dbconnection, $reporterID);
    $reportedID = mysqli_real_escape_string($this->dbconnection, $reportedID);
    $serviceID= mysqli_real_escape_string($this->dbconnection, $serviceID);

    $tablename = "reportsinfo";

   

    $query = "SELECT * FROM $tablename WHERE (reportedAccountID = $reportedID AND reporterAccountID = $reporterID) AND reportedServiceID = $serviceID";

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
        
    
    if($resultCheck > 0){
        return true;
    } else {
        return false;
    }



        
  
}// end of function

// get cancelled transactions
public function getCancelledTransactions($ID,$column,$transactionType){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $transactionType = mysqli_real_escape_string($this->dbconnection, $transactionType);

    $tablename = "transactions";

   

    if($transactionType === "Request"){
        // added AND transactionStatus = 'pending'
        $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID AND transactionStatus = 'cancelled';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else if($transactionType === "Service"){
       // $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM transactions INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.responderID = 11;";
       // added AND transactionStatus = 'pending'
       $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.$column = $ID AND transactionStatus = 'cancelled';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;
                    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;

                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else {
        echo "failed query"; 
    }
   

 
    //$query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID;";






        
  
}// end of function


// get accepted transactions
public function getAcceptedTransactions($ID,$column,$transactionType){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $transactionType = mysqli_real_escape_string($this->dbconnection, $transactionType);

    $tablename = "transactions";

   

    if($transactionType === "Request"){
        // added AND transactionStatus = 'pending'
        $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID AND transactionStatus = 'accepted';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else if($transactionType === "Service"){
       // $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM transactions INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.responderID = 11;";
       // added AND transactionStatus = 'pending'
       $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.$column = $ID AND transactionStatus = 'accepted';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;

                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else {
        echo "failed query"; 
    }
   

 
    //$query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID;";






        
  
}// end of function

// get delivered transactions
public function getDeliveredTransactions($ID,$column,$transactionType){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $transactionType = mysqli_real_escape_string($this->dbconnection, $transactionType);

    $tablename = "transactions";

   

    if($transactionType === "Request"){
        // added AND transactionStatus = 'pending'
        $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID AND transactionStatus = 'delivered';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;
    
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else if($transactionType === "Service"){
       // $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM transactions INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.responderID = 11;";
       // added AND transactionStatus = 'pending'
       $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.$column = $ID AND transactionStatus = 'delivered';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;
                    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else {
        echo "failed query"; 
    }
   

 
    //$query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID;";






        
  
}// end of function


// get delivered transactions
public function getPaidTransactions($ID,$column,$transactionType){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $transactionType = mysqli_real_escape_string($this->dbconnection, $transactionType);

    $tablename = "transactions";

   

    if($transactionType === "Request"){
        // added AND transactionStatus = 'pending'
        $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID AND transactionStatus = 'paid' OR transactionStatus = 'payment confirmed';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;
    
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else if($transactionType === "Service"){
       // $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM transactions INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.responderID = 11;";
       // added AND transactionStatus = 'pending'
       $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.$column = $ID AND transactionStatus = 'paid' OR transactionStatus = 'payment confirmed';";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;
                    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else {
        echo "failed query"; 
    }
   

 
    //$query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID;";






        
  
}// end of function

// get completed / finished transactions

/*
public function getCompletedTransactions($ID,$column,$transactionType){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $transactionType = mysqli_real_escape_string($this->dbconnection, $transactionType);

    $tablename = "transactions";

   

    if($transactionType === "Request"){
        // added AND transactionStatus = 'pending'
        $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID AND (transactions.transactionStatus = 'completed' OR transactions.transactionStatus = 'paid' OR transactions.transactionStatus = 'payment confirmed' OR transactions.transactionStatus = 'responder feedback' OR transactions.transactionStatus = 'requestor feedback') ORDER BY transactions.transactionID DESC";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else if($transactionType === "Service"){
       // $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM transactions INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.responderID = 11;";
       // added AND transactionStatus = 'pending'
       $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.$column = $ID AND (transactions.transactionStatus = 'completed' OR transactions.transactionStatus = 'paid' OR transactions.transactionStatus = 'payment confirmed')ORDER BY transactions.transactionID DESC;";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;

                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else {
        echo "failed query"; 
    }
   

 
    //$query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID;";






        
  
}// end of function

*/


// get completed / finished transactions

public function getCompletedTransactions($ID,$column,$transactionType){

    $ID = mysqli_real_escape_string($this->dbconnection, $ID);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $transactionType = mysqli_real_escape_string($this->dbconnection, $transactionType);

    $tablename = "transactions";

   

    if($transactionType === "Request"){
        // added AND transactionStatus = 'pending'
        $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID AND (transactions.transactionStatus = 'completed' ) ORDER BY transactions.transactionID DESC";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;
    
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else if($transactionType === "Service"){
       // $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM transactions INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.responderID = 11;";
       // added AND transactionStatus = 'pending'
       $query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, services.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN servicesinfo services ON (services.serviceID = transactions.serviceID) WHERE transactions.$column = $ID AND (transactions.transactionStatus = 'completed' OR transactions.transactionStatus = 'payment confirmed')ORDER BY transactions.transactionID DESC;";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
    
                    $file = 'data:image/image/png;base64,'.base64_encode($row['certificateFile']);
                    $row['certificateFile'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['bannerImage']);
                    $row['bannerImage'] = $file;

                    $file = 'data:image/image/png;base64,'.base64_encode($row['paymentFile']);
                    $row['paymentFile'] = $file;

                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

    } else {
        echo "failed query"; 
    }
   

 
    //$query = "SELECT transactions.*, requestor.userID, responder.userID, requestor.userName as RequestorName, responder.userName as ResponderName, requests.* FROM $tablename INNER JOIN userprofile requestor ON (requestor.userID = transactions.requestorID) INNER JOIN userprofile responder ON (responder.userID = transactions.responderID) INNER JOIN requestsinfo requests ON (requests.requestID = transactions.requestID) WHERE transactions.$column = $ID;";






        
  
}// end of function


// get timeslots
public function getMyTimeSlots($responderID,$date){

    $responderID = mysqli_real_escape_string($this->dbconnection, $responderID);
    $date = mysqli_real_escape_string($this->dbconnection, $date);
    $tablename = "transactions";

       $query = "SELECT * FROM $tablename WHERE (responderID = $responderID AND dueDate = '$date') AND transactionStatus = 'accepted'";

        $result = mysqli_query($this->dbconnection, $query);
        $resultCheck = mysqli_num_rows($result);
        $data = array();
        $file;
        
    
        if($resultCheck > 0){
           
    
                while($row = mysqli_fetch_assoc($result)){
                    
    
                    $data[] = $row;
                    
                 
                }
                
                return $data;
            
            
            
    
        } else {return "failed to fetch";}

  
   

 
   





        
  
}// end of function


// get banner images
// get Services row 
public function getServicesBannerImage($ServiceCategory,$ServicePosition){
    $tablename = "servicesinfo";
    $ServiceCategory = mysqli_real_escape_string($this->dbconnection, $ServiceCategory);
    $ServicePosition = mysqli_real_escape_string($this->dbconnection, $ServicePosition);

    $query = "SELECT bannerImage FROM $tablename WHERE serviceCategory = '$ServiceCategory' AND servicePosition = '$ServicePosition'";
  

    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
   
  


    if($resultCheck > 0){
       

            $row = mysqli_fetch_array($result);
            $data = $row['bannerImage'];
                
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}



// get user reviews 
// get Services row 
public function getUserReviews($userID){
    $tablename = "feedbacks";
    $userID = mysqli_real_escape_string($this->dbconnection, $userID);

   
  
    $query = "SELECT feedbacks.*, reviewer.userName as reviewerUserName,reviewer.userPhoto as reviewerUserPhoto, reviewee.userName as revieweeUserName, reviewee.userPhoto as revieweeUserPhoto
    FROM $tablename
    INNER JOIN userprofile as reviewer ON($tablename.reviewerID = reviewer.userID)
    INNER JOIN userprofile as reviewee ON($tablename.revieweeID = reviewee.userID)
    WHERE $tablename.revieweeID = $userID";


    $result = mysqli_query($this->dbconnection, $query);
    $resultCheck = mysqli_num_rows($result);
    $data = array();
  


    if($resultCheck > 0){
       

            while($row = mysqli_fetch_assoc($result)){
                

                
                $file = 'data:image/image/png;base64,'.base64_encode($row['reviewerUserPhoto']);
                $row['reviewerUserPhoto'] = $file;
                

                $file = 'data:image/image/png;base64,'.base64_encode($row['revieweeUserPhoto']);
                $row['revieweeUserPhoto'] = $file;

                $data[] = $row;
                
             
            }
            return $data;
        
        
        

    } else {return "failed to fetch";}

        
  
}

/*---------------------------------UPDATE FUNCTIONS----------------------------------------------------- */

// update columns 
public function updateColumn($tablename,$column,$name,$condition,$conditionvalue){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $name = mysqli_real_escape_string($this->dbconnection, $name);
    $conditionvalue = mysqli_real_escape_string($this->dbconnection, $conditionvalue);

    $query = "UPDATE $tablename SET $column = '$name' WHERE $condition = '$conditionvalue' ";

    $result = mysqli_query($this->dbconnection, $query);


        
  
}

// update paymentcolumn 
public function setPayment($name,$conditionvalue,$paymentFile){
    $tablename = "transactions";
    $column = "transactionStatus";
    $condition = "transactionID";
    $name = mysqli_real_escape_string($this->dbconnection, $name);
    $conditionvalue = mysqli_real_escape_string($this->dbconnection, $conditionvalue);
    $paymentFile = mysqli_real_escape_string($this->dbconnection,$paymentFile); 
    $column2 = "paymentFile";

    $query = "UPDATE $tablename SET $column = '$name', $column2 = '$paymentFile' WHERE $condition = '$conditionvalue' ";

    $result = mysqli_query($this->dbconnection, $query);


        
  
}


public function setPasabuyPayment($name,$conditionvalue,$paymentFile){
    $tablename = "pasabuytransactions";
    $column = "orderStatus";
    $condition = "pasabuyTransactionID";
    $name = mysqli_real_escape_string($this->dbconnection, $name);
    $conditionvalue = mysqli_real_escape_string($this->dbconnection, $conditionvalue);
    $paymentFile = mysqli_real_escape_string($this->dbconnection,$paymentFile); 
    $column2 = "paymentFile";

    $query = "UPDATE $tablename SET $column = '$name', $column2 = '$paymentFile' WHERE $condition = '$conditionvalue' ";

    $result = mysqli_query($this->dbconnection, $query);


        
  
}

// update columns 
public function updateConversation($senderID,$recieverID,$messageBody,$date){
    $tablename = "conversations";
    $column = "latestMessage";
    $messageBody = mysqli_real_escape_string($this->dbconnection, $messageBody);
    $senderID = mysqli_real_escape_string($this->dbconnection, $senderID);
    $recieverID = mysqli_real_escape_string($this->dbconnection, $recieverID);
    $date = mysqli_real_escape_string($this->dbconnection, $date);

    //$query = "UPDATE $tablename SET latestMessage = '$messageBody', latestMessageDate = '$date', conversationStatus = 'New Message' WHERE (senderID = $senderID AND recieverID =  $recieverID OR senderID=  $recieverID AND recieverID = $senderID); ";

    $query = "UPDATE $tablename SET latestMessage = '$messageBody', latestMessageDate = '$date', conversationStatus = 'New Message', senderID = $senderID, recieverID = $recieverID WHERE (senderID = $senderID AND recieverID =  $recieverID OR senderID=  $recieverID AND recieverID = $senderID); ";
    $result = mysqli_query($this->dbconnection, $query);


        
  
}

// seenMessage
public function updateConversationStatus($userID,$myID){
    $tablename = "conversations";
    $column = "conversationStatus";
    $userID = mysqli_real_escape_string($this->dbconnection, $userID);
    $myID = mysqli_real_escape_string($this->dbconnection, $myID);

    $query = "UPDATE $tablename SET conversationStatus = 'Seen' WHERE (senderID = $myID AND recieverID = $userID OR senderID= $userID AND recieverID = $myID) ";

    $result = mysqli_query($this->dbconnection, $query);    
  
}


public function updateSenderReciever($userID,$myID){
    $tablename = "conversations";
    $column = "conversationStatus";
    $userID = mysqli_real_escape_string($this->dbconnection, $userID);
    $myID = mysqli_real_escape_string($this->dbconnection, $myID);

    $query = "UPDATE $tablename SET senderID = $myID, recieverID = $userID WHERE (senderID = $myID AND recieverID = $userID OR senderID= $userID AND recieverID = $myID); ";

    $result = mysqli_query($this->dbconnection, $query);    
  
    return $result;
}


public function updateMyService($serviceID,$category,$position,$rate){
    $tablename = "servicesinfo";
    $serviceID = mysqli_real_escape_string($this->dbconnection, $serviceID);
    $category = mysqli_real_escape_string($this->dbconnection, $category);
    $position = mysqli_real_escape_string($this->dbconnection, $position);
    $rate = mysqli_real_escape_string($this->dbconnection, $rate);
 

    $query = "UPDATE $tablename SET serviceCategory = '$category', servicePosition = '$position', rate = $rate WHERE serviceID = $serviceID;";

    $result = mysqli_query($this->dbconnection, $query) or die(mysqli_error($this->dbconnection));
        
  
    return $result;
}

/*---------------------------------DELETE FUNCTIONS----------------------------------------------------- */

// update columns 
public function deleteColumn($tablename,$column,$name,$condition,$conditionvalue){
    $tablename = mysqli_real_escape_string($this->dbconnection, $tablename);
    $column = mysqli_real_escape_string($this->dbconnection, $column);
    $condition = mysqli_real_escape_string($this->dbconnection, $condition);
    $name = mysqli_real_escape_string($this->dbconnection, $name);
    $conditionvalue = mysqli_real_escape_string($this->dbconnection, $conditionvalue);

    $query = "DELETE FROM $tablename WHERE $condition = '$conditionvalue' ";

    $result = mysqli_query($this->dbconnection, $query);


        
  
}

/*--------------------------------INSERT FUNCTIONS------------------------------------------------------ */

//insert to card / add to cart
public function addToCart($productID,$serviceID,$responderID,$requestorID,$dateAssigned,$quantity){

    $tablename = "cart";
    $cartID = 0;
    $productStatus = 'Available';
    $productID  = mysqli_real_escape_string($this->dbconnection, $productID );
    $serviceID = mysqli_real_escape_string($this->dbconnection,  $serviceID);
    $responderID = mysqli_real_escape_string($this->dbconnection, $responderID);
    $requestorID = mysqli_real_escape_string($this->dbconnection, $requestorID);
    $dateAssigned = mysqli_real_escape_string($this->dbconnection, $dateAssigned);
    $quantity = mysqli_real_escape_string($this->dbconnection, $quantity);



    //	cartID	productID	serviceID	responderID	requestorID	dateAssigned	quantity	productStatus	

        $query = "INSERT INTO $tablename() VALUES ($cartID,$productID,$serviceID,$responderID,$requestorID,'$dateAssigned',$quantity,'$productStatus')";
   
    return mysqli_query($this->dbconnection, $query);

}

public function registerPasabuyTransaction($productID,$serviceID,$requestorID,$responderID,$price,$quantity,$orderDate,$orderStatus,$paymentFile,$transactionStartDate,$transactionEndDate,$totalPrice,$dueDate){

    $tablename = "pasabuyTransactions";
    $pasabuyTransactionID = 0;
   
    
    $productID  = mysqli_real_escape_string($this->dbconnection, $productID );
    $serviceID = mysqli_real_escape_string($this->dbconnection,  $serviceID);
    $responderID = mysqli_real_escape_string($this->dbconnection, $responderID);
    $requestorID = mysqli_real_escape_string($this->dbconnection, $requestorID);
    $price = mysqli_real_escape_string($this->dbconnection, $price);
    $quantity = mysqli_real_escape_string($this->dbconnection, $quantity);
    $orderDate = mysqli_real_escape_string($this->dbconnection, $orderDate);
    $orderStatus = mysqli_real_escape_string($this->dbconnection, $orderStatus);
    $paymentFile = mysqli_real_escape_string($this->dbconnection, $paymentFile);
    $transactionStartDate = mysqli_real_escape_string($this->dbconnection, $transactionStartDate);
    $transactionEndDate = mysqli_real_escape_string($this->dbconnection, $transactionEndDate);
    $totalPrice = mysqli_real_escape_string($this->dbconnection, $totalPrice);
    $dueDate = mysqli_real_escape_string($this->dbconnection, $dueDate);



    //	cartID	productID	serviceID	responderID	requestorID	dateAssigned	quantity	productStatus	

        $query = "INSERT INTO $tablename() VALUES ($pasabuyTransactionID,$productID,$serviceID,$requestorID,$responderID,$price,$quantity,'$orderDate','$orderStatus','$paymentFile','$transactionStartDate','$transactionEndDate',$totalPrice,'$dueDate')";
   
        echo mysqli_error($this->dbconnection);
    return mysqli_query($this->dbconnection, $query);

}



// insert services
public function registerService($serviceCategory,$servicePosition,$rate,$responderID,$certification,$certificateFile,$bannerImage){
  
    $tablename = "servicesinfo";

    $serviceCategory= mysqli_real_escape_string($this->dbconnection,$serviceCategory);
    $servicePosition= mysqli_real_escape_string($this->dbconnection,$servicePosition);
    $rate= mysqli_real_escape_string($this->dbconnection,$rate);
    $responderID= mysqli_real_escape_string($this->dbconnection,$responderID);
    $certification= mysqli_real_escape_string($this->dbconnection,$certification);
    $certificateFile= mysqli_real_escape_string($this->dbconnection,$certificateFile);
    $bannerImage =  mysqli_real_escape_string($this->dbconnection,$bannerImage);
    $serviceStatus = "Active";

    

    $query = "INSERT INTO $tablename() VALUES (0,'$serviceCategory','$servicePosition','$rate','$responderID','$certification','$certificateFile','$serviceStatus','$bannerImage')";
    return mysqli_query($this->dbconnection, $query);

}

// insert categories
public function registerCategory($serviceCategory,$servicePosition){
    
     $tablename = "categories";
 
     $categoryName= mysqli_real_escape_string($this->dbconnection,$serviceCategory);
     $categoryPosition= mysqli_real_escape_string($this->dbconnection,$servicePosition);
     $categoryStatus = "";
 
    
     
 
     $query = "INSERT INTO $tablename() VALUES ( 0,'$categoryName','$categoryStatus','$categoryPosition')";
     return mysqli_query($this->dbconnection, $query);
 
 }

 // insert products
 public function registerProduct($servicesInfoID,$itemCategory,$productName,$productBrand,$productDescription,$productPrice,$productImage,$responderID,$productStore,$storeLocation,$deliveryRate){

	
    
     $tablename = "products";
 
     
     $servicesInfoID=mysqli_real_escape_string($this->dbconnection,$servicesInfoID);
     $itemCategory=mysqli_real_escape_string($this->dbconnection,$itemCategory);
 
     $productName=mysqli_real_escape_string($this->dbconnection,$productName);
     $productBrand=mysqli_real_escape_string($this->dbconnection,$productBrand);
     $productDescription=mysqli_real_escape_string($this->dbconnection,$productDescription);
     $productPrice=mysqli_real_escape_string($this->dbconnection,$productPrice);
     $productImage=mysqli_real_escape_string($this->dbconnection,$productImage);
     $responderID = mysqli_real_escape_string($this->dbconnection,$responderID);
     $deliveryRate = mysqli_real_escape_string($this->dbconnection,$deliveryRate);

     $itemStatus = "";
     
     $productStore=mysqli_real_escape_string($this->dbconnection, $productStore);
     $storeLocation=mysqli_real_escape_string($this->dbconnection,$storeLocation);
  
     
 
     $query = "INSERT INTO $tablename() VALUES ( 0,$servicesInfoID,'$itemCategory', '$productName', '$productBrand', '$productDescription', '$productPrice','$productImage', $responderID ,'$itemStatus','$productStore','$storeLocation',$deliveryRate)";
     return mysqli_query($this->dbconnection, $query);

 
 }


 public function registerRequest($requestCategory,$requestTitle,$requestDescription,$requestExpectedPrice,$isNegotiable,$datePosted,$dueDate,$requestorID,$requestorMunicipality){


    
    $tablename = "requestsinfo";

    
  

    // requestID	requestCategory	requestTitle	requestDescription	requestExpectedPrice	isNegotiable	datePosted	dueDate	requestorID	requestorMunicipality	requestStatus

    //0,'$requestCategory','$requestTitle','$requestDescription','$requestExpectedPrice','$isNegotiable','$datePosted','$dueDate','$requestorID','$requestorMunicipality','$requestStatus'
    $requestorID=mysqli_real_escape_string($this->dbconnection,$requestorID);
    $requestorMunicipality=mysqli_real_escape_string($this->dbconnection,$requestorMunicipality);
    $datePosted=mysqli_real_escape_string($this->dbconnection,$datePosted);
    $requestCategory=mysqli_real_escape_string($this->dbconnection,$requestCategory);
    $requestTitle=mysqli_real_escape_string($this->dbconnection,$requestTitle);
    $requestExpectedPrice=mysqli_real_escape_string($this->dbconnection,$requestExpectedPrice);
    $isNegotiable=mysqli_real_escape_string($this->dbconnection,$isNegotiable);
    $dueDate = mysqli_real_escape_string($this->dbconnection,$dueDate);
    $requestDescription=mysqli_real_escape_string($this->dbconnection, $requestDescription);
    $requestStatus ="Active";
 

    

    $query = "INSERT INTO $tablename() VALUES ( 0,'$requestCategory','$requestTitle','$requestDescription','$requestExpectedPrice','$isNegotiable','$datePosted','$dueDate','$requestorID','$requestorMunicipality','$requestStatus')";
    return mysqli_query($this->dbconnection, $query);


}


// send messages
public function sendMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName,$messageFileType=null,$messageFile=null){

$senderID= mysqli_real_escape_string($this->dbconnection,$senderID);
$recieverID= mysqli_real_escape_string($this->dbconnection,$recieverID);
$messageBody= mysqli_real_escape_string($this->dbconnection,$messageBody);
$messageDate = mysqli_real_escape_string($this->dbconnection,$messageDate);
$messageTime = mysqli_real_escape_string($this->dbconnection,$messageTime);
$messageStatus = "New";
$firstChat = mysqli_real_escape_string($this->dbconnection,$firstChat );
$senderUserName = mysqli_real_escape_string($this->dbconnection,$senderUserName);
$recieverUserName= mysqli_real_escape_string($this->dbconnection,$recieverUserName);




if(isset($messageFileType) && isset($messageFile)){
    $messageFile = mysqli_real_escape_string($this->dbconnection,$messageFile);
    $messageFileType = mysqli_real_escape_string($this->dbconnection,$messageFileType);

} else {
    $messageFile = "";
    $messageFileType ="";

}

    $tablename = "messages";

    

    $query = "INSERT INTO $tablename() VALUES (0,$senderID,$recieverID,'$messageBody','$messageDate','$messageTime', '$messageStatus','$messageFile','$messageFileType',$firstChat,'$senderUserName','$recieverUserName')";
    return mysqli_query($this->dbconnection, $query);

}


public function sendPhotoMessage($senderID,$recieverID,$messageBody,$messageDate,$messageTime,$firstChat,$senderUserName,$recieverUserName,$messageFileType,$messageFile){

    $senderID= mysqli_real_escape_string($this->dbconnection,$senderID);
    $recieverID= mysqli_real_escape_string($this->dbconnection,$recieverID);
    $messageBody= mysqli_real_escape_string($this->dbconnection,$messageBody);
    $messageDate = mysqli_real_escape_string($this->dbconnection,$messageDate);
    $messageTime = mysqli_real_escape_string($this->dbconnection,$messageTime);
    $messageStatus = "New";
    $firstChat = mysqli_real_escape_string($this->dbconnection,$firstChat );
    $senderUserName = mysqli_real_escape_string($this->dbconnection,$senderUserName);
    $recieverUserName= mysqli_real_escape_string($this->dbconnection,$recieverUserName);
 
        $messageFile =mysqli_real_escape_string($this->dbconnection, $messageFile);
        $messageFileType = mysqli_real_escape_string($this->dbconnection,$messageFileType);
    
    
        $tablename = "messages";
    
        
    
        $query = "INSERT INTO $tablename() VALUES (0,$senderID,$recieverID,'$messageBody','$messageDate','$messageTime','$messageStatus','$messageFile','$messageFileType',$firstChat,'$senderUserName','$recieverUserName')";
        return mysqli_query($this->dbconnection, $query) or die (mysqli_error($this->dbconnection));
    
    }


// register request application
public function registerRequestTransaction($requestID,$responderID,$requestorID,$price,$transactionStartDate,$requestDueDate){

    $requestID= mysqli_real_escape_string($this->dbconnection, $requestID);
    $responderID = mysqli_real_escape_string($this->dbconnection, $responderID);
    $requestorID = mysqli_real_escape_string($this->dbconnection, $requestorID);
    $price = mysqli_real_escape_string($this->dbconnection, $price);
    $transactionStartDate = mysqli_real_escape_string($this->dbconnection, $transactionStartDate);
    $requestDueDate = mysqli_real_escape_string($this->dbconnection, $requestDueDate);
    $timeslot = '';
    $additionalNotes = '';
    $transactionsStatus = "pending";
    $contractAgreement = "";
    $paymentFile = "";



    $tablename = "transactions";

   //	transactionID	requestID	serviceID	requestorID	responderID	price	transactionStatus	transactionStartDate	transactionEndDate	


    $query = "INSERT INTO $tablename VALUES(0,$requestID,null,$requestorID,$responderID,$price,'$transactionsStatus','$transactionStartDate',null,'$requestDueDate','$timeslot','$additionalNotes','$contractAgreement','$paymentFile')";

    $result = mysqli_query($this->dbconnection, $query);
 
  
}// end of function


// register request application
public function registerServiceTransaction($formServiceID,$responderID,$requestorID,$servicePrice,$dueDate,$responderTimeSlots,$additionalNotes,$transactionStartDate,$contract){

    $formServiceID= mysqli_real_escape_string($this->dbconnection, $formServiceID);
    $responderID = mysqli_real_escape_string($this->dbconnection, $responderID);
    $requestorID = mysqli_real_escape_string($this->dbconnection, $requestorID);
    $servicePrice = mysqli_real_escape_string($this->dbconnection, $servicePrice);
    $dueDate = mysqli_real_escape_string($this->dbconnection, $dueDate);
    $additionalNotes = mysqli_real_escape_string($this->dbconnection, $additionalNotes);
    $transactionStartDate = mysqli_real_escape_string($this->dbconnection, $transactionStartDate);
    $responderTimeSlots= mysqli_real_escape_string($this->dbconnection,$responderTimeSlots);
    $contract = mysqli_real_escape_string($this->dbconnection,$contract);
    
    $transactionsStatus = "pending";
    $paymentFile = "";

   



    $tablename = "transactions";

   //	transactionID	requestID	serviceID	requestorID	responderID	price	transactionStatus	transactionStartDate	transactionEndDate	


    $query = "INSERT INTO $tablename VALUES(0,null,$formServiceID,$requestorID,$responderID,$servicePrice,'$transactionsStatus','$transactionStartDate',null,'$dueDate','$responderTimeSlots','$additionalNotes','$contract','$paymentFile')";

    $result = mysqli_query($this->dbconnection, $query);
 
  
}// end of function



// register pasabuy request
public function registerPasabuyRequest($requestorID,$datePosted,$productImage,$productName,$productBrand,$requestExpectedPrice,$isNegotiable,$dueDate,$requestDescription){

    $requestorID = mysqli_real_escape_string($this->dbconnection, $requestorID);
    $datePosted = mysqli_real_escape_string($this->dbconnection, $datePosted);
    $productImage = mysqli_real_escape_string($this->dbconnection, $productImage);
    $productName = mysqli_real_escape_string($this->dbconnection, $productName);
    $productBrand = mysqli_real_escape_string($this->dbconnection, $productBrand);
    $requestExpectedPrice = mysqli_real_escape_string($this->dbconnection, $requestExpectedPrice);
    $isNegotiable = mysqli_real_escape_string($this->dbconnection, $isNegotiable);
    $dueDate = mysqli_real_escape_string($this->dbconnection, $dueDate);
    $requestDescription = mysqli_real_escape_string($this->dbconnection,$requestDescription);
    $requestStatus = "Active";

   
    //pasabuyrequestID	requestorID	productName	productBrand	requestDescription	expectedPrice	
    //negotiable	datePosted	requestDueDate	requestStatus	productImage	


    $tablename = "pasabuyrequests";

    $query = "INSERT INTO $tablename VALUES(0,$requestorID,'$productName','$productBrand','$requestDescription','$requestExpectedPrice','$isNegotiable','$datePosted','$dueDate','$requestStatus','$productImage')";

    $result = mysqli_query($this->dbconnection, $query);
 
  return $result;
}// end of function


// register pasabuy request
public function registerRequestFeedback($myID,$revieweeID,$requestID,$transactionID,$feedback,$today){


    $myID= mysqli_real_escape_string($this->dbconnection, $myID);
    $revieweeID= mysqli_real_escape_string($this->dbconnection, $revieweeID);
    $requestID= mysqli_real_escape_string($this->dbconnection, $requestID);
    $transactionID= mysqli_real_escape_string($this->dbconnection,$transactionID);
    $feedback = mysqli_real_escape_string($this->dbconnection, $feedback);
    $today= mysqli_real_escape_string($this->dbconnection, $today);
    $transactionType = "Request";

	//	feedbackID	reviewerID	revieweeID	transactionID	serviceID	requestID	pasabuyRequestID	feedback	feedbackDate	


    $tablename = "feedbacks";

    $query = "INSERT INTO $tablename VALUES(0,$myID,$revieweeID,$transactionID,null,$requestID,null,'$feedback','$today','$transactionType',null)";

    $result = mysqli_query($this->dbconnection, $query);
 
  return $result;
}// end of function


// register SERVICE FEEDBACKS
public function registerServiceFeedback($myID,$revieweeID,$serviceID,$transactionID,$feedback,$today){


    $myID= mysqli_real_escape_string($this->dbconnection, $myID);
    $revieweeID= mysqli_real_escape_string($this->dbconnection, $revieweeID);
    $serviceID= mysqli_real_escape_string($this->dbconnection, $serviceID);
    $transactionID= mysqli_real_escape_string($this->dbconnection,$transactionID);
    $feedback = mysqli_real_escape_string($this->dbconnection, $feedback);
    $today= mysqli_real_escape_string($this->dbconnection, $today);
    $transactionType = "Service";
    
	//	feedbackID	reviewerID	revieweeID	transactionID	serviceID	requestID	pasabuyRequestID	feedback	feedbackDate	


    $tablename = "feedbacks";

    $query = "INSERT INTO $tablename VALUES(0,$myID,$revieweeID,$transactionID,$serviceID,null,null,'$feedback','$today','$transactionType',null)";

    $result = mysqli_query($this->dbconnection, $query);
 
  return $result;

}// end of function


// register SERVICE FEEDBACKS
public function registerPasabuyFeedback($myID,$revieweeID,$serviceID, $pasabuyTransactionID,$feedback,$today){


    $myID= mysqli_real_escape_string($this->dbconnection, $myID);
    $revieweeID= mysqli_real_escape_string($this->dbconnection, $revieweeID);
    $serviceID= mysqli_real_escape_string($this->dbconnection, $serviceID);
    //$transactionID= mysqli_real_escape_string($this->dbconnection,$transactionID);
    $feedback = mysqli_real_escape_string($this->dbconnection, $feedback);
    $today= mysqli_real_escape_string($this->dbconnection, $today);
    $transactionType = "Pasabuy";
    $pasabuyTransactionID = mysqli_real_escape_string($this->dbconnection, $pasabuyTransactionID);

	//	feedbackID	reviewerID	revieweeID	transactionID	serviceID	requestID	pasabuyRequestID	feedback	feedbackDate	


    $tablename = "feedbacks";

    $query = "INSERT INTO $tablename VALUES(0,$myID,$revieweeID,null,$serviceID,null,null,'$feedback','$today','$transactionType',$pasabuyTransactionID)";

    $result = mysqli_query($this->dbconnection, $query);
 
  return $result;
}// end of function


public function registerServiceRatings($myID,$revieweeID,$transactionID,$ratingValue,$feedbackID,$serviceID){


    $myID= mysqli_real_escape_string($this->dbconnection, $myID);
    $revieweeID= mysqli_real_escape_string($this->dbconnection, $revieweeID);
    $transactionID= mysqli_real_escape_string($this->dbconnection,$transactionID);
    $ratingValue = mysqli_real_escape_string($this->dbconnection,$ratingValue);
    $feedbackID = mysqli_real_escape_string($this->dbconnection,$feedbackID);
    $requestID = null;
    $serviceID = mysqli_real_escape_string($this->dbconnection,$serviceID);
    $transactionType = "Service";
    $pasabuyTransactionID = null;

    $rating1star = 0;
    $rating2star = 0;
    $rating3star = 0;
    $rating4star = 0;
    $rating5star = 0;
    $totalRating = 0;

    if($ratingValue === "1"){
        $rating1star = 1;
        $rating2star = 0;
        $rating3star = 0;
        $rating4star = 0;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "2"){
        $rating1star = 0;
        $rating2star = 1;
        $rating3star = 0;
        $rating4star = 0;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "3"){
        $rating1star = 0;
        $rating2star = 0;
        $rating3star = 1;
        $rating4star = 0;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "4"){
        $rating1star = 0;
        $rating2star = 0;
        $rating3star = 0;
        $rating4star = 1;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "5"){

        $rating1star = 0;
        $rating2star = 0;
        $rating3star = 0;
        $rating4star = 0;
        $rating5star = 1;
        $totalRating = 0;
    }


    $tablename = "rating";

    $query = "INSERT INTO $tablename VALUES(0,$myID,$revieweeID,$transactionID,null,$rating1star,$rating2star,$rating3star,$rating4star,$rating5star,$totalRating,$feedbackID,$serviceID,'$transactionType',null)";

    $result = mysqli_query($this->dbconnection, $query);
    echo mysqli_error($this->dbconnection);
 
    return $result;
}// end of function


public function registerPasabuyRatings($myID,$revieweeID,$pasabuyTransactionID,$ratingValue,$feedbackID,$serviceID){


    $myID= mysqli_real_escape_string($this->dbconnection, $myID);
    $revieweeID= mysqli_real_escape_string($this->dbconnection, $revieweeID);
    //$transactionID= mysqli_real_escape_string($this->dbconnection,$transactionID);
    $ratingValue = mysqli_real_escape_string($this->dbconnection,$ratingValue);
    $feedbackID = mysqli_real_escape_string($this->dbconnection,$feedbackID);
    $requestID = null;
    $serviceID = mysqli_real_escape_string($this->dbconnection,$serviceID);
    $transactionType = "Pasabuy";
    $pasabuyTransactionID = mysqli_real_escape_string($this->dbconnection,$pasabuyTransactionID );

    $rating1star = 0;
    $rating2star = 0;
    $rating3star = 0;
    $rating4star = 0;
    $rating5star = 0;
    $totalRating = 0;

    if($ratingValue === "1"){
        $rating1star = 1;
        $rating2star = 0;
        $rating3star = 0;
        $rating4star = 0;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "2"){
        $rating1star = 0;
        $rating2star = 1;
        $rating3star = 0;
        $rating4star = 0;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "3"){
        $rating1star = 0;
        $rating2star = 0;
        $rating3star = 1;
        $rating4star = 0;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "4"){
        $rating1star = 0;
        $rating2star = 0;
        $rating3star = 0;
        $rating4star = 1;
        $rating5star = 0;
        $totalRating = 0;
    } else if($ratingValue === "5"){

        $rating1star = 0;
        $rating2star = 0;
        $rating3star = 0;
        $rating4star = 0;
        $rating5star = 1;
        $totalRating = 0;
    }


    $tablename = "rating";

    $query = "INSERT INTO $tablename VALUES(0,$myID,$revieweeID,null,null,$rating1star,$rating2star,$rating3star,$rating4star,$rating5star,$totalRating,$feedbackID,$serviceID,'$transactionType',$pasabuyTransactionID )";

    $result = mysqli_query($this->dbconnection, $query);
    echo mysqli_error($this->dbconnection);
 
    return $result;
    
}// end of function


// reported services

public function registerReportService($reportedAccountID,$reporterAccountID,$reportCategory,$reportDescription,$reportEvidence,$reportedServiceID,$reportedRequestID,$reportDate){


    
    $tablename = "reportsinfo";

    //reportID	reportedAccountID	reporterAccountID	reportCategory	reportDescription	reportEvidence	reportedServiceID	reportedRequestID	reportDate	
  
    
    $reportedAccountID= mysqli_real_escape_string($this->dbconnection,$reportedAccountID);
    $reporterAccountID= mysqli_real_escape_string($this->dbconnection,$reporterAccountID);
    $reportCategory= mysqli_real_escape_string($this->dbconnection,$reportCategory);
    $reportDescription= mysqli_real_escape_string($this->dbconnection,$reportDescription);
    $reportEvidence= mysqli_real_escape_string($this->dbconnection,$reportEvidence);
    $reportedServiceID= $reportedServiceID;
    $reportedRequestID= $reportedRequestID;
    $reportDate= mysqli_real_escape_string($this->dbconnection,$reportDate);
    $reportStatus = "pending";
    $reportActionDate = "";
    $restrictDuration = "";

 

    

    //$query = "INSERT INTO $tablename VALUES (0,$reportedAccountID,$reporterAccountID,'$reportCategory','$reportDescription','',$reportedServiceID,$reportedRequestID,'$reportDate','$reportStatus')";
    $query = "INSERT INTO $tablename VALUES (0,$reportedAccountID,$reporterAccountID,'$reportCategory','$reportDescription','$reportEvidence',$reportedServiceID,null,'$reportDate','$reportStatus','$reportActionDate','$restrictDuration')";
    
        if(mysqli_query($this->dbconnection,$query)){
            return 1;
        } else {
            return mysqli_error($this->dbconnection);
        }
    
   
    //return mysqli_query($this->dbconnection, $query);


}

// reported Requests

public function registerReportRequest($reportedAccountID,$reporterAccountID,$reportCategory,$reportDescription,$reportEvidence,$reportedServiceID,$reportedRequestID,$reportDate){


    
    $tablename = "reportsinfo";

    //reportID	reportedAccountID	reporterAccountID	reportCategory	reportDescription	reportEvidence	reportedServiceID	reportedRequestID	reportDate	
  
    
    $reportedAccountID= mysqli_real_escape_string($this->dbconnection,$reportedAccountID);
    $reporterAccountID= mysqli_real_escape_string($this->dbconnection,$reporterAccountID);
    $reportCategory= mysqli_real_escape_string($this->dbconnection,$reportCategory);
    $reportDescription= mysqli_real_escape_string($this->dbconnection,$reportDescription);
    $reportEvidence= mysqli_real_escape_string($this->dbconnection,$reportEvidence);
    $reportedServiceID= $reportedServiceID;
    $reportedRequestID= $reportedRequestID;
    $reportDate= mysqli_real_escape_string($this->dbconnection,$reportDate);
    $reportStatus = "pending";
    $reportActionDate = "";
    $restrictDuration = "";

 

    

    //$query = "INSERT INTO $tablename VALUES (0,$reportedAccountID,$reporterAccountID,'$reportCategory','$reportDescription','',$reportedServiceID,$reportedRequestID,'$reportDate','$reportStatus')";
    $query = "INSERT INTO $tablename VALUES (0,$reportedAccountID,$reporterAccountID,'$reportCategory','$reportDescription','$reportEvidence',null,$reportedRequestID,'$reportDate','$reportStatus','$reportActionDate','$restrictDuration')";
    
        if(mysqli_query($this->dbconnection,$query)){
            return 1;
        } else {
            return mysqli_error($this->dbconnection);
        }
    
   
    //return mysqli_query($this->dbconnection, $query);


}



}// end of class

