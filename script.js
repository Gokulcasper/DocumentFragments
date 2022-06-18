// Create Element By Using DOM
inputButtonId.addEventListener("click", () => {
  let inputTxtId = document.getElementById("input-txt-id");
  let inputButtonId = document.getElementById("input-button-id");
  let inputList = document.getElementById("input-list");

  const li = document.createElement("li");
  const text = document.createTextNode(inputTxtId.value);
  li.className = "input-item";
  li.append(text);
  inputList.append(li);
});
