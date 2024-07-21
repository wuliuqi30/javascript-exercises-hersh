const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
  //assumes input is a single array of numbers
	// result = 0;
  // console.log(`numbers is ${numbers}, length ${numbers.length}`);
  // for (i=0; i <numbers.length; i++){
  //   result += +numbers[i];
  // }
  return numbers.reduce((total,element)=> total + element,0);
};

const multiply = function(numbers) {
  //assumes input is a single array of numbers
  return numbers.reduce((total,item) => total * item, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
  // n >=0
	result = 1;
  for (i=1; i <= n; i++){
    //console.log(`i is ${i}`);
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
