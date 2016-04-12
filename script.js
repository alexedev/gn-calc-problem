"use strict";

const btnCalculate = document.getElementById("btnCalculate");
const btnReset = document.getElementById("btnReset");
const btnAdd = document.getElementById("btnAdd");
const resultOutput = document.getElementById("result");
const selector = document.getElementById("operators");
const optionApply = new Option("Apply", "apply", false, false);
const instructions = document.getElementById("instructions");
selector.appendChild(optionApply); 

let calcArray = [];


const funcApply = (num) => {
   
}

const addInstruction = () => {
	"use strict";
	let operator = selector.options[selector.selectedIndex].value;
	let inputNumber = document.querySelector("input").value;
	console.log("Adding new instruction to the list and calcArray: " + operator + inputNumber + " ...");
	calcArray.push({operator:operator,number:inputNumber});
	console.log("...instruction is added");
	document.querySelector("input").value = "";
	console.log("input is cleared");
}

//test addInstruction with funcAdd


const calculateResult = () => {console.log("calculateResult function is called")} 
const resetCalc = () => {console.log("resetCalc function is called")} 


btnAdd.addEventListener("click", (e) => {
	addInstruction();
	console.log("calcArray: " + calcArray);
	e.preventDefault();
	e.stopPropagation();
});

btnCalculate.addEventListener("click", (e) => {
	calculateResult();
	console.log("Result is calculated");
	e.preventDefault();
});

btnReset.addEventListener("click", (e) => {
	resetCalc();
	console.log("Calculator is reset");
	e.preventDefault();
});