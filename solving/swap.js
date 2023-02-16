let first = 55;
let second = 77;
console.log(first, second);

// ------------

/* 1st Approach */
// let n = first;
// first = second;
// second = n;
// console.log(first, second);

// ------------

/* 2nd Approach */
[first, second] = [second, first];
console.log(first, second);
