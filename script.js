const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const displayTop = document.querySelector('.display-top');
const displayBot = document.querySelector('.display-bot');

let firstNumber = '';
let secondNumber = '';
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

function updateDisplayTop() {
    displayTop.innerText = firstNumber + operator + secondNumber;
};

function updateDisplayBot() {
    displayBot.innerText = firstNumber + operator + secondNumber;

}