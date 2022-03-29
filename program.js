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
var Payee = document.new_item.payee.value;
var billTypeList = document.new_item.bil_type.value;
// is the createElement command correct??
// var createSquare = document.createElement('div');

// Functions

function addBill(){
    // get user data from fields
    document.getElementById("billTypeList").innerHTML = "Bill Type: " + bill_type;
    document.getElementById("Payee").innerHTML = "Pay To: " + payee;
    document.getElementById("AmountDue").innerHTML = "$" + amount_due;
    
    // onclick - create new div with field values
    
}

function deleteBill(){
    //create a function that will delete the bill
    //function will be triggered by a button or 'x'
}

function unpaidToPaid(){
    //change from css style 'unpaid' to css style 'paid'
    //function will be triggered by a button or check box
}
