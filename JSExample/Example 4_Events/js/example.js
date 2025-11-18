let target;

function recorderControls(e) {
    //Ett modern sätt att fånga target
    target = e.target;

    //Stop default action om det är supported
    if(e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    switch (target.getAttribute('data-state')) {
        case 'record':
            record(target);
            break;
        
        case 'stop':
            stop(target);
            break;
        //Mer case kan komma in här om vi har flera alternativ
        default:
            alert("Default case körs")
            break;
    }
}

//functions för start och stop
function record(target) {
    target.setAttribute('data-state','stop');
    target.textContent = 'stop';
}
function stop(target) {
    target.setAttribute('data-state','record');
}

document.addEventListener('click', function (e){
    recorderControls(e);
});