const optionSubstract = new Option("Substract", "substract", false, false);
document.getElementById("operators").appendChild(optionSubstract);
var substract = (result, number) => {
	return result - number;
}