const introList = [
	"Sorry I can't come",
	"Please forgive my absence",
	"This is going to sound crazy but",
	"Get this:",
	"I can't go because",
	"I know you're going to hate me but",
	"I was minding my own business and boom!",
	"I feel terrible but",
	"I regretfully cannot attend,",
	"This is going to sound like an excuse but",
];

const scapeList = [
	"my nephew",
	"the ghost of Hitler",
	"the Pope",
	"my ex",
	"a high school marching band",
	"Dan Rather",
	"a sad clown",
	"the kid from Air Bud",
	"a professional cricket team",
	"my Tinder date",
];

const delayList = [
	"just shit the bed",
	"died in front of me",
	"won't stop telling me knock knock jokes",
	"is having a nervous breakdown",
	"gave me syphilis",
	"poured lemonade in my gas tank",
	"stabbed me",
	"found my box of human teeth",
	"stole my bicycle",
	"posted my nudes on Instagram",
];

const outputList = document.getElementById("output");
const generateButton = document.getElementById("generateButton");

function getRandomElement(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

generateButton.addEventListener("click", function () {
	const intro = getRandomElement(introList);
	const scape = getRandomElement(scapeList);
	const delay = getRandomElement(delayList);
	const output = `${intro} ${scape} ${delay}`;

	const listItem = document.createElement("li");
	listItem.textContent = output;

	// Add the newest generation at the beginning of the list
	outputList.insertBefore(listItem, outputList.firstChild);
});
