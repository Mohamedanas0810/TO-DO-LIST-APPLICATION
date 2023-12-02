var button = document.querySelector(".add");
var Listtable = document.querySelector(".list-container");
var alertmsg = document.querySelector(".alert");
var inputvalue = document.querySelector(".inputfield");
//While Clicking the Button
button.addEventListener("click", function () {
    var inputvalue = document.querySelector(".inputfield");
    if (inputvalue.value === "") {
        alert("Enter a value");
    }
    else {
        //Add Row by creating element
        // let newrow = document.createElement("li");
        // newrow.innerHTML = inputvalue.value;
        // Listtable.appendChild(newrow);
        //
        //Add row by adding inner html
        //\u00d7 - X symbol
        Listtable.innerHTML = Listtable.innerHTML + "<li>" + inputvalue.value + "<button>\u00d7</button></li>";
        inputvalue.value = "";
        SaveData();
    }
}
)
//While Click Enter Button
inputvalue.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        if (inputvalue.value === "") {
            alert("Enter a value");
        }
        else {
            //Add Row by creating element
            // let newrow = document.createElement("li");
            // newrow.innerHTML = inputvalue.value;
            // Listtable.appendChild(newrow);
            //
            //Add row by adding inner html
            //\u00d7 - X symbol
            Listtable.innerHTML = Listtable.innerHTML + "<li>" + inputvalue.value + "<button>\u00d7</button></li>";
            inputvalue.value = "";
            SaveData();
        }
    }
})
//For Table
Listtable.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if (e.target.tagName == "BUTTON") {
        e.target.parentElement.remove();
        SaveData();
    }
    // useCapture - parameter used in event listeners
    // false - bubbling phase ( starts from target element to root elements)
    // true - capturing phase (starts from ancestor tags to target elements)
}, false)
function SaveData() {
    localStorage.setItem("data", Listtable.innerHTML);
}
function GetData() {
    Listtable.innerHTML = localStorage.getItem("data");
}
GetData();

