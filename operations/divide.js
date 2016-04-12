const optionDivide = new Option("Divide", "divide", false, false);
document.getElementById("operators").appendChild(optionDivide);
const funcDivide = (number) => {
	console.log("divided by " + number);
}