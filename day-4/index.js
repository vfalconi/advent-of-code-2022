const assignments = require('../PuzzleInput').map(line => {
	return line.split(',').map(elf => elf.split('-').map(i => parseInt(i, 10))).flat();
});
const part1 = assignments.map(team => {
	const [ a1, a2, b1, b2 ] = team;
	if (((a1 >= b1 && a1 <= b2) && (a2 >= b1 && a2 <= b2)) ||
		((b1 >= a1 && b1 <= a2) && (b2 >= a1 && b2 <= a2))) {
		return 1;
	}
	return 0;
}).reduce((acc, cur) => acc + cur);
const part2 = assignments.map(team => {
	const [ a1, a2, b1, b2 ] = team;
	if (((a1 >= b1 && a1 <= b2) || (a2 >= b1 && a2 <= b2)) ||
			((b1 >= a1 && b1 <= a2) || (b2 >= a1 && b2 <= a2))) {
		return 1;
	}
	return 0;
}).reduce((acc, cur) => acc + cur);


console.log(part1, part2);
