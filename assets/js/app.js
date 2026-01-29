const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const historyPanel = document.getElementById("historyPanel");
const historyList = document.getElementById("historyList");
const toggleHistory = document.getElementById("toggleHistory");

const history = [];
let lastAnswer = "";


toggleHistory.addEventListener("click", () => {
  historyPanel.style.display =
    historyPanel.style.display === "block" ? "none" : "block";
});


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    
    if (value === "AC" || value === "C") {
      screen.value = "0";
      return;
    }

    
    if (value === "DEL") {
      screen.value =
        screen.value.length > 1 ? screen.value.slice(0, -1) : "0";
      return;
    }

    
    if (value === "=") {
      try {
        const expression = screen.value;
        const result = eval(expression);

        lastAnswer = result;

        
        history.unshift(`${expression} = ${result}`);
        if (history.length > 5) history.pop();

        historyList.innerHTML = "";
        history.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          historyList.appendChild(li);
        });

        screen.value = result;
      } catch {
        screen.value = "Error";
      }
      return;
    }

    
    if (value === "%") {
      screen.value = (parseFloat(screen.value) / 100).toString();
      return;
    }

    
    if (value === "Ans") {
      if (lastAnswer !== "") {
        screen.value =
          screen.value === "0" ? lastAnswer : screen.value + lastAnswer;
      }
      return;
    }

    
    if (screen.value === "0") {
      screen.value = value;
    } else {
      screen.value += value;
    }
  });
});