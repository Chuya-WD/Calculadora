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

let currentOperand = "";
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

function updateDisplay() {
    let cO = document.querySelector(".current-operand");
    let pO = document.querySelector(".previous-operand");

    cO.innerText = currentOperand;
    pO.innerText = previousOperand; 
}

botones.forEach((boton) => {
    boton.addEventListener("click", appendNumber);
});


let operador = document.querySelectorAll(".btn.operator");

function chooseOperator(e) {
    let operadorPresionado = e.target.dataset.operator;

    if (currentOperand === "")
        return;

    if (currentOperand !== "" && previousOperand !== "" ) {
        calculate();
    }

    operation = operadorPresionado;
    previousOperand = currentOperand + " " + operation;
    currentOperand = "";
    updateDisplay();
}

operador.forEach((operador) => {
    operador.addEventListener("click", chooseOperator);

});