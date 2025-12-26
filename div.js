const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } 
    else if (value === "⌫") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } 
    else if (value === "=") {
      try {
        currentInput = currentInput
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
