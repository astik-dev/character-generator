let hairFolder = 1;

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeImg(name, maxN) {
	let newImgNumber = randomNumber(1, maxN);
	let imgElem = document.querySelector(`.character__${name}`);

	if (name == "face") {
		hairFolder = newImgNumber;
	} else if (name == "hair") {
		imgElem.src = `img/${name}/${hairFolder}/${newImgNumber}.png`;
		return;
	}

	imgElem.src = `img/${name}/${newImgNumber}.png`;
}

function generateNewCharacter() {
	changeImg("face", 9);
	changeImg("hair", 9);
	changeImg("gloves", 9);
	changeImg("shorts", 9);
}