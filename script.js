const btnCalculate = document.getElementById("btnCalculate");
const btnReset = document.getElementById("btnReset");
const btnAdd = document.getElementById("btnAdd");
const resultOutput = document.getElementById("result");



const addInstruction = () => {
	let inputNumber = document.querySelector("input").value;
	console.log("inputNumber was " + inputNumber);
	console.log("Added new instruction to the list");
	document.querySelector("input").value = "";
	console.log("input is cleared");
} 
const calculateResult = () => {console.log("calculateResult function is called")} 
const resetCalc = () => {console.log("resetCalc function is called")} 


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
	resetCalc();
	console.log("Calculator is reset");
	e.preventDefault();
});



