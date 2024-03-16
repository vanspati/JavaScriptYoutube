// /nested if  statement/


// if statements  are used to execute a block of code based on
const mytext = document.getElementById("mytext");
const submit = document.getElementById("mysubmit");
const resultElement = document.getElementById( "resultElement" );
 
let age;


mysubmit.onclick = function(){

    age = mytext.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent =`you are old enough to acces this website`;
    }
    else if(age ==0 ){
            resultElement.textContent =`YOU cant acces this website , you are just born`;
    }
    else if (age >=18){
            resultElement.textContent =`You are old enough to acces this website`;
    }
    else if(age <0){
    resultElement.textContent=`your age cant be below 0`;
    }
    else{
        resultElement.textContent=`you must be 18+ to enter this site`;
    }
}