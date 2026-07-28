function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0)
        return "No existe división para cero, chico";
    return a / b;
}

function operate(operator, a, b) {

    switch (operator) {
        case "+":
            return add(Number(a), Number(b));
            break;
        case "-":
            return subtract(Number(a), Number(b));
            break;
        case "x":
            return multiply(Number(a), Number(b));

            break;
        case "+":
            return divide(Number(a), Number(b));
            break;
    }
}

let currentOperand = "0";
let previousOperand = "";
let operation = null;
let shouldResetScreen = false;

let botones = document.querySelectorAll(".btn.number");

function appendNumber(e) {
    let numeroPresionado = e.target.dataset.number;

    if (currentOperand === "0") {
        currentOperand = numeroPresionado;
    } else {
        currentOperand += numeroPresionado;
    }
    updateDisplay();  
}

function updateDisplay(){
    let cO = document.querySelector(".current-operand"); 
    cO.innerText = currentOperand; 
}

botones.forEach((boton) => {
    boton.addEventListener("click", appendNumber);
});