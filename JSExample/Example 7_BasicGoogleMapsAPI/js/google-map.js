function init() {
    let mapOptions = {
        center: new google.maps.LatLng(40.782710, -73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 10

    };
    let venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    let script = document.createElement('script'); //Skapar ett <script> element
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init'; //Lägger till värde av attributet src till elementet
    document.body.appendChild(script); //Lägger till elementet script som sista barn i body
}

window.onload = loadScript; //onload anropar loadScript()
