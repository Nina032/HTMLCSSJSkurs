//Custom meddelande med Namn, lagra namn i variabel och använda den på sidan i welcome meddelande
let greeting = "Howdy ";
let username = "Nevena";
let message = ", please check your order:"
let welcome = greeting + username + message

//Spara custom sign, beräkna antal tecken för att kunna beräkna summa att betala
let userSign = 'Montague House';
let tiles = userSign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

//Visa allt på sidan.
let el = document.getElementById('greeting'); //selectar element med id greeting
el.textContent = welcome; //sparar värde av welcome variabel i HTML element text med id greeting

let elSign = document.getElementById('userSign');
elSign.textContent = userSign;
// document.getElementById('userSign').textContent = userSign;  --> kortare sätt att skriva om vi ska selecta elementet bara en gång

let elTitles = document.getElementById('tiles');
elTitles.textContent = tiles;

let elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

let elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

let elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;