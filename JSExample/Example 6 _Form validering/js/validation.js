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
        $(el).data('errorMessage', message);                        //Sparar error message med element (kopplar till elementet)
    }   
    function getErrorMessage(el) {
        return $(el).data('errorMessage') || el.title;              //Hämtar error message eller title av element
    }
    function showErrorMessage(el) {
        let $el = $(el);                                            //Selectar element som har fel input och ska ha felmeddelande
        let errorContainer = $el.siblings('.error.message');        //Vilka som helst siblings som ska hålla error meddelande (om dom finns)
        if(!errorContainer.length){                                 //Om dom saknas i HTML 
            //Skapar <span> element som ska hålla error och lägger till det efter elementet som har fel input
            errorContainer = $('<span class="error message"></span>').insertAfter($el)
        }
        errorContainer.text(getErrorMessage(el));           //Lägger till error meddelande
    }
    function removeErrorMessage(el) {
        let errorContainer = $el.siblings('.error.message');
        errorContainer.remove();
    }
    //-------------------------------------------------------------------------------
    //   E. Hjälp objekt som hanterar kontroll av typ
    //-------------------------------------------------------------------------------
    //Kontrollerar om data är valid om inte setter error message
    //Returnerar true om valid, false om invalid
    let validateType = {
        email: function (el) {
            let valid = /[^@]+@[^@]+/.test(el.value);                   //Enkel regex som kontrollerar om vi har ett enda @ i string
            if(!valid)                                                  //Om värde av valid är inte sant
            {                               
                setErrorMessage(el, 'Please enter a valid email!');     //Setter error meddelande
            }
            return valid;                                               //Annars returnerar valid variable(sant/falsk)
        },
        number: function (el) {
            let valid = /^\d+$/.test(el.value);
            if(!valid)
            {
                setErrorMessage(el, 'Please enter a valid number!');
            }
            return valid;
        },
        date: function (el) {
            let valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.valid);
            if(!valid)
            {
                setErrorMessage(el, 'Please enter a valid date!');
            }
            return valid;
        }
    };

}());