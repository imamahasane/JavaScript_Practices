function getOdd(numbers) {
	let box = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 !== 0) {
			box += numbers[i];
		}
	}
	return box;
}

const myArray = [5, 7, 8, 10, 45, 30];
let result = getOdd(myArray);
console.log('Total sum of array: ', result);
