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
        case "×":
            return multiply(Number(a), Number(b));

            break;
        case "÷":
            return divide(Number(a), Number(b));
            break;
    }
}

//variables 
let currentOperand = "";
let previousOperand = "";
let operation = null;
let shouldResetScreen = false;


//Obtener el primero número ingresado
let botones = document.querySelectorAll(".btn.number");

function appendNumber(e) {
    let numeroPresionado = (typeof e === "object") ? e.target.dataset.number : e;

    if (currentOperand === "0") {
        currentOperand = numeroPresionado;
    } else {
        currentOperand += numeroPresionado;
    }
    updateDisplay();
}


//actualizar la venta de .current-operand (número que se ingresa actualmente) 
// y .previous-operand (número que se ingresa despues de seleccionar un operador)
function updateDisplay() {
    let cO = document.querySelector(".current-operand");
    let pO = document.querySelector(".previous-operand");

    cO.innerText = currentOperand;
    pO.innerText = previousOperand;
}

botones.forEach((boton) => {
    boton.addEventListener("click", appendNumber);
});



//seleccionar el operador 
let operador = document.querySelectorAll(".btn.operator");

function chooseOperator(e) {
    let operadorPresionado = e.target.dataset.operator;

    if (currentOperand === "")
        return;

    if (currentOperand !== "" && previousOperand !== "") {
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


//generar la operación correcta
let igual = document.querySelector(".btn.equals");

function calculate(e) {
    if (operation === null || previousOperand === "" || currentOperand === "") return;

    let arr = previousOperand.split(" ");
    let valorPrevio = arr[0];

    currentOperand = String(operate(operation, valorPrevio, currentOperand));
    previousOperand = "";
    operation = "";

    updateDisplay();
}

igual.addEventListener("click", calculate);


//boton de liempieza


let limpiar = document.querySelector(".clear");

function limpiarEspacio() {
    let cO = document.querySelector(".current-operand");
    let pO = document.querySelector(".previous-operand");

    cO.innerText = "";
    pO.innerText = "";
    currentOperand = "";
    previousOperand = "";
    operation = null;
}

limpiar.addEventListener("click", limpiarEspacio);


//punto decimal

let puntoDecimal = document.querySelector(".punto");

function agregarPunto(e) {
    let pD = e.target.dataset.action;

    if (currentOperand === "" || currentOperand.includes(".")) return;

    currentOperand += pD;

    updateDisplay();
}

puntoDecimal.addEventListener("click", agregarPunto);


//boton de retroceso

let retroceso = document.querySelector(".retroceso");

function retroceder(e) {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

retroceso.addEventListener("click", retroceder)

// soporte de teclado

function teclado(e) {
    if (e.key >= "0" && e.key <= "9") {
        appendNumber(e.key);
    }
    // 2. Si es un operador
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        // Mapeamos el '*' del teclado a 'x' si tu switch de la calculadora usa 'x'
        let op = e.key;
        if (op === "*") op = "x";

        // Creamos un objeto similar al que espera tu chooseOperator o llamamos tu lógica directamente
        operation = op;
        if (currentOperand !== "" && previousOperand !== "") {
            calculate();
        }
        previousOperand = currentOperand + " " + operation;
        currentOperand = "";
        updateDisplay();
    }

    // 3. Si es Enter o el signo igual
    if (e.key === "Enter" || e.key === "=") {
        e.preventDefault(); // Evita que la tecla Enter vuelva a presionar el último botón clickeado
        calculate();
    }

    // 4. Si es para borrar
    if (e.key === "Backspace") {
        retroceder(); // Tu función para borrar el último dígito
    }

    // 5. Si es para limpiar todo (Escape)
    if (e.key === "Escape") {
        limpiarEspacio(); // Tu función para reiniciar la calculadora
    }

    // 6. Si es el punto decimal
    if (e.key === ".") {
        agregarPunto(); // Tu función para agregar decimales
    }
}

document.addEventListener("keydown", teclado);