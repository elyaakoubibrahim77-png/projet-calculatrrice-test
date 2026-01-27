const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let ans="0";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      screen.value = "0";
      return;
    }

    if (value === "DEL") {
      screen.value = screen.value.length > 1 ? screen.value.slice(0, -1) : "0";
      return;
    }

    if (value === "=") {
      try {
        screen.value = eval(screen.value);
        ans = screen.value;
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
      if (screen.value === "0") {
        screen.value = ans;
      }else {
        screen.value += ans;
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