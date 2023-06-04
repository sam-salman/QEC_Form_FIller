# Author:

This program is written by `Salman Khan` for `QEC` of the `National University Of Modern Languages, Islamabad`.

# Introduction:
This program is for filling QEC of the University.

# How to use:

1. Open the QEC(Cource or teacher) form in the browser.

2. Right-click on the web page.

3. Select "Inspect" or press Ctrl+Shift+I (or Cmd+Option+I on a Mac) to open the developer tools.

4. In the developer tools window, find the "Console" tab and click on it.

5. Copy the JavaScript code provided below or from the above code.js File.
```
const radioInputs = document.querySelectorAll("input[type='radio'][value='5']");
radioInputs.forEach(input => input.click());

const textAreas = document.querySelectorAll("textarea");
const textToAdd = "This is the text to add.";

textAreas.forEach(textArea => {
  textArea.value += textToAdd;
});
```

6. Paste the code into the console of the developer tools.

7. Press the "Enter" key to run the code.

8. The QEC form should be filled out automatically.

# Disclaimer:
`This repository is for educational purposes only. The author does not claim any ownership or responsibility for the content or code provided here. The use of this repository is at your own risk. The author is not liable for any damages or losses arising from the use of this repository or its content.`
