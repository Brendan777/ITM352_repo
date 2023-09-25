
// Declaring variables per instructions
let age = 25; // my current age
let fav_num = 7;
let day_of_birth = 24;
let month_of_birth = 3;

/* Do two calculations with some variables using different 
precedence to show how precedence works */

let calculation1 = age + fav_num / day_of_birth * month_of_birth;
let calculation2 = (age + fav_num) / day_of_birth * month_of_birth;

// Send results of calculations to the web page
document.getElementById("result1").innerHTML = calculation1;
document.getElementById("result2").innerHTML = calculation2;
