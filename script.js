let addText = document.getElementById("addText");
let addBtn = document.getElementById("add");
let addedText = document.getElementById("line");

const onChangeHandler = (e) => {
  console.log(e);
  addText[e.value] = e.target.value;
};

addedText.textContent = addText;

const btnHandler = () => {
  alert(`${addedText}`);
};
