(function(){
    let $bio = $('#bio');  
    let $bioCount = $('#bio-count');

    //visa counter när fält är focused och updaterar class efter antal tecken kvar
    $bio.on('focus', updateCounter);
    $bio.on('keyup', updateCounter);

    //när vi lämnar textarea, döljer vi counter (om vi inte har för många tecken)
    $bio.on('blur', function() {
        if($bioCount.text() >= 0) {
            $bioCount.addClass('hide');
        }
    });

    function updateCounter() {
        let count = 140 - $bio.val().length;
        let status = '';
        if(count < 0) {
            status = 'error';
        } else if (count <=15) {
            status = 'warn';
        }else {
            status = 'good';
        }

        //tar bort föra classer
        $bioCount.removeClass('error warn good hide');
        //lägger till ny class
        $bioCount.addClass(status);
        $bioCount.text(count);
    }

}());