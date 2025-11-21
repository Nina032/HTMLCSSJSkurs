async function loadScript() {
    let script = document.createElement('script'); //Skapar ett <script> element
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA6myHzS10YXdcazAFalmXvDkrYCp5cLc8&libraries=maps,marker&v=weekly'; //Lägger till värde av attributet src till elementet
    document.head.appendChild(script); //Lägger till elementet script som sista barn i body
}

window.onload = loadScript; //onload anropar loadScript()
