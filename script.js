"use strict";

const btnCalculate = document.getElementById("btnCalculate");
const btnReset = document.getElementById("btnReset");
const btnAdd = document.getElementById("btnAdd");
const resultOutput = document.getElementById("result");
const selector = document.getElementById("operators");
const instructions = document.getElementById("instructions");
const optionApply = new Option("Apply", "apply", false, false);
let instrArray = [];
selector.appendChild(optionApply); 

const addInstruction = () => {
	let operator = selector.options[selector.selectedIndex].value;
	console.log(operator);
	let operatorText = selector.options[selector.selectedIndex].text;
	let inputNumber = document.querySelector("input").value;
	if (inputNumber) {
		console.log("Adding new instruction to the list and instrArray: " + operatorText + " " + inputNumber + " ...");
		instrArray.push({operator:operator,number:inputNumber});
		let liNode = document.createElement("li")
		liNode.innerHTML = operatorText + " " + inputNumber;
		instructions.appendChild(liNode);
		console.log("...instruction is added");
		document.querySelector("input").value = "";
		console.log("input is cleared");
	} else {
		console.log("You need to add a number first");
	}
}


const calculateResult = () => {
	let arrayToFiler = instrArray;
	let applyNumber = arrayToFiler.filter((instr)=>(instr.operator=="apply")).pop();
	let arrayWithoutApply = instrArray.filter((instr)=>(instr.operator!="apply"));
	console.log(applyNumber);
	console.log(arrayWithoutApply);
	for (instruction in instrArray) {
		
	}
}


btnAdd.addEventListener("click", (e) => {
	addInstruction();
	e.preventDefault();
	e.stopPropagation();
});

btnCalculate.addEventListener("click", (e) => {
	calculateResult();
	console.log("Result is calculated");
	e.preventDefault();
});

btnReset.addEventListener("click", (e) => {
	instrArray = [];
	instructions.innerHTML = "";
	document.querySelector("input").value = "";
	console.log("Calculator is reset");
	e.preventDefault();
});