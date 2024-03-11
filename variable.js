// constant variable that cant be changed 

const PI = 3.14159; // aply const
let radius ;
let circumference ;

// radius = window.prompt(`enter the radius of a circle `);
radius=Number;


document.getElementById(`mysubmit`).onclick = function(){
   radius = document.getElementById(`mytext`).value
   radius = Number(radius);
   circumference = 2*PI *radius;
   document.getElementById(`h3`).textContent = circumference + "CM" ;

}
// console.log(`circumference`);