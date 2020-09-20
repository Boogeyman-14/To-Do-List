function showLists() {
  //Create list element
  let li = document.createElement("li");

  //Target input field
  let inputValue = document.querySelector("#addList").value;

  //Create text from input
  let textAdd = document.createTextNode(inputValue);

  //Set Attribute
  li.setAttribute("id", "todoLists");
  //Add text to list element
  li.appendChild(textAdd);

  //If nothing is typed
  if (inputValue === "") {
    alert("You must type something..");
  } else {
    //Add the list element inside of ul
    document.querySelector("#items-info").appendChild(li);
  }

  //clear out the typed text
  document.querySelector("#addList").value = "";

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("far");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  //Create Icon element
  var icon = document.createElement("I");

  //Add class of trash icon
  icon.className = "far fa-trash-alt";

  //Add it to list element
  li.appendChild(icon);

  //Remove when clicked on the icon
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// function resetLists() {
//   document.querySelector("li").remove();
// }

function deleteList() {
  document.querySelector("li").remove();
}

//Enter to add to list
var triggerEnter = document.querySelector("#addList");
triggerEnter.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".btn-dark").click();
  }
});
