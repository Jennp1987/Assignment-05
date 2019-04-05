/*eslint-env browser*/

//STEP 1

/*
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};


function message() {
    "use strict";
    window.alert("I have been clicked");
}
*/

//STEP 2

/*
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

function message() {
    "use strict";
    window.alert("I have been clicked");
}

window.onload = function () {
    "use strict";
    $("myButton").onclick = message;
};
*/


//STEP 3


/*
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var message =  function () {
    "use strict";
    window.alert("I have been clicked");

};

window.onload = function () {
    "use strict";
    $("myButton").addEventListener('click', message);
};
*/


//STEP 4

/*
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

window.onload = function () {
    "use strict";
    $("myButton").addEventListener('click', function () {
        "use strict";
        window.alert("I have been clicked");
    });
    
};
*/

//STEP 5




//STEP 6

/*
window.onload = function () {
    "use strict";
    document.getElementById("redirect").addEventListener('click', function () {
        window.alert("The link has been clicked");
        event.preventDefault();
    });  
}
*/

//STEP 7

/*
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

window.onload = function () {
    "use strict";
     $("myButton").addEventListener('click', function () {
        var userInput7 = document.getElementById("textStep7").value;
        window.alert(userInput7);
        $("myButton").disabled = true;
    });
};
*/


//STEP 8


/*
var originalSize = function () {
    "use strict";
    window.open('newpage.html', '', 'width=300,height=300');
    
};

window.onload = function () {
    "use strict";
    document.getElementById("step8Button").addEventListener('click', originalSize);
    window.resizeTo(500, 300);
};
*/


//STEP 9

/*
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
    
};

var clear;
window.onload = function () {
    "use strict";
    $("startButtonStep9").addEventListener("click", function () {
        clear = window.setInterval(function () {
            window.console.log('learning JavaScript is Fun!');
        }, 2000);
    });
    $("stopButtonStep9").addEventListener("click", function () {
        window.clearInterval(clear);
    });
};
*/

//STEP 10

/*
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
    
};

window.onload = function () {
    "use strict";
    $('step10Button').addEventListener("click", function() { 
        alert(document.getElementById('step10List').value)
    });
};
*/
