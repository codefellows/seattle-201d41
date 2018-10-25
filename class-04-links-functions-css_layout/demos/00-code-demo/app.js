// JavaScript!!
'use strict';
//Username question
var userName = prompt('What is your name?');
console.log('userName', userName);
//Instructions
alert('Hi ' + userName + '! Let\'s play a game! Answer each question with YES/Yes/y or NO/No/n based on your best guess about me!');

//score variable
var numberCorrect = 0;

//first question
var responseOne = prompt('Is purple my favorite color?');
console.log('responseOne', responseOne);
//force uppercase
var uppercaseResponseOne = responseOne.()();
console.log('uppercaseResponseOne', uppercaseResponseOne);
//first answer
if (uppercaseResponseOne === 'YES' || uppercaseResponseOne === 'Y'){
  alert('Correct! I love purple!');
  numberCorrect++;
} else {
  alert('Sorry! I love purple! Better luck next time!');
}
console.log('numberCorrect', numberCorrect);

//secondQuestion
var responseTwo = prompt('Do I like Eggplant?');
console.log('responseTwo', responseTwo);
//force uppercase
var uppercaseResponseTwo = responseTwo.()();
console.log('uppercaseResponseTwo', uppercaseResponseTwo);
//second answer
if (uppercaseResponseTwo === 'YES' || uppercaseResponseTwo === 'Y' ){
  alert('Sorry! I don\'t like eggplant! Better luck next time!');
} else {
  alert('You\'re right! I think eggplant is gross!');
  numberCorrect++;
}
console.log('numberCorrect', numberCorrect);

//third question
var responseThree = prompt('Have I been to France?');
console.log('responseThree', responseThree);
//force uppercase
var uppercaseResponseThree = responseThree.()();
console.log('uppercaseResponseThree', uppercaseResponseThree);
//third answer
if (uppercaseResponseThree === 'YES' || uppercaseResponseThree === 'Y'){
  alert('Sorry! I haven\'t been to France. I want to go, though!');
} else {
  alert('Correct! I have not been to France!');
  numberCorrect++;
}
console.log('numberCorrect', numberCorrect);

//fourth question
var responseFour = prompt('Do I have a dog?');
console.log('responseFour', responseFour);
//force uppercase
var uppercaseResponseFour = responseFour.()();
console.log('uppercaseResponseFour', uppercaseResponseFour);
//fourth answer
if (uppercaseResponseFour === 'YES' || uppercaseResponseFour === 'Y'){
  alert('You\'re right! I do have a dog! His name is Zeus!');
  numberCorrect++;
} else {
  alert('Sorry! I do have a dog! Better luck next time!');
}
console.log('numberCorrect', numberCorrect);

//fifth question
var responseFive = prompt('Is summer my favorite season?');
console.log('responseFive', responseFive);
//force uppercase
var uppercaseResponseFive = responseFive.toUpperCase();
console.log('uppercaseResponseFive', uppercaseResponseFive);
//fifth answer

if (uppercaseResponseFive === 'YES' || uppercaseResponseFive === 'Y'){
  console.log('*************IF Block************');
  alert('Sorry! My favorite season is Fall, not Summer! Better luck next time!');
} else {
  console.log('___________ELSE BLOCK__________');
  alert('You\'re right! I prefer Fall to Summer!');
  console.log('numberCorrect', numberCorrect);
  numberCorrect++;
}
console.log('numberCorrect', numberCorrect);

//sixth question
var myNumber = 17;
console.log('myNumber', myNumber);
var numberGuess = parseInt(prompt('Hey, ' + userName + ' can you guess my favorite number?'));
console.log('numberGuess', numberGuess);
var counter = 0;
console.log('counter',counter);
//if they guess wrong
while (numberGuess !== myNumber && counter < 3) {
  if (numberGuess > myNumber){
    numberGuess = parseInt(prompt(numberGuess +' is too high! Guess again!'));
  } else if (numberGuess < myNumber) {
    numberGuess = parseInt(prompt(numberGuess + ' is too low! Guess again!'));
  } else {
    numberGuess = parseInt(prompt(numberGuess + ' is not a number. Try again!'));
  }

  counter++;
  console.log('counter', counter);
}
//if they guess right
if (numberGuess === myNumber && i < 3) {
  alert('Congrats! You guessed that ' + myNumber + ' is my number!');
  numberCorrect++;
}
//if they run out of guesses
if (i === 4) {
  alert('Sorry! You\'re out of tries! My number was ' + myNumber + '!');
}

console.log('numberCorrect', numberCorrect);

//7th Question
var myVacations = ['GREECE', 'ARUBA', 'BELIZE', 'BAHAMAS', 'ENGLAND', 'MEXICO', 'THE BAHAMAS' ];
//ask question
var vacation = prompt('Where have I been on vacation?');
//force uppercase
var vacationsUppercase = vacation.()();
console.log(vacation);
console.log(vacationsUppercase);


var guesses = 0;
var isCorrect = false; //is their answer correct? false=no true=yes
while (guesses < 5 && isCorrect === false) {
  for (var j = 0; j < myVacations.length; j++ ) {
    if (vacationsUppercase === myVacations[j]){
      isCorrect = true;
    }
  }
  if (isCorrect === false){
    vacation = prompt('Try Again!');
    vacationsUppercase = vacation.()();
    console.log('vacation', vacation);
    console.log('vacationsUppercase', vacationsUppercase);
  }
  guesses++;
}

if (isCorrect === true){
  alert('Correct! I have been to Belize, Aruba, Mexico, The Bahamas, England and Greece');
  numberCorrect++;
}

if (isCorrect === false && j >= 5) {
  alert('Sorry! You\'re out of tries! I have been to Belize, Aruba, Mexico, The Bahamas, England and Greece');
}

//Score card!!
if (numberCorrect <= 3) {
  alert('You only got ' + numberCorrect + ' right! You don\'t know me very well!');
} else if (numberCorrect >= 6 ) {
  alert('You got ' + numberCorrect + ' correct! We must know each other really well!');
} else {
  alert('You got ' + numberCorrect + ' right! You know me okay! We should chat more!');
}



// Scott's solution to question 7
var cities = ['buckley', 'kent', 'seattle', 'maple valley'];
var cityResponse = prompt('Guess a city that I have lived in within WA state.');
var correct = false;

for (var c = 0; c < cities.length; c++) {
  if (cityResponse === cities[c]) {
    correct = true;
  }
}

if (correct === true) {
  alert('Congrats!');
} else {
  alert('Miss');
}
