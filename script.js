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
	let arrayCopy1 = instrArray.slice();
	let arrayCopy2 = instrArray.slice();
	let applyNumber = arrayCopy1.filter((instr)=>(instr.operator=="apply")).pop().number;
	let arrayWithoutApply = arrayCopy2.filter((instr)=>(instr.operator!="apply"));
	var result = applyNumber;
	for (var i in instructions) {
		result = window[i.operator](result, i.number);
		console.log(result);
	}
	console.log(applyNumber);
	console.log(arrayWithoutApply);
	document.getElementById("result").innerHTML = result;
}


btnAdd.addEventListener("click", (e) => {
	e.preventDefault();
	addInstruction();
	e.stopPropagation();
});

btnCalculate.addEventListener("click", (e) => {
	e.preventDefault();
	calculateResult();
	console.log("Result is calculated");
});

btnReset.addEventListener("click", (e) => {
	instrArray = [];
	instructions.innerHTML = "";
	document.querySelector("input").value = "";
	console.log("Calculator is reset");
	e.preventDefault();
});