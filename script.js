"use strict";

const btnCalculate = document.getElementById("btnCalculate");
const btnReset = document.getElementById("btnReset");
const btnAdd = document.getElementById("btnAdd");
const resultOutput = document.getElementById("result");
const selector = document.getElementById("operators");
const instructions = document.getElementById("instructions");
const optionApply = new Option("Apply", "apply", false, false);
let form = document.querySelector("form");
let instrArray = [];
selector.appendChild(optionApply);

var addInstruction = () => {
	let operator = selector.options[selector.selectedIndex].value;
	console.log(operator);
	let operatorText = selector.options[selector.selectedIndex].text;
	let inputNumber = document.querySelector("input").value;
	if (inputNumber) {
		console.log("Adding new instruction to the list and instrArray: " + operatorText + " " + inputNumber + " ...");
		instrArray.push({operator:operator,number:parseInt(inputNumber)});
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

var calculateResult = (instrs) => {
    //if there is no Apply operator - show Warning to the user and terminate the function
    let warning;
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
	let arrayCopy1 = instrs;
	let arrayCopy2 = instrs;
    // only the last "apply" is taken into account
	let applyNumber = instrs.filter((instr)=>(instr.operator=="apply")).pop().number;
    // get array of instructions without "apply"s
	let instrWithoutApply = instrs.filter((instr)=>(instr.operator!="apply"));
	let result = applyNumber;
	console.log(applyNumber);
	console.log(instrWithoutApply);
    // apply all the instructions
	for (var i of instrWithoutApply) {
		console.log(i);
        //not the best idea to use window["functionname"] to call instructions, needs to be refactored
		result = window[i.operator](result, i.number);
		console.log(result);
	}
	document.getElementById("result").innerHTML = result;
    console.log("Result is calculated");
    if (document.getElementById("warning")) {
        warning = document.getElementById("warning")
        form.removeChild(warning);
    }
    return result;
}

let resetCalc = () => {
    instrArray = [];
	instructions.innerHTML = "";
	document.querySelector("input").value = "";
    document.getElementById("result").innerHTML = "N/A";
	console.log("Calculator is reset");
}

btnAdd.addEventListener("click", (e) => {
	e.preventDefault();
	addInstruction();
	e.stopPropagation();
});

btnCalculate.addEventListener("click", (e) => {
	e.preventDefault();
	calculateResult(instrArray);
    e.stopPropagation();
});

btnReset.addEventListener("click", (e) => {
	e.preventDefault();
    resetCalc();
    e.stopPropagation();
});
