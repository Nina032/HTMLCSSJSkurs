$(document).ready(function(){ //Säkerställer att sidan laddas klart innan JQuery kod körs
    $('#myform').submit(function(event){
    // event.preventDefault(); // prevent default submit av form
    
    //serialize form som JSON
    let formData = $('#myform').serializeArray();
    let jsonObject = {};
    $.each(formData, function(index, element){
        jsonObject[element.name] = element.value;
    });
    let jsonData = JSON.stringify(jsonObject);
    
    //spara JSON data till file --(client) - använder klass Blob
    let blob = new Blob([jsonData], {type:"application/json;charset=utf-8"});
    saveAs(blob, "form_data.json");

    alert("Form data saved successfully!");
    $('#myform')[0].reset();
    });
});


/*
Grundläggande syntax: $(selector).action()

    $--> definerar åtkomst till jQuery
    selector --> (query) för att hitta HTML elements
    action() -- > JQuery action method som kallas på elementer

    Exempel:
    $(this).hide() - döljer elementet
    $("p").hide() - döljer alla <p> elements
    $(".test").hide() - döljer alla elements med class="test"
    $("#test").hide() - döljer alla elements med id="test"

*/