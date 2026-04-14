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

function operate(op, a, b){
    if(op == "+")
        return add(a, b);
    if(op == "-")
        return subtract(a, b);
    if(op == "x")
        return multiply(a, b);
    if(op == "÷")
        return divide(a, b);
    return a;
}

let nr1, nr2, op, dotExists = false, opUsed = false;
let numbersDiv = document.querySelector(".numbers");
let operatorsDiv = document.querySelector(".operators");
let clearDiv = document.querySelector(".clear");
let array = [0, ".", "=", 1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach(el => {
    let digitDiv = document.createElement("button");
    digitDiv.textContent = el;
    digitDiv.setAttribute("class", "digit");
    numbersDiv.appendChild(digitDiv);
});

array = ["÷", "x", "-", "+"];

array.forEach(el => {
    let opDiv = document.createElement("button");
    opDiv.textContent = el;
    opDiv.setAttribute("class", "operator");
    operatorsDiv.appendChild(opDiv);
});

let acDiv = document.createElement("button");
acDiv.textContent = "AC";
acDiv.setAttribute("class", "ac");
clearDiv.appendChild(acDiv);

let displayDiv = document.querySelector(".display");
let clickables = document.querySelectorAll(".digit, .operator, .ac");

clickables.forEach(e => {
    e.addEventListener("click", e => {
        let clicked = e.target.textContent;
        let displayed = displayDiv.textContent;
        if(isNaN(clicked) == false){
            if(op == "="){
                displayDiv.textContent = "";
                dotExists = false;
                op = null;
                a = null;
                b = null;
                opUsed = false;
            }
            if(opUsed == true){
                displayDiv.textContent = clicked;
                opUsed = false;
            }
            else
                displayDiv.textContent += clicked;
        }
        else{
            if(clicked == "AC"){
                displayDiv.textContent = "";
                dotExists = false;
                op = null;
                a = null;
                b = null;
                opUsed = false;
            }
            else if(clicked == "." && dotExists == false){
                if(op != null || displayed){
                    displayDiv.textContent += clicked;
                    dotExists = true;
                }
                else{
                    displayDiv.textContent = 0 + clicked;
                    dotExists = true;
                }
            }
            else if(["÷", "x", "-", "+", "="].includes(clicked) && (opUsed == false || op == "=")){
                opUsed = true;
                dotExists = false;
                if(op == null){
                    a = displayed;
                    op = clicked;
                }
                else{
                    b = displayed;
                    displayDiv.textContent = operate(op, Number(a), Number(b));
                    op = clicked;
                    a = displayDiv.textContent;
                    b = null;
                }
            } else op = clicked;
        }
    });
});