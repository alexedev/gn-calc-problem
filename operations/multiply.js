const optionMultiply = new Option("Multiply", "multiply", false, false);
document.getElementById("operators").appendChild(optionMultiply);
var multiply = (result, number) => {
	return result * number;
}