/*eslint-env browser*/

//ANONYMOUS HELPER FUNCT. GETS ELEMENT FROM DOM 
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
    
};

//HANDLES ALL EVENT LISTENERS
function init() {
    "use strict";
    $("inputDiv").addEventListener("click", enter)
    $("equal").addEventListener("click", calculate)
    
}
//FOR EQUAL BUTTON
function calculate() {
    "use Strict";
    var calc = $("result");
    // eval the string stored in the result textbox
    var output = eval(calc.value);
    calc.value = output;
}

//PASSING VALUE OF SELECTED OBJECT 
function enter(event) {
    "use strict";
    //value of the button that the user clicked on.
    var val = event.path[0].defaultValue;
    //rejection filter to eject = key
    if ( val === "=") 
        return;
    var calc = $("result");
    // taking result textbox and adding value of button 
    calc.value = calc.value + val;
    
}


window.addEventListener("load", init);
