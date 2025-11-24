(function(){
    let $birth = $('#birthday');                        //Birthday input 
    let $parentsConsent = $('#parents-consent');        //Consent checkbox
    let $consentContainer = $('#consent-container');    //Checkbox container

    $birth.on('blur change', checkDate);

    function checkDate() {
        let dob = this.value.split('-');                            //Array från datum
        toggleParentsConsent(new Date(dob[0],dob[1] - 1, dob[2]));  //anropar toggleParentsConsent med 
    }                                                               //argument object av typen date

    function toggleParentsConsent(date) {
        if(isNaN(date)) return;                                     //Avslutar funktion om värdet är inte number
        let now = new Date();                                       //Date objekt - Dagens datum
        //Om skillnad är mindre än 13 år(ms * sec * mins * hours * days * years)
        //om användare är yngre än 13 visa paranets consent checkbox
        if((now - date) < (1000 * 60 * 60 * 24 * 365 * 13))
        {
            $consentContainer.removeClass('hide');                  //Tar bort hide class från div container
            $parentsConsent.focus();
        } else {
            $consentContainer.addClass('hide');                     //Lägger till hide som class
            $parentsConsent.prop('checked', false);                 //Sett värde av checked property till false
        }
         
    }
}());