let inputEl = document.querySelector("input");
let ulEl = document.querySelector("ul");
const addBtn = document.querySelector(".add");
const clearAllBtn = document.querySelector(".clear");

class Tasks {
  constructor() {
    addBtn.addEventListener("click", this.renderList.bind(this));
    clearAllBtn.addEventListener("click", this._clearAllList.bind(this));
    ulEl.addEventListener("click", this._multiEventHandlers.bind(this));
  }
  renderList(ev) {
    ev.preventDefault();
    if (inputEl.value === "") {
      inputEl.focus();
    } else {
      this._newElements();
    }
    inputEl.value = "";
  }
  _multiEventHandlers(e) {
    const listEl = e.target.closest("li");
    const isSelected = listEl.firstElementChild;
    const textContent = isSelected.nextElementSibling;
    const editEl = e.target.classList.value === "edit";
    const delEl = e.target.classList.value === "del";
    this._markAsCompleted(listEl, isSelected, textContent);
    this._editList(editEl, isSelected, textContent);
    this._deleteList(listEl, delEl);
  }
  _markAsCompleted(li, isSelected, txt) {
    if (isSelected.checked === true) {
      txt.classList.add("text-secondary", "text-decoration-line-through");
      li.classList.add("list-group-item-success", "op");
      li.classList.remove("list-group-item-primary");
      isSelected.classList.add("op");
    } else {
      txt.classList.remove("text-secondary", "text-decoration-line-through");
      li.classList.add("list-group-item-primary");
      li.classList.remove("list-group-item-success", "op");
      isSelected.classList.remove("op");
    }
  }
  _editList(allowEdit, checkbox, txt) {
    if (allowEdit && !checkbox.checked) {
      txt.readOnly = false;
      txt.focus();
    }
  }
  _deleteList(li, del) {
    if (del) {
      li.remove();
    }
  }
  _clearAllList(e) {
    e.preventDefault();
    ulEl.innerHTML = "";
  }
  _newElements() {
    const liEl = document.createElement("li");
    liEl.setAttribute(
      "class",
      "list-group-item list-group-item-action list-group-item-primary"
    );

    const checkBox = document.createElement("input");
    checkBox.setAttribute("class", "form-check-input me-1");
    checkBox.type = "checkbox";

    liEl.appendChild(checkBox);

    const inputTxt = document.createElement("input");
    inputTxt.classList.add("listTxt");
    inputTxt.type = "text";
    inputTxt.setAttribute("maxlength", "30");
    inputTxt.value = `${inputEl.value}`;
    inputTxt.readOnly = true;

    liEl.appendChild(inputTxt);

    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");

    const imgEdit = new Image(25);
    imgEdit.src = "icons/edit.png";
    imgEdit.classList.add("edit");
    iconsDiv.appendChild(imgEdit);

    const imgDel = new Image(25);
    imgDel.src = "icons/remove.png";
    imgDel.classList.add("del");
    iconsDiv.appendChild(imgDel);

    liEl.appendChild(iconsDiv);
    ulEl.appendChild(liEl);
  }
}

const myTasks = new Tasks();
