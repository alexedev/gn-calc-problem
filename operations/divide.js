const optionDivide = new Option("Divide", "divide", false, false);
document.getElementById("operators").appendChild(optionDivide);
const divide = (result, number) => {
	return result / number;
}