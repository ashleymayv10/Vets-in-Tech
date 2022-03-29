// Create Array

var billType = [
    "Select Bill Type",
    "Utilities", 
    "Mortgage", 
    "Insurance",
    "Phone Bill",
    "Internet",
    "Car Payment"];

var sel = document.getElementById('billTypeList');
for (var i=0; i < billType.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = billType[i];
    opt.value = billType[i];
    sel.appendChild(opt);
}

//Define Variables
var AmountDue = document.new_item.amount_due.value;
var Payee = document.new_item.Payee.value;
var billTypeList = document.new_item.billType.value;
var dueDate = document.new_item.due_date.value;
function billData = {
    document.getElementById("billType").innerHTML = "Bill Type: " + billType;
    document.getElementById("Payee").innerHTML = "Pay To: " + Payee;
    document.getElementById("AmountDue").innerHTML = "$" + AmountDue;
    document.getElementById("dueDate").innerHTML = dueDate;
}


// Functions

function addBill(){


    
    // onclick - create new div with field values
    const createSquare = document.createElement("billSquareUnpaid");
    
        // get user data from fields
        function billData(); 
       
    
    createSquare.appendChild(billType);
}