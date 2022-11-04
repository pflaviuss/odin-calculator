let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //Store all components on html in JS 
    let clear = document.querySelector(".clear.btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");
    
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue= "";
        currentValue= "";
        operator="";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        calculate();
        previousScreen.textContent= '';
        currentScreen.textConent = previousValue;
    })
})

function handleNumber(num){
    if(currentValue.length <=8){
        currentValue += num;
    }
    
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue= '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator == "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "X"){
        previousValue *= currentValue;
    }else{
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) /1000;
}