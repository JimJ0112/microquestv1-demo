
// show report form

function showReportForm(id,transactionID,type,userType){
    reportPopUpBack = document.getElementById("reportPopUpBack");
    reportPopUpBack.style.display = "block";

    
    ReportedAccountType = document.getElementById("ReportedAccountType");
    TransactionReportIDInput = document.getElementById("TransactionReportIDInput");
    TransactionTypeInput = document.getElementById("TransactionTypeInput");
    

    console.log(TransactionReportIDInput);
    ReportedAccountID.value = id;
    TransactionReportIDInput.value = transactionID;
    TransactionTypeInput.value = type;

    getProfile(id,userType);

}

function hideReportForm(){
    reportPopUpBack = document.getElementById("reportPopUpBack");
    reportPopUpBack.style.display = "none";



}

function getProfile(id,userType){
    var query = "userID=" + id +"&userType="+userType;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_publicProfile.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
           

            dataArray = JSON.parse(dataArray);
            console.log(dataArray);
            setReportUserData(dataArray);
  

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
}


function setReportUserData(dataArray){
    var dataArray = dataArray;

    ReportedAccountProfile = document.getElementById("ReportedAccountProfile");
    ReportedAccountName = document.getElementById("ReportedAccountName");
    ReportedAccountEmail = document.getElementById("ReportedAccountEmail");
    ReportedAccountType = document.getElementById("ReportedAccountType");


    
    ReportedAccountProfile.src = dataArray[0]["userPhoto"];
    ReportedAccountName.innerText = dataArray[0]["userName"];
    ReportedAccountEmail.innerText = dataArray[0]["userEmail"];
    ReportedAccountType.innerText = dataArray[0]["userType"];
    
}


function otherProblems(){
    var reportType = document.getElementById("reportType").value;
    var otherReportType = document.getElementById("otherReportType");

    console.log("something else");

    if(reportType === "Something Else"){
        otherReportType.style.display = "block";
    }else{
        otherReportType.style.display = "none";
        
    }
    
}


function showReportProofFile(event){
    var reportProofOutputBackground = document.getElementById("reportProofOutputBackground");
    var reportProofOutput = document.getElementById("reportProofOutput");
    var reportProof = document.getElementById("reportProof");
    reportProofOutput.src =  URL.createObjectURL(event.target.files[0]);
    reportProof.style.display = "none";
    reportProofOutputBackground.style.display = "grid";
}

function closeImage(){
    var reportProofOutputBackground = document.getElementById("reportProofOutputBackground");
    var reportProofOutput = document.getElementById("reportProofOutput");
    var reportProof = document.getElementById("reportProof");
    reportProofOutputBackground.style.display = "none";
    reportProof.style.display = "block";

    
}