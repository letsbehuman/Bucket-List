var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var RemoveItem = document.getElementsByClassName("bttn");


function inputLength() {
	return input.value.length;
}

// MARK AS DONE
	function toggle(event) {
		if(event.target.tagName === "LI"){
			event.target.classList.toggle("done");
		}
	}

function createListElement() {
	var addLi = document.createElement("li");
	var deleteBtn = document.createElement("button");
	addLi.appendChild(document.createTextNode(input.value));
	ul.appendChild(addLi);
	input.value = "";

// CREATE A DELETE BUTTON:
	deleteBtn.appendChild (document.createTextNode("X"));
	addLi.appendChild(deleteBtn);
	deleteBtn.onclick = removeParent;
}
	

//CALLBACK FUNCTION:

//deleteBtn.className = "bttn";


function removeParent(event) {
	event.target.parentNode.remove();
	}
for (i=0; i<RemoveItem.length; i++) {
		RemoveItem[i].addEventListener("click", removeParent);
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

button.addEventListener("click", addListAfterClick );


input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggle);


