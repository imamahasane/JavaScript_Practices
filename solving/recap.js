// 1. variable
var myName = 'Khan';

// math operation: +, -, *, /
// Shorthand: +=, -=, *=, /=, ++, --

// 2. Array
var friend = ['imam', 'naima', 'samiul', 'apon'];

// 3. Conditional: >, <, >=, <=, ==, ===, !=, !==
if (friend.length < 2) {
	console.log('fokir tor kno friend nai.');
} else {
	console.log('Congratulations! tomar besh valoi friend asa.');
}

// 4. Loops: while, for loop, for in, for of, do while

// while loops
var number = 0;
while (number <= 6) {
	console.log(number);
	number++;
}

// for loops
console.log('welcome our for loops');
for (var i = 0; i <= 6; i++) {
	console.log(i);
}


// 5. Function
function isMoonUp(time) {
  if (time < 7){
    console.log("Uthe nai bro")
  }
  else if (time > 7){
    console.log("Uthe nai bro")
  }
  else{
    console.log("kn sokal and onik bristi hoitese")

  }

}

var result = isMoonUp(4)

// 6. Object
var jantus = {
  h: 5.7,
  age: 22,
  name: "Janina made",
}

