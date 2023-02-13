var shoping = {
	a: 4,
	b: 2,
	c: 22,
	d: 29,
	e: 40,
};

const keys = Object.keys(shoping);
console.log(keys);

const values = Object.values(shoping);
console.log(values);

// for (var i = 0; i < keys.length; i++) {
//   // console.log(keys[i])

//   var propertyName = keys[i]
//   var propertyValue = shoping[propertyName]
//   console.log(propertyName +": "+ propertyValue)
// }

for (var propertyName in shoping) {
	const value = shoping[propertyName];
	console.log(propertyName, value);
}
