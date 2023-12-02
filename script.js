var button = document.querySelector(".add");
var Listtable = document.querySelector(".list-container");
var alertmsg = document.querySelector(".alert");
button.addEventListener("click", function () {
    var inputvalue = document.querySelector(".inputfield");
    if (inputvalue.value === "") {
        // alert("Enter a value");
        alertmsg.style.display = "block";
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
        alertmsg.style.display = "none";
        inputvalue.value = "";
        SaveData();
    }
}
)
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
function SaveData(){
    localStorage.setItem("data", Listtable.innerHTML);
}
function GetData(){
    Listtable.innerHTML = localStorage.getItem("data");
}
GetData();

