/*eslint-env browser*/

var employees = [
    ["Sally Smith", "Quality Assurance", "3423"],
    ["Mark Martin", "VP Sales", "3346"],
    ["John Johnson", "Marketing", "3232"],
    ["Mark Zimmerman", "HR", "3333"],
    ["Jillian Davids", "Secretary", "3535"]
];

//ANONYMOUS HELPER FUNCT. GETS ELEMENT FROM DOM 
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
    
};

//CLEARS TABLE
//LOOPS THROUGH ARRAY AND ADDS TO TABLE & ADDS DELETE BUTTONS
var i;
var displayTable = function () {
    "use strict";
    var table = $("employeeTable");
    for (i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    for (i = 0; i < employees.length; i++) {
        var employee = employees[i];
        var row = table.insertRow(-1);
        row.insertCell(-1).innerHTML = employee[0];
        row.insertCell(-1).innerHTML = employee[1];
        row.insertCell(-1).innerHTML = employee[2];
        var td = row.insertCell(-1); 
        var deleteBtn = document.createElement('input');
        deleteBtn.type = "button";
        deleteBtn.className = "deleteBtn";
        deleteBtn.value = "Delete";
        deleteBtn.onclick = (function (i) {return function () {deleteEmployee(i); }; })(i);
        td.appendChild(deleteBtn);
    }
    //DISPLAYS EMPLOYEE COUNT
    $("employeeCount").innerHTML = "Displaying " + employees.length + " employees";
};
    
    
//FUNCTION THAT GETS CALLED WHEN ADD BUTTON IS CLICKED
var addEmployee = function () {
    "use strict";
    var problem = false;
    var name = $("name").value;
    if (name.length === 0) {
        $("nameError").innerHTML = "Name is required";
        problem = true;
    }
    else {
        $("nameError").innerHTML = "";
    }
    var title = $("title").value;
    if (title.length === 0) {
        $("titleError").innerHTML = "Title is required";
        problem = true;
        
    }
    else {
        $("titleError").innerHTML = "";
        
    }
    var extension = $("extension").value;
    if (extension.length === 0) {
        $("extensionError").innerHTML = "Extension number is required";
        problem = true;  
        
    }
    else {
        $("extensionError").innerHTML = "";
    }
    if (problem) {
        return false;
    }
    employees.push([name, title, extension]);
    displayTable();
    //window.localStorage.employees = employees;
    return false;
    
    
};
//FUNCTION THAT GETS CALLED WHEN DELETE BUTTON IS CLICKED
var deleteEmployee = function (employeeNumber) {
    "use strict";
    employees.splice(employeeNumber, 1);
    //window.localStorage.employees = employees;
    displayTable();
};

var init = function () {
    "use strict";
    displayTable();
    $("addEmployeeForm").onsubmit = function () {
        return addEmployee();
    };
};

window.addEventListener("load", init);

