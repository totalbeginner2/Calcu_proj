let num1 = 0;
let num2 = 0;
let operator = null;
const displayBox = document.querySelector('.displayNum');

function add(num1,num2){
    return num1 + num2;
};

function subtract(num1,num2){
    return num1 - num2;
};

function multiply(num1,num2){
    return num1 * num2;
};

function divide(num1,num2){
    return num1 / num2;
};

function add(num1,num2){
    return num1 + num2;
};

function subtract(num1,num2){
    return num1 - num2;
};

function multiply(num1,num2){
    return num1 * num2;
};

function divide(num1,num2){
    return num1 / num2;
};



let numBox = document.querySelector('.nums');
for(let x = 1; x < 13 ;x++){
let numbers = document.createElement('div');
numbers.textContent = `${x}`;
numbers.className="numBox";
numbers.dataset.num = x;
numBox.appendChild(numbers);
numbers.style.height = '100px';
numbers.style.width = '100px';
if(x == '10'){
    numbers.textContent = '0';
    numbers.dataset.num = 0;
};
if(x == '11'){
    numbers.textContent = '.';
    numbers.dataset.num = '.';
};
if(x == '12'){
    numbers.textContent = 'C'
    numbers.className = "clearBtn";
};
};


let numButtons = document.querySelectorAll('.numBox');
numButtons.forEach((numButton) => {
    numButton.addEventListener("click", function(){
        displayBox.textContent += numButton.dataset.num;
    });
}
);


let clearButton = document.querySelector('.clearBtn');
clearButton.addEventListener("click", function (){
        clearDisplay()
    });


function clearDisplay(){
    displayBox.textContent = "";
};


function operate(num1,operator,num2){
    num2 = displayBox.textContent;
    let result = 0;
    switch(operator){
        case 'add':
           result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
           result =parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        };
        displayBox.textContent = result;
};

function setOperator(opera){
num1 = displayBox.textContent;
operator = opera;
clearDisplay();
};


let operaBtn = document.querySelectorAll('.oper');
operaBtn.forEach((operaButton) => {
        operaButton.addEventListener("click", function (){
            let operation = operaButton.dataset.opera;
                setOperator(operation);
             });
})

let equalBtn = document.querySelector('.equal');
equalBtn.addEventListener("click", function (){
        operate(num1,operator,num2);
});




