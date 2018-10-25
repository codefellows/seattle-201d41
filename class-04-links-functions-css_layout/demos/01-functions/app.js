// Functions
// A series of multiple steps or instructions or block of code that is structured for reuseability, and only executed when called upon

// Reminder to talk about SCOPE

// This is a function declaration
// This is available to call anywhere above or below the declaration
function printHello() { // Name the function the same way you would name any Variable
  console.log('Hello');
  // If a return value is not specified, the function will return 'undefined' implicitely
  return 'Hello';
}

// This is a function expression
// This is available to call ONLY below the definition
var printBye = function() {
  console.log('Bye');
  return 'Bye';
};

console.log('num', num);
var num = 3;
console.log('num', num);



function addTwoNums(numOne, numTwo) {
  // add the two nums and return the total
  var sum = numOne + numTwo;
  // sum is locally scoped, and NOT available outside this function
  return sum;
}

// sum => will return undefined outside the function

addTwoNums(10, 20);
