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
    //   B. Funktioner kallas för generiska kontroll av fält i section A - meddelande
    //-------------------------------------------------------------------------------
    //Kontrollera om fält är required och att den har ett värde

    //Kontrollerar om fält är required
    function isRequired(el) {
        return((typeof el.required === 'boolean') && el.required) ||
                (typeof el.required === 'string');
    }
    //Kontrollerar om fältet är tom (eller om värde är samma som placeholder text)
    function isEmpty(el) {
        return !el.value || el.value === el.placeholder;
    }


    //Kontrollerar om värde matchar typen av attribute (använder objektet i slutet av skript)

    //-------------------------------------------------------------------------------
    //   C. Funktioner kallas för custom validation av fält i section A - meddelande
    //-------------------------------------------------------------------------------
    //Om användare är under 13, kontrollera tt parents consent är checked
    function validateParentsConsent() {
        let parentsConsent = document.getElementById('parents-consent');
        let consentContainer = document.getElementById('consent-container');
        let valid = true;

        if(consentContainer.className.indexOf('hide') === -1){      //Om checkbox visas
            valid = parentsConsent.checked;                         //updaterar valid: är det checked eller inte
            if(!valid)
            {
                setErrorMessage(parentsConsent,"You need your parent's consent!");
            }
        }

        return valid;
    }
    //Kontrollera om bio är mindre än eller samma som 140 chars
    function validateBio()
    {
        let bio = document.getElementById('bio');
        let valid = bio.value.length <= 140;
        if(!valid) {
            setErrorMessage(bio, 'Please make sure your bio does not exceed 140 characters!');
        }
        return valid;
    }
    //Kontrollerar om lösenord är 8 eller mer chars
    function validatePassword() {
        let password = document.getElementById('password');
        let valid = password.value.length >=8;
        if(!valid){
            setErrorMessage(password, 'Please make sure your password has at least 8 characters!');
        }
        return valid;
    }
    

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