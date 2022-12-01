const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
const calories = new Map();
let elfPointer = 1;
let mostCalories = 0;
let mostCalories2 = 0;

// part 1
input.split("\n").forEach(snack => {
	const snackValue = parseInt((snack || 0), 10);

	if (snack === '') {
		if (calories.get(`Elf ${elfPointer}`) > mostCalories) mostCalories = calories.get(`Elf ${elfPointer}`);
		elfPointer++;
	}
	
	if (snack !== '') {
		calories.set(`Elf ${elfPointer}`, (calories.get(`Elf ${elfPointer}`) ?? 0) + snackValue);
	}
});

// part 2
mostCalories2 = Array.from(calories.values()).sort((a, b) => {
  return b - a;
});

console.log(mostCalories);
console.log(mostCalories2[0] + mostCalories2[1] + mostCalories2[2]);
