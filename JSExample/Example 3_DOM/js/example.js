let list = document.getElementsByTagName('ul')[0];
//Lägga till element till start av listan
let newItemFirst = document.createElement('li');
let newtextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newtextFirst);
list.insertBefore(newItemFirst, list.firstChild);


//Lägga till element till slut av listan
let newItemLast = document.createElement('li');
let newtextLast = document.createTextNode('cream');
newItemLast.appendChild(newtextLast);
list.appendChild(newItemLast);

//Byta färg för alla li elements att använda .cool class
let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) 
{
    listItems[i].className = 'cool'
}


//Lägga till räknare i header h2