function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextFieldValueId(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById(id) {
  console.log(id);
  document.getElementById("index-page").classList.add("hidden");
  document.getElementById("history-page").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
