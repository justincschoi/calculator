const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const displayTop = document.querySelector('.display-top');
const displayBot = document.querySelector('.display-bot');
const decimalButton = document.getElementById('decimal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

let firstNumber = '';
let secondNumber = '';
let total = '';
let operator = '';
let currentInput = '';

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function () {
        if (operator == '') {
            operator = operatorButton.textContent;
            updateDisplayTop();
        }
        else {
            firstNumber = total;
            secondNumber = '';
            operator = operatorButton.textContent;
            updateDisplayTop();
        }

    })
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function () {
        if (operator == '') {
            firstNumber += numberButton.textContent;
            if (firstNumber.includes('.')) {
                decimalButton.disabled = true;
            } else {
                decimalButton.disabled = false;
            }
            updateDisplayTop();
        }
        else {
            secondNumber += numberButton.textContent;
            if (secondNumber.includes('.')) {
                decimalButton.disabled = true;
            } else {
                decimalButton.disabled = false;
            }
            updateDisplayTop();
        }
    });
});

equals.addEventListener('click', operate);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', undo);

function operate() {
    if (operator == '+') {
        add();
        updateDisplayBot();
    }
    else if (operator == '-') {
        subtract();
        updateDisplayBot();
    }
    else if (operator == '*') {
        multiply();
        updateDisplayBot();
    }
    else if (operator == '/') {
        divide();
        updateDisplayBot();
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
    if (total !== '') {
        displayTop.innerText = 'ANS ' + operator + secondNumber;
    } else {
        displayTop.innerText = firstNumber + operator + secondNumber;
    }
};

function updateDisplayBot() {
    displayBot.innerText = total;
};

function clear() {
    displayTop.innerText = '';
    displayBot.innerText = '';
    firstNumber = '';
    secondNumber = '';
    total = '';
    operator = '';
}

function undo() {
    if (operator === '' && firstNumber !== '') {
        firstNumber = firstNumber.slice(0, -1);
    } else if (operator !== '' && secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
    } else if (operator !== '') {
        operator = '';
    }

    if (total !== '') {
        total = '';
        updateDisplayBot();
    }
    updateDisplayTop();
}