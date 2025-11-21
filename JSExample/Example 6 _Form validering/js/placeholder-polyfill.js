(function(){    //Sätter kod i en IIFE
    //Test:Kontrollera om placeholder att är tillåtet
    if('placeholder' in document.createElement('input')){
        return;
    }

    let length = document.forms.length;                 //Räknar antal forms (inputs)
    for (let i=0; i < length; i++) {                    //Loopar genom varje av dessa
        showPlaceholder(document.forms[i].elements);    //visar placeholder
    }

    function showPlaceholder(elements) {
        for (let i = 0; i < elements.length; i++) {
            let el = elements[i];                       //Sparar element i el variabel

            if(!el.placeholder){                        // Om placeholder är inte med i elementet programmet fortsätter med nästa element
                continue;
            }
            el.style.color = '#666666';               //Byter text färg till gray
            el.value = el.placeholder;                  //Visar placeholder text som värde i input 

            addEvent(el,'focus',function(){             //Om fältet är i focus
                if(this.value === this.placeholder) {   //Om value(text i elementet) är lika med placeholder värde
                    this.value= '';                     //Tom text input
                    this.style.color = '#000'         //Gör textet svart
                }
            });

            addEvent(el,'blur',function(){              //På blur event
                if(this.value === '') {                 //Om input är tom
                    this.value= this.placeholder;       //visa placeholder som värde i input
                    this.style.color = '#666666'      //byta textfärg till gray
                }
            });
        }                                               //Slut av FOR loop
    }                                                   //Slut av metod showPlaceholder()
}());