const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const displayTop = document.querySelector('.display-top');
const displayBot = document.querySelector('.display-bot');

let firstNumber = '';
let secondNumber = '';
let total = '';
let operator = '';

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function () {
        if (operator == '') {
            operator = operatorButton.textContent;
            updateDisplayTop();
        }
        else if (operator != '') {
            clearDisplayTop();
            firstNumber = total;
            secondNumber = '';
            operator = operatorButton.textContent;

            // updateDisplayTop();
        }

    })
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function () {
        if (operator == '') {
            firstNumber += numberButton.textContent;
            updateDisplayTop()
        } else if (operator != '') {
            secondNumber += numberButton.textContent;
            updateDisplayTop()

        }

    })
})

equals.addEventListener('click', operate);

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
    displayTop.innerText = firstNumber + operator + secondNumber;
};

function updateDisplayBot() {
    displayBot.innerText = total;
};

function clearDisplayTop() {
    displayTop.innerText = '';
}

function clearDisplayBot() {
    displayBot.innerText = '';
}