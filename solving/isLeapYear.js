function isLeapYear(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		console.log(year, 'is a Leap Year');
	} else {
		console.log(year, 'is not a Leap Year');
	}
}

// const userInput = prompt('Please enter a year: ');
const userInput = 2000;
isLeapYear(userInput);

isLeapYear(1991)
