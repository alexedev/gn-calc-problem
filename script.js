var btnCalculate = document.getElementById("btnCalculate");
var btnReset = document.getElementById("btnReset");
var btnAdd = document.getElementById("btnAdd");
var resultOutput = document.getElementById("result");

var addInstruction = () => {
	var inputNumber = document.querySelector("input").value;
	console.log("inputNumber was " + inputNumber);
	console.log("Added new instruction to the list");
	document.querySelector("input").value = "";
	console.log("input is cleared");
} 
var calculateResult = () => {console.log("calculateResult function is called")} 
var resetCalc = () => {console.log("resetCalc function is called")} 


btnAdd.addEventListener("click", function(e) {
	addInstruction();
	e.preventDefault();
});

btnCalculate.addEventListener("click", function(e) {
	calculateResult();
	console.log("Result is calculated");
	e.preventDefault();
});

btnReset.addEventListener("click", function(e) {
	resetCalc();
	console.log("Calculator is reset");
	e.preventDefault();
});



