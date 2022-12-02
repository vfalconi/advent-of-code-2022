const fs = require('fs');
const puzzleInput = () => {
	const contents = fs.readFileSync('./input.txt', 'utf-8');
	return contents.split("\n");
};

module.exports = puzzleInput();
