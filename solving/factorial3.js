function factorial(number){
  let n = 1;
  let result = 1
  while (n <= number){
    result *= n;
    n++
  }
  return result
}

let userInput = 9
let output = factorial(userInput)
console.log(userInput,"Factorial is: ", output)