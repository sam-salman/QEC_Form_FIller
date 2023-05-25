const radioInputs = document.querySelectorAll("input[type='radio'][value='5']");
radioInputs.forEach(input => input.click());

const textAreas = document.querySelectorAll("textarea");
const textToAdd = "This is the text to add.";

textAreas.forEach(textArea => {
  textArea.value += textToAdd;
});
