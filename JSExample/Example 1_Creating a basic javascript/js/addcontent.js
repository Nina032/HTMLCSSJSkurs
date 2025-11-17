//VARIABLES
let today = new Date();
let hourNow = today.getHours();
let greeting;

//Vilkor kontroll --> spara text i variabel
//Om tiden är innan 12  -- > Good morning!
//Om tiden är efter 12 --> Good afternoon!
//Om tiden är efter 18 --> Good evening!
//Annat --> Welcome
if(hourNow > 18) {
    greeting = "Good evening!";
} else if (hourNow > 12) {
    greeting = "Good afternoon!";
} else if (hourNow > 0) {
    greeting = "Good morning!";
}else {
    greeting = "Welcome";
}

//skriva ut variabel till sidan
document.write("<h3>" + greeting + "</h3>")