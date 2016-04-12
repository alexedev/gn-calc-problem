const optionMultiply = new Option("Multiply", "multiply", false, false);
document.getElementById("operators").appendChild(optionMultiply);
const funcMultiply = (number) => {
	console.log("mutiplied by " + number);
}