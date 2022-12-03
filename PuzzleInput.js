const fs = require('fs');
const puzzleInput = () => {
	const contents = fs.readFileSync('./input.txt', 'utf-8').split("\n");
	contents.pop();
	return contents;
};

module.exports = puzzleInput();
