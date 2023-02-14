function evenORodd(n) {
	if (n % 2 === 0) {
		console.log('true');
	} else if (n % 2 !== 0) {
		console.log('false');
	} else {
		console.log('Invalid Number.');
	}
}

// let userInput = prompt("Please Enter Your Input: ");
let userInput = 68

evenORodd(userInput);
