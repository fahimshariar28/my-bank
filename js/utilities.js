function getInputElementById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
function getTextElementById(textFieldId) {
  const textField = document.getElementById(textFieldId);
  const textFieldValueString = textField.innerText;
  const textFieldValue = parseFloat(textFieldValueString);
  return textFieldValue;
}
function setTextElementById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
