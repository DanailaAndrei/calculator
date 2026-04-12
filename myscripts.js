function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operator(op, a, b){
    
}

let nr1, nr2, op;

let numbersDiv = document.querySelector(".numbers");
let array = [0, ".", "=", 1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach(el => {
    let digitDiv = document.createElement("button");
    digitDiv.textContent = el;
    digitDiv.setAttribute("class", "digit");
    numbersDiv.appendChild(digitDiv);
});

let operatorsDiv = document.querySelector(".operators");
array = ["÷", "x", "-", "+"];

array.forEach(el => {
    let opDiv = document.createElement("button");
    opDiv.textContent = el;
    opDiv.setAttribute("class", "operator");
    operatorsDiv.appendChild(opDiv);
});

let clearDiv = document.querySelector(".clear");
let acDiv = document.createElement("button");
acDiv.textContent = "AC";
acDiv.setAttribute("class", "ac");
clearDiv.appendChild(acDiv);
