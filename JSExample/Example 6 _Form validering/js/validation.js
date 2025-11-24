//JavaScript validation av subscribtion form
//A. Anonyma funktion som aktiveras med submit
//B. Funktioner kallas för generiska kontroll av fält i section A
//C. Funktioner kallas för custom validation av fält i section A
//D. Hjälp funktioner som hanterar fel meddelande
//E. Hjälp objekt som hanterar kontroll av typ

(function () {
    document.forms.register.noValidate = true;              // Disable HTML5 validation
    //-------------------------------------------------------------------------------
    //   A. Anonyma funktion som aktiveras med submit 
    //-------------------------------------------------------------------------------
    $('form').on('submit', function(e) {                    //När form submittas
        let elements = this.elements;                       //Samling av form controlls (inputs)
        let valid = {};                                     //Custom valid objekt
        let isValid;                                        //isValid: kontrollerar form controll
        let isFormValid;                                    //isFormValid: kontrollera hela formulär

    });
    
    

    //-------------------------------------------------------------------------------
    //   B. Funktioner kallas för generiska kontroll av fält i section A
    //-------------------------------------------------------------------------------
   

    //-------------------------------------------------------------------------------
    //   C. Funktioner kallas för custom validation av fält i section A
    //-------------------------------------------------------------------------------
   

    //-------------------------------------------------------------------------------
    //   D. Hjälp funktioner som hanterar fel meddelande
    //-------------------------------------------------------------------------------
   
    //-------------------------------------------------------------------------------
    //   E. Hjälp objekt som hanterar kontroll av typ
    //-------------------------------------------------------------------------------
   

}());