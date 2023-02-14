function factorial(number){
  let re = 1;

  for (let i = 1; i <= number; i++){
    re *= i;
  }
  return re
}

let userInput = 9
let output = factorial(userInput)
console.log(userInput,"Factorial is: ", output)