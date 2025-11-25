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
        let isFormValid = false;                                    //isFormValid: kontrollera hela formulär

        //Utföra generiska kontroll
        for(let i=0; i < elements.length; i++) {
            isValid = validateRequired(elements[i]) && validateTypes(elements[i]);  //Kallar på validateRequired och validateTypes
            if(!isValid)                                                            //Om det är falsk på dessa två tester innan.
            {
                showErrorMessage(elements[i]);                                      //Visa fel meddelande
            } else {
                removeErrorMessage(elements[i]);                                    //Annars ta bort meddelande
            }
            valid[elements[i].id] = isValid;                                        //Lägg till element i valid objekt
        }

        //Utföra custom validation
        //bio
        if(!validateBio()) {                                    //Om bio-validering misslyckas
            showErrorMessage(document.getElementById('bio'));   //Visa felmeddelande för bio-fältet
            valid.bio = false;                                  //Markera bio som ogiltigt i valid-objektet
        }else {                                                 //Om bio-validering lyckas
            removeErrorMessage(document.getElementById('bio')); //Ta bort eventuellt felmeddelande
        }

        //password
        if(!validatePassword()) {                                    //Om lösenordsvalidering misslyckas
            showErrorMessage(document.getElementById('password'));   //Visa felmeddelande för lösenordsfältet
            valid.password = false;                                  //Markera lösenord som ogiltigt i valid-objektet
        } else {                                                     //Om lösenordsvalidering lyckas
            removeErrorMessage(document.getElementById('password')); //Ta bort eventuellt felmeddelande
        }

        //parental consent
        if(!validateParentsConsent()) {                                        //Om föräldramedgivande-validering misslyckas
            showErrorMessage(document.getElementById('parents-consent'));      //Visa felmeddelande för consent-fältet
            valid.parentsConsent = false;                                      //Markera parentsConsent som ogiltigt i valid-objektet
        } else {                                                               //Om föräldramedgivande-validering lyckas
            removeErrorMessage(document.getElementById('parents-consent'));    //Ta bort eventuellt felmeddelande
        }
        
        
        //Kontrollera om användare kan submita formulär?
        for(let field in valid) {          //Kontrollera egenskaper av valid objekt
            if(!valid[field]){             //Om fältet är ej valid
                isFormValid = false;       //isFormValid ska vara false
                break;                     //Avsluta loopen eftersom error finns
            }
            isFormValid = true;            //Annars är formulär valid och det är OK att submita
        }

        if(!isFormValid)            //If isFormValid är false
        {
            e.preventDefault();     //Tillåter ej submit av form
        }
    });
    
    

    //-------------------------------------------------------------------------------
    //   B. Funktioner kallas för generiska kontroll av fält i section A - meddelande
    //-------------------------------------------------------------------------------
    //Kontrollera om fält är required och att den har ett värde
    function validateRequired(el) {
        if(isRequired(el)) {                                //Om elementet är obligatoriskt
            let valid = !isEmpty(el);                           //Kontrollera om elementet inte är tomt
            if(!valid) {                                        //Om elementet är tomt
                setErrorMessage(el, 'Field is required!');     //Sätt felmeddelande att fältet krävs
            }
            return valid;                                       //Returnera valideringsresultat
        }
        return true;                                            //Om inte obligatoriskt, returnera sant
    }

    //Kontrollerar om fält är required
    function isRequired(el) {
        return((typeof el.required === 'boolean') && el.required) ||  //Om required är boolean och true
                (typeof el.required === 'string');                       //Eller om required är en sträng
    }
    //Kontrollerar om fältet är tom (eller om värde är samma som placeholder text)
    function isEmpty(el) {
        return !el.value || el.value === el.placeholder;  //Returnerar sant om värdet är tomt eller samma som placeholder
    }


    //Kontrollerar om värde matchar typen av attribute (använder objektet i slutet av skript)
    function validateTypes(el) {
        if(!el.value) return true;                                  //Om elementet är tomt, returnera sant

        let type = $(el).data('type') || el.getAttribute('type');   //Hämta typ från data-attribut eller type-attribut
        if(typeof validateType[type] === 'function'){               //Om det finns en valideringsfunktion för denna typ
            return validateType[type](el);                          //Anropa typspecifik validering
        }else {                                                     //Om ingen valideringsfunktion finns
            return true;                                            //Returnera sant (godkänd som standard)
        }
    }
    //-------------------------------------------------------------------------------
    //   C. Funktioner kallas för custom validation av fält i section A - meddelande
    //-------------------------------------------------------------------------------
    //Om användare är under 13, kontrollera tt parents consent är checked
    function validateParentsConsent() {
        let parentsConsent = document.getElementById('parents-consent');    //Hämta föräldramedgivande checkbox
        let consentContainer = document.getElementById('consent-container'); //Hämta container för checkbox
        let valid = true;                                                   //Sätt initial validering till sant

        if(consentContainer.className.indexOf('hide') === -1){              //Om checkbox visas (inte dold)
            valid = parentsConsent.checked;                                 //Uppdatera valid: är det ikryssat eller inte
            if(!valid)                                                      //Om inte ikryssat
            {
                setErrorMessage(parentsConsent,"You need your parent's consent!"); //Sätt felmeddelande
            }
        }

        return valid;                                                       //Returnera valideringsresultat
    }
    //Kontrollera om bio är mindre än eller samma som 140 chars
    function validateBio()
    {
        let bio = document.getElementById('bio');                                           //Hämta bio textarea-element
        let valid = bio.value.length <= 140;                                               //Kontrollera om bio är max 140 tecken
        if(!valid) {                                                                        //Om bio är för lång
            setErrorMessage(bio, 'Please make sure your bio does not exceed 140 characters!'); //Sätt felmeddelande
        }
        return valid;                                                                       //Returnera valideringsresultat
    }
    //Kontrollerar om lösenord är 8 eller mer chars
    function validatePassword() {
        let password = document.getElementById('password');                                     //Hämta lösenordsfält
        let valid = password.value.length >=8;                                                 //Kontrollera om lösenordet är minst 8 tecken
        if(!valid){                                                                             //Om lösenordet är för kort
            setErrorMessage(password, 'Please make sure your password has at least 8 characters!'); //Sätt felmeddelande
        }
        return valid;                                                                           //Returnera valideringsresultat
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
        let errorContainer = $(el).siblings('.error.message');   //Hämta syskon-element som innehåller felmeddelande
        errorContainer.remove();                               //Ta bort felmeddelande-elementet
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
            let valid = /^\d+$/.test(el.value);                     //Regex som kontrollerar att värdet endast innehåller siffror
            if(!valid)                                              //Om värdet inte är ett giltigt nummer
            {
                setErrorMessage(el, 'Please enter a valid number!'); //Sätt felmeddelande
            }
            return valid;                                           //Returnera valideringsresultat
        },
        date: function (el) {
            let valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value); //Regex för datumformat MM/DD/YYYY eller YYYY-MM-DD
            if(!valid)                                                                  //Om datumet inte matchar något av formaten
            {
                setErrorMessage(el, 'Please enter a valid date!');                 //Sätt felmeddelande
            }
            return valid;                                                           //Returnera valideringsresultat
        }
    };

}());  //Slut på IIFE (Immediately Invoked Function Expression)