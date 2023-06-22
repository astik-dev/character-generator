function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeImg(name, maxN) {
	let newImgNumber = randomNumber(1, maxN);
	let imgElem = document.querySelector(`.character__${name}`);
	imgElem.src = `img/${name}/${newImgNumber}.png`;
}

function generateNewCharacter() {
	changeImg("hair", 81);
	changeImg("face", 9);
	changeImg("gloves", 9);
	changeImg("shorts", 9);
}