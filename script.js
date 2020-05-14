let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const Del = document.querySelector(".delete");
const decimal = document.querySelector(".decimal");
const percentage = document.querySelector(".percentage");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const inputNumber = (number) => {
	if (currentNumber === '0'){
		currentNumber = number;
	} else{
		currentNumber += number;
	}
};

const inputOperator = (operator) => {
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '';
};

const updateScreen = (number) => {
	calculatorScreen.value = number;
};

const calculate = () => {
	let result = '';
	switch(calculationOperator){
		case "+":
		result = parseFloat(prevNumber) + parseFloat(currentNumber);
		break
		case "-":
		result = parseFloat(prevNumber) - parseFloat(currentNumber);
		break
		case "*":
		result = parseFloat(prevNumber) * parseFloat(currentNumber);
		break
		case "/":
		result = parseFloat(prevNumber) / parseFloat(currentNumber);
		break
		default:
		break	
	}
	currentNumber = result;
	calculationOperator = '';
};

const clearAll = () =>{
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
};

inputDecimal = (dot) =>{
	if (currentNumber.includes('.')){
		return;
	}

	currentNumber += dot;
}

inputPercent = () =>{
	currentNumber = currentNumber * 0.01;
}

inputDel = () => {
	if (currentNumber === '') {
	currentNumber = '0';
	}
	currentNumber = currentNumber.slice(0,-1);
}

numbers.forEach((number) => {
	number.addEventListener("click", () =>{
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

operators.forEach((operator) =>{
	operator.addEventListener("click", () =>{
		inputOperator(event.target.value);
	});
});

equalSign.addEventListener("click", () =>{
	calculate();
	updateScreen(currentNumber);
});


clearBtn.addEventListener("click", () =>{
	clearAll();
	updateScreen(currentNumber);
});

decimal.addEventListener("click", () =>{
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

percentage.addEventListener("click", () =>{
	inputPercent(event.target.value);
	updateScreen(currentNumber);
});

Del.addEventListener("click", () =>{
	inputDel();
	updateScreen(currentNumber);
});

