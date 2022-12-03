const input = require('../PuzzleInput');
const rucksacks = input.map(sack => {
	const first = new Set();
	const second = new Set();
	sack.substr(0, (sack.length / 2)).split('').forEach(item => first.add(item));
	sack.substr((sack.length / 2), sack.length).split('').forEach(item => second.add(item));
	return [ first, second ];
});
const teams = [];
const priorities = new Map([
	[ 'a', 1 ],
	[ 'b', 2 ],
	[ 'c', 3 ],
	[ 'd', 4 ],
	[ 'e', 5 ],
	[ 'f', 6 ],
	[ 'g', 7 ],
	[ 'h', 8 ],
	[ 'i', 9 ],
	[ 'j', 10 ],
	[ 'k', 11 ],
	[ 'l', 12 ],
	[ 'm', 13 ],
	[ 'n', 14],
	[ 'o', 15 ],
	[ 'p', 16 ],
	[ 'q', 17 ],
	[ 'r', 18 ],
	[ 's', 19 ],
	[ 't', 20 ],
	[ 'u', 21 ],
	[ 'v', 22 ],
	[ 'w', 23 ],
	[ 'x', 24 ],
	[ 'y', 25 ],
	[ 'z', 26 ],
	[ 'A', 27 ],
	[ 'B', 28 ],
	[ 'C', 29 ],
	[ 'D', 30 ],
	[ 'E', 31 ],
	[ 'F', 32 ],
	[ 'G', 33 ],
	[ 'H', 34 ],
	[ 'I', 35 ],
	[ 'J', 36 ],
	[ 'K', 37 ],
	[ 'L', 38 ],
	[ 'M', 39 ],
	[ 'N', 40 ],
	[ 'O', 41 ],
	[ 'P', 42 ],
	[ 'Q', 43 ],
	[ 'R', 44 ],
	[ 'S', 45 ],
	[ 'T', 46 ],
	[ 'U', 47 ],
	[ 'V', 48 ],
	[ 'W', 49 ],
	[ 'X', 50 ],
	[ 'Y', 51 ],
	[ 'Z', 52 ],
]);
const duplicates = rucksacks.map(sack => {
	const first = Array.from(sack[0]);
	const second = Array.from(sack[1]);
	return first.filter(p => second.includes(p));
}).flat();
const part1 = duplicates.map(item => priorities.get(item)).reduce((acc, curr) => acc + curr);

let teamPointer = 0;
input.forEach(elf => {
	if (teams[teamPointer] === undefined) teams[teamPointer] = [];
	teams[teamPointer].push(new Set(elf.split('')));
	if (teams[teamPointer].length === 3) teamPointer++;
});

const badges = teams.map(team => {
	const badge = [];
	team[0].forEach(item => {
		if (team[1].has(item) && team[2].has(item)) {
			badge.push(item);
		}
	});
	return badge;
}).flat();

const part2 = badges.map(item => priorities.get(item)).reduce((acc, curr) => acc + curr);


console.log(part1, part2);
