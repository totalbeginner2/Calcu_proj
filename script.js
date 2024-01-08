//

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

function operate(num1,operator,num2){
if (operator == 'add'){
    return add(num1,num2);
};
if (operator == 'subtract'){
    return subtract(num1,num2);
};
if (operator == 'multiply'){
    return multiply(num1,num2);
};
if (operator == 'divide'){
    return divide(num1,num2);
};
};

function calc(){
const numBox = document.querySelector('.nums');
for(let x = 1; x < 13 ;x++){
let numbers = document.createElement('div');
numbers.textContent = `${x}`;
numbers.className="numBox";
numbers.classList.add(`${x}`);
numBox.appendChild(numbers);
numbers.style.height = '100px';
numbers.style.width = '100px';
if(x == '10'){
    numbers.textContent = '0';
    numbers.classList.remove("10");
    numbers.classList.add("0");
};
if(x == '11'){
    numbers.textContent = '.'
    numbers.classList.remove('11');
    numbers.classList.add(".");
};
if(x == '12'){
    numbers.textContent = 'C'
    numbers.className = "clearBtn";
};
};
};

calc();

function createDisplay(num){
    let numBox = document.querySelector('.displayNum');
    numBox.textContent += num;
    
}

function numClick (){
let numButtons = document.querySelectorAll('.numBox');
numButtons.forEach((numButton) => {
    numButton.addEventListener("click", function(){
        createDisplay(numButton.classList[1]);
    });
}
);
};

let clearButton = document.querySelector('.clearBtn');
clearButton.addEventListener("click", function (){
    let numBox = document.querySelector('.displayNum');
    numBox.textContent = "";
})
numClick();


//let samplebutton = document.querySelector('.opera');
//samplebutton.addEventListener("click", function(){
 //   let numBox = document.querySelector('.display');
 //   let numtemp = numBox.innerText;
  //  console.log(numtemp);
//});




