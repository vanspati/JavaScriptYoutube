 /* switch = can be an efficient replcecement to many else if statement   */ 

// //  let day = 2;

//  switch(day){
//      case 1 : console.log("Monday"); 
    
//     case 2 : console.log("tuesday"); 
    
//     case 3 : console.log("wednesday"); 
    
//     case 4 : console.log("thurday"); 
    
//     case 5 : console.log("friday"); 
    
//     case 6 : console.log("Satday"); 
    
//     case 7 : console.log("sunday"); 
    
// default:
//     console.log(`${day} is not a day`);    
// }


let testScore = 45;
let letterGrade ;

switch (true) {
    case testScore >= 90:
        letterGrade ="O";
        break;
    case testScore >= 80:
        letterGrade ="A";
        break;
    case testScore >= 70:
        letterGrade ="B";
        break;
    case testScore >= 50:
        letterGrade ="C";
        break;
    case testScore >= 40:
        letterGrade ="FAIL";
        break;
    default:
            letterGrade="FAIL"
    }


console.log(letterGrade);
