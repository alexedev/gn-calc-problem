"use strict";

const btnCalculate = document.getElementById("btnCalculate");
const btnReset = document.getElementById("btnReset");
const btnAdd = document.getElementById("btnAdd");
const resultOutput = document.getElementById("result");
const selector = document.getElementById("operators");
const instructions = document.getElementById("instructions");
const form = document.querySelector("form");
let warning;
let instrArray = []; // populated with instructions, used in calculation
// "Apply" instruction is added by default
const optionApply = new Option("Apply", "apply", false, false);
selector.appendChild(optionApply);

//Adds instruction to DOM (list) and to an array used for final calculation
var addInstruction = (operator,operatorText,inputNumber) => {
	if (inputNumber) {
		console.log("Adding new instruction to the list and instrArray: " + operatorText + " " + inputNumber + " ...");
		instrArray.push({operator:operator,number:inputNumber});
        // next add it to DOM
		let liNode = document.createElement("li")
		liNode.innerHTML = operatorText + " " + inputNumber;
        let oldApplyLi; // variable to store li for Apply instruction
        if (operator == "apply") {
            liNode.setAttribute("id","apply")
            if (document.getElementById("apply")) {
                // if there is already Apply in the list, remove it
                oldApplyLi = document.getElementById("apply");
                oldApplyLi.parentNode.removeChild(oldApplyLi);
            }
            // and add new one 
            instructions.appendChild(liNode);
        } else {
            if (document.getElementById("apply")) {
                // if there is already Apply in the list, remove it
                oldApplyLi = document.getElementById("apply");
                oldApplyLi.parentNode.removeChild(oldApplyLi);
                // then add new instruction to the end
                instructions.appendChild(liNode);
                // and then return previously removed Apply to the list (so it will stay at the bottom)
                instructions.appendChild(oldApplyLi);
            } else {
                instructions.appendChild(liNode);
            }
            
        }
        
		console.log("...instruction is added");
		document.querySelector("input").value = "";
		console.log("input is cleared");
	} else {
		console.log("You need to add a number first");
	}
}

// the function calculates result, input is an array of instructions
var calculateResult = (instrs) => {
    //if there is no Apply operator - show Warning to the user and terminate the function
    if (!instrs.find((instr) => (instr.operator === "apply"))) {
        if (!document.getElementById("warning")) {
            warning = document.createElement("div");
            warning.setAttribute("id","warning");
            warning.setAttribute("class","alert alert-warning");
            warning.innerText = "You need to apply a number first";
            form.appendChild(warning);
        }
        return;
    }
    // get the Apply value (only the last "apply" is taken into account)
	let applyNumber = instrs.filter((instr)=>(instr.operator=="apply")).pop().number;
    // get array of instructions without "apply"s
	let instrWithoutApply = instrs.filter((instr)=>(instr.operator!="apply"));
	// apply all the instructions
    let result = applyNumber;
	for (var i of instrWithoutApply) {
		console.log(i);
        //not the best idea to use window["functionname"] to call instructions, needs to be refactored
		result = window[i.operator](result, i.number);
	}
    // add result to DOM instead of N/A
	document.getElementById("result").innerHTML = result;
    console.log("Result is calculated");
    // remove "no-Apply" warning if presented
    removeWarning();
    return result;
}

const removeWarning = () => {
    if (document.getElementById("warning")) {
        warning = document.getElementById("warning");
        form.removeChild(warning);
    }
}

// resets calculator
const resetCalc = () => {
    instrArray = [];
	instructions.innerHTML = "";
	document.querySelector("input").value = "";
    document.getElementById("result").innerHTML = "N/A";
    removeWarning();
	console.log("Calculator is reset");
}


// Event listeners for buttons

// Add
btnAdd.addEventListener("click", (e) => {
    // get input for a new instruction from DOM 
    let oper = selector.options[selector.selectedIndex].value;
	let operText = selector.options[selector.selectedIndex].text;
	let inputNum = parseInt(document.querySelector("input").value);
	e.preventDefault();
    // add the instruction
	addInstruction(oper,operText,inputNum);
	e.stopPropagation();
});

// Calculate
btnCalculate.addEventListener("click", (e) => {
	e.preventDefault();
    // istrArray contains all added instructions
	calculateResult(instrArray);
    e.stopPropagation();
});

// Reset
btnReset.addEventListener("click", (e) => {
	e.preventDefault();
    resetCalc();
    e.stopPropagation();
});
