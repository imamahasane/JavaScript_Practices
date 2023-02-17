function maxInArray(numbers) {

	let l = numbers[0];

	for (let i = 0; i < numbers.length; i++) {
		const element = numbers[i];
		if (element > l) {
			l = element;
		}
	}
	return l;
}

const heights = [111, 222, 120, 167, 137, 165, 178];
const tallest = maxInArray(heights);
console.log('Tallest Person is: ', tallest);
