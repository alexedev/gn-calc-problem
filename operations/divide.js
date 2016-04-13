const optionDivide = new Option("Divide", "divide", false, false);
document.getElementById("operators").appendChild(optionDivide);
var divide = (result, number) => {
	return result / number;
}