const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const displayTop = document.querySelector('.display-top');
const displayBot = document.querySelector('.display-bot');

let firstNumber = '';
let secondNumber = '';
let total = 0;
let operator = '';

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function () {
        operator = operatorButton.textContent;
        updateDisplayBot();
    })
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function () {
        if (operator == '') {
            firstNumber += numberButton.textContent;
            updateDisplayBot()
        } else if (operator != '') {
            secondNumber += numberButton.textContent;
            updateDisplayBot()

        }

    })
})

equals.addEventListener('click', operate);

function operate() {
    if (operator == '+') {
        add();
        updateDisplayTop();
    }
    else if (operator == '-') {
        subtract();
        updateDisplayTop();
    }
    else if (operator == '*') {
        multiply();
        updateDisplayTop();
    }
    else if (operator == '/') {
        divide();
        updateDisplayTop();
    }

};

function add() {
    total = parseFloat(firstNumber) + parseFloat(secondNumber);
};

function subtract() {
    total = parseFloat(firstNumber) - parseFloat(secondNumber);
}

function multiply() {
    total = parseFloat(firstNumber) * parseFloat(secondNumber);
}

function divide() {
    total = parseFloat(firstNumber) / parseFloat(secondNumber);
}

function updateDisplayTop() {
    displayTop.innerText = " = " + total;
};

function updateDisplayBot() {
    displayBot.innerText = firstNumber + operator + secondNumber;
};