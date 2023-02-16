function maxInArray(numbers) {
	console.log(numbers);

	for (let i = 0; i < numbers.length; i++) {
		const index = i;
		const valus = numbers[i];
		console.log(index, valus);
	}
}

const heights = [111, 222, 120, 167, 137, 165, 178];
const tallest = maxInArray(heights);
console.log('Tallest Person is: ', tallest);
