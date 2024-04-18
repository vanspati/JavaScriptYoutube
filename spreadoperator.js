// spread operator :... allows an iterable such as an array or string to be expanded in to seprate element (unpack the elements) 

let fruits = ["A"  , "B" , "C"];
let vegtables = ["X" , "Y" , "Z"];

let food = [...fruits , ...vegtables , "P", "Q" , "R"];

console.log(food);