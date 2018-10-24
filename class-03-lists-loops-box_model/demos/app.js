// JS Control Flow
// If / Else Conditions
// While Loops
// For Loops
// Do While Loops
// Switch Statement


// IF CONDITIONALS

// if (some condition is truthy) {
//   do something
// } else if (some other condition is truthy) {
//   do something else
// } else {  // Everything not captured above
//   do the default
// }

// if (some condition is truthy) {
//   do something
// }

// if (some other condition is truthy) {
//   do something else
// }

// FOR LOOPS

var nums = [1, 2, 3, 4];

// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);

// var i = 0;
// the following lines will all increment i by 1
// i = i + 1;
// i += 1;
// i++;

// for (start, stop, step) { do something for each step }
for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

for (var j = 0; j < nums.length; j++) {
  if (nums[j] % 2 === 0) {
    console.log(nums[j]);
  }
}

for (var k = 0; k < 10; k++) {
  console.log(k);
}

// WHILE LOOPS

// while (some condition) {
//   do something while condition is truthy
// }

var counter = 0;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

var numberGuess = (prompt('guess a number I am thinking of between 1 and 100'));
var randNumber = Math.round(Math.random() * 100);

console.log('random number', randNumber);

while (numberGuess !== randNumber) {
  if (numberGuess > randNumber) {
    numberGuess = (prompt('Your guess was too high. Try again'));
  } else {
    numberGuess = (prompt('Your guess was too low. Try again.'));
  }
}


// DO WHILE LOOP

// do {  // will perform the following code AT LEAST once.
  // executable code
// } while (some condition is truthy)


// SWITCH STATEMENT

// if (x) {
// } else if (y) {
// } else if (z) {}
// } else if (a) {}

var number = prompt('please provide a number option between 1 and 3');

switch (number) {
  case '1':
    alert('option 1');
    break;
  case '2':
    alert('option 2');
    break;
  case '3':
    alert('option 3');
    break;

  default:
    break;
}