function getReportsInfo(reportID){
        
    var reportID = reportID;
    var xmlhttp = new XMLHttpRequest();
    var query = "reportID=" + reportID;


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

                var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setReportData(dataArray);

        }else{
            console.log("loading");
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_Report.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);


}


function getReportedUserInfo(id){
            
    var id = id;
    var xmlhttp = new XMLHttpRequest();
    var query = "userID=" + id + "&userType";


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

                var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setReportedData(dataArray)

        }else{
            console.log("loading");
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_publicProfile.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}



function getReporterUserInfo(id){
            
    var id = id;
    var xmlhttp = new XMLHttpRequest();
    var query = "userID=" + id+ "&userType=Responder";


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

                var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setReporterData(dataArray)

        }else{
            console.log("loading");
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_publicProfile.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}


function getServiceInfo(id){
            
    var id = id;
    var xmlhttp = new XMLHttpRequest();
    var query = "serviceID=" + id;



    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

                var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setServicesInfoData(dataArray);

        }else{
            console.log("loading");
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_Service.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}

function getRequestInfo(id){
            
    var id = id;
    var xmlhttp = new XMLHttpRequest();
    var query = "requestID=" + id;


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

                var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setRequestsInfoData(dataArray)

        }else{
            console.log("loading");
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_requestInfo.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}


function setReportData(dataArray){
    dataArray = dataArray;

    reportID = document.getElementById("reportID");
    reportStatus = document.getElementById("reportStatus");
    reportDate = document.getElementById("reportDate");
    reportResponseDate = document.getElementById("reportResponseDate");
    reportCategory = document.getElementById("reportCategory");
    ReportDescription = document.getElementById("ReportDescription");

    reportID.innerText = "RPT0-"+dataArray[0]['reportID'];
    reportStatus.innerText = dataArray[0]['reportStatus'];
    reportDate.innerText = dataArray[0]['reportDate'];
    reportCategory.innerText = dataArray[0]['reportCategory'];
    ReportDescription.innerText = dataArray[0]['reportDescription'];


    if(dataArray[0]['reportActionDate'] != null){
        reportResponseDate.innerText = dataArray[0]['reportActionDate'];
    } else {
        reportResponseDate.innerText = "NA";
    }
  
    getReportedUserInfo(dataArray[0]['reportedAccountID']);
    getReporterUserInfo(dataArray[0]['reporterAccountID']);
    
    //getServiceInfo(id)
    if(dataArray[0]['reportedRequestID'] != null){
        getRequestInfo(dataArray[0]['reportedRequestID']);
    }else {
        //RequestsInfo
        document.getElementById("RequestsInfo").innerHTML = "";
        document.getElementById("RequestsInfo").innerHTML = "<center> <h3> No Request Reported </h3></center>";


    }
    
    
    if(dataArray[0]['reportedServiceID'] != null){

        getServiceInfo(dataArray[0]['reportedServiceID']);
    }else{
        document.getElementById("ServiceInfo").innerHTML = "";
        document.getElementById("ServiceInfo").innerHTML = "<center> <h3> No Service Reported </h3></center>";


    }

    
  

    

}

function setReporterData(dataArray){

    var dataArray = dataArray;
    reporterName = document.getElementById("reporterName");
    reporterEmail= document.getElementById("reporterEmail");
    reporterUserType= document.getElementById("reporterUserType");

    reporterName.innerText = dataArray[0]['firstName'] + " " + dataArray[0]['lastName'];
    reporterEmail.innerText = dataArray[0]['userEmail'];
    reporterUserType.innerText = dataArray[0]['userType'];

}


function setReportedData(dataArray){

    var dataArray = dataArray;
    reportedUserID = document.getElementById("reportedUserID");
    reportedName= document.getElementById("reportedName");
    reportedEmail= document.getElementById("reportedEmail");
    reportedUserType = document.getElementById("reportedUserType");

    reportedUserID.innerText = dataArray[0]['userID'];
    reportedName.innerText =  dataArray[0]['firstName'] + " " + dataArray[0]['lastName'];
    reportedEmail.innerText = dataArray[0]['userEmail'];
    reportedUserType.innerText = dataArray[0]['userType'];

}

function setRequestsInfoData(dataArray){
    var dataArray = dataArray;
    requestID= document.getElementById("requestID");
    requestCategory= document.getElementById("requestCategory");
    requestTitle= document.getElementById("requestTitle");
    dueDate= document.getElementById("dueDate");
    expectedPrice= document.getElementById("expectedPrice");
    isNegotiable= document.getElementById("isNegotiable");
    RequestDescription= document.getElementById("RequestDescription");

    requestID.innerText = "RQ0-"+dataArray[0]['requestID'];
    requestCategory.innerText = dataArray[0]['requestCategory'];
    requestTitle.innerText = dataArray[0]['requestTitle'];
    dueDate.innerText = dataArray[0]['dueDate'];
    expectedPrice.innerText = "Php "+dataArray[0]['requestExpectedPrice'];
    isNegotiable.innerText = dataArray[0]['isNegotiable'];
    RequestDescription.innerText = dataArray[0]['requestDescription'];
}

function setServicesInfoData(dataArray){
    var dataArray = dataArray;
    ServiceID = document.getElementById("ServiceID");
    ServiceCategory = document.getElementById("ServiceCategory");
    ServiceTitle = document.getElementById("ServiceTitle");
    expectedPrice = document.getElementById("serviceExpectedPrice");

    ServiceID.innerText = "SVC0-"+ dataArray[0]['serviceID'];
    ServiceCategory.innerText = dataArray[0]['serviceCategory'];
    ServiceTitle.innerText = dataArray[0]['servicePosition'];
    expectedPrice.innerText = "Php"+dataArray[0]['rate'];

}