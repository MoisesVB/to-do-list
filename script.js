var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.classList.add("adjustline");
    input.value = "";
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);
    deleteButton.classList.add("deletebtn");
}

function addListAfterClick() {
        if (inputLength() > 0) {
            createListElement();
        }
    }

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
    }

function addLineThrough(event) {
        event.target.classList.toggle("done");
}

function removeItem(event) {
        var buttonClicked = event.target;
        var parentOfButton = buttonClicked.parentElement;
        ul.removeChild(parentOfButton);  
 }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addLineThrough);

ul.addEventListener("click", removeItem);
