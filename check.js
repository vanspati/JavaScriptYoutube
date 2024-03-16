// checking the conditon regarding the multiple choice option 
// if it is true then do this else do that.

const checkBox = document.getElementById("checkBox");
const visa = document.getElementById("visa");
const UPI = document.getElementById("UPI");
const cash = document.getElementById("cash");

const submit = document.getElementById("submit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){

    if(checkBox.checked){
        subResult.textContent =` you are subscribed`;
    } 
    else{
    subResult.textContent =` please subscribe to continue `;
    }
    if(visa.checked){
        paymentResult.textContent = "Visa has been selected\n";
    }
    else if(UPI.checked) {
        paymentResult.textContent = "UPI has been selected\n" ;
    }
    else if(cash.checked){
        paymentResult.textContent = "Cash has been selected \n";
    }
    else{
        paymentResult.textContent = `you must select payment mode`;
    }
}