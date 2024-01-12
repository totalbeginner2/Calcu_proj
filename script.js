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
  switch(operator){

  };
};

function setOperator(opera){

};


let operaBtn = document.querySelectorAll('.oper');
operaBtn.forEach((operaButton) => {
        operaButton.addEventListener("click", function (){
                console.log(operaButton.dataset.opera);
             });
})



//let samplebutton = document.querySelector('.opera');
//samplebutton.addEventListener("click", function(){
 //   let numBox = document.querySelector('.display');
 //   let numtemp = numBox.innerText;
  //  console.log(numtemp);
//});




