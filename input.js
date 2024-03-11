
// // easy = window prompt
// // professional = HTML textbox 

// let username = window.prompt("whats is your username ?");
// console.log(username);
let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
}