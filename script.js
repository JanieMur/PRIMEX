let addText = document.getElementById("addText");
let addBtn = document.getElementById("add");
let addedText = document.getElementById("line");

const onChangeHandler = (e) => {
  console.log(e);
  addText[e.name] = e.target.value;
};

addedText.textContent = addText;
