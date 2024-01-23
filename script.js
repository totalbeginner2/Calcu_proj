let num1 = [];
let num2 = [];
let operator = null;
let firstNumInit = true;
let secondNumInit = false;
let result = null;
const displayBox = document.querySelector('.displayNum');


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
        if(firstNumInit == true){
            num1 += numButton.dataset.num;
        }   else if(firstNumInit == false && secondNumInit == true){
            num2 += numButton.dataset.num;
            displayBox.textContent = num2;
        }

    });
}
);



let clearButton = document.querySelector('.clearBtn');
clearButton.addEventListener("click", function (){
        clearDisplay()
    });


function clearDisplay(){
    displayBox.textContent = "";
    num1 = [];
    num2 = [];
    operator = null;
    firstNumInit = true;
    econdNumInit = false;
    result = null;
};


function operate(num1,operator,num2){  
    switch(operator){
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            displayBox.textContent = result;
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            displayBox.textContent = result;
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            displayBox.textContent = result;
            break;
        case 'divide':
            result = parseFloat(num1) / parseFloat(num2);
            displayBox.textContent = result;
            break;
        };

};



let operaBtn = document.querySelectorAll('.oper');
operaBtn.forEach((operaButton) => {
        operaButton.addEventListener("click", function (){
        if( firstNumInit == true && secondNumInit == false){ 
            operator = operaButton.dataset.opera;
            firstNumInit = false;
            secondNumInit = true; 
        // sets the operator being selected then initializes num2.
        }
        else if(num2.length != 0){ //if num1 and num2 exists already, and the user clicks the operator button again, the calculator operates with the 2 numbers inputted first.
            operate(num1,operator,num2);
            num1 = result;
            result = null;
            num2 = [];
            operator = operaButton.dataset.opera;
        }
             });
})

let equalBtn = document.querySelector('.equal');
equalBtn.addEventListener("click", function (){
        operate(num1,operator,num2);
        firstNumInit = true; //Initializes back to num1
        secondNumInit = false;
        num1 = result; //the result of the operation will be stored to the first number or 'num1' to be used in another calculation
        result = null;
        num2 = [];
        operator = null;
});




