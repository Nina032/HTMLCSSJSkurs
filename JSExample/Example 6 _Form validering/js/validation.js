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
    function setErrorMessage(el, message) {
        $(el).data('errorMessage', message);
    }
    function getErrorMessage(el) {
        return $(el).data('errorMessage') || el.title; 
    }
    function showErrorMessage(el) {
        let $el = $(el);
        let errorContainer = $el.siblings('.error.message');
        if(!errorContainer.length){
            errorContainer = $('<span class="error message"></span>').insertAfter($el)
        }
        errorContainer.text(getErrorMessage(el));           //Lägger till error meddelande
    }
    //-------------------------------------------------------------------------------
    //   E. Hjälp objekt som hanterar kontroll av typ
    //-------------------------------------------------------------------------------
    let validateType = {
        email: function (el) {
            let valid = /[^@]+@[^@]+/.test(el.value);           //Enkel regex som kontrollerar om vi har ett enda @ i string
            if(!valid)
            {
                setErrorMessage(el, 'Please enter a valid email!');
            }
            return valid;
        },
        number: function (el) {

        },
        date: function (el) {
            
        }
    };

}());