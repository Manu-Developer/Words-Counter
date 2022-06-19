const userInput = document.getElementById("user-input");
const btnClear = document.getElementById("btn-clear");
const wordsCounter = document.getElementById("words-counter");

const printNumberWords = (string) => {
	string = string.replace(/\s+/g, " ").trim();
	let stringIntoArray = string.split(" ");
	wordsCounter.textContent = `Words: ${stringIntoArray.length}`;
};

userInput.addEventListener("keyup", () => {
	printNumberWords(userInput.value);
});

btnClear.addEventListener("click", () => {
	userInput.value = "";
	wordsCounter.textContent = "Words:";
});
