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
    let numeroPresionado = e.target.dataset.number;

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


//generar la operación correcta
let igual = document.querySelector(".btn.equals"); 

function calculate(e){
    if(operation === null || previousOperand === "" || currentOperand === "") return; 

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

function limpiarEspacio(){
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

function agregarPunto(e){
    let pD = e.target.dataset.action; 

    if(currentOperand === "" || currentOperand.includes(".")) return; 

    currentOperand += pD; 

    updateDisplay(); 
}

puntoDecimal.addEventListener("click", agregarPunto); 


