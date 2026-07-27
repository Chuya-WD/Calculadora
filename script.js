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
