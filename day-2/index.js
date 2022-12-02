const strategyGuide = require('../PuzzleInput').filter(v => v !== '').map(i => {
	const p = i.split(' ');
	return {
		opponent: p[0],
		response: p[1],
	}
});
const rules = new Map([
	// key defeats value
	[ 'Rock', 'Scissors' ],
	[ 'Scissors', 'Paper' ],
	[ 'Paper', 'Rock' ],
]);
const reverseRules = new Map([
	// key defeated by value
	[ 'Rock', 'Paper' ],
	[ 'Scissors', 'Rock' ],
	[ 'Paper', 'Scissors' ],
]);
const moves = new Map([
	[ 'A', 'Rock' ],
	[ 'B', 'Paper' ],
	[ 'C', 'Scissors' ],
	[ 'X', 'Rock' ],
	[ 'Y', 'Paper' ],
	[ 'Z', 'Scissors' ],
]);
const desiredResult = new Map([
	[ 'X', 'loss' ],
	[ 'Y', 'draw' ],
	[ 'Z', 'win' ],
]);
const pointValues = new Map([
	[ 'Rock', 1 ],
	[ 'Paper', 2 ],
	[ 'Scissors', 3 ],
]);
const scoring = new Map([
	[ 'loss', 0 ],
	[ 'draw', 3 ],
	[ 'win', 6 ],
]);
const judge = (round) => {
	const opponentMove = moves.get(round.opponent);
	const response = moves.get(round.response);

	if (opponentMove === rules.get(response)) {
		return scoring.get('win');
	}

	if (response === rules.get(opponentMove)) {
		return scoring.get('loss');
	}

	return scoring.get('draw');
};
const decideMove = (round) => {
	const goal = desiredResult.get(round.response);
	const opponentMove = moves.get(round.opponent);

	if (goal === 'loss') {
		return rules.get(opponentMove);
	}

	if (goal === 'draw') {
		return opponentMove;
	}

	if (goal === 'win') {
		return reverseRules.get(opponentMove);
	}
};
const calcScore = (round) => {
	const outcome = judge(round);
	const shapeValue = pointValues.get(moves.get(round.response));
	return outcome + shapeValue;
};

const decideScore = (round) => {
	const outcome = scoring.get(desiredResult.get(round.response));
	const shapeValue = pointValues.get(decideMove(round));
	return outcome + shapeValue;
};

const part1 = strategyGuide.map(calcScore).reduce((acc, curr) => acc + curr);
const part2 = strategyGuide.map(decideScore).reduce((acc, curr) => acc + curr);

console.log(part1, part2);
