'Use Strict';

var userName = prompt('Hello friend!\nWhat is your name?');
alert('Welcome to the site ' + userName + '!\nLet us play a guessing game');
console.log('Checking userName after prompt', userName);
alert('Please respond to the following questions with Yes or No answers');

var correctGuess = 0;

//Question 1
function yesNo1() {
  var responseOne = prompt('Did I graduate from Indiana University?');
  console.log('Checking responseOne after prompt', responseOne);
  if (responseOne.toLowerCase() === 'yes' || responseOne.toLowerCase() === 'y') {
    alert('Correct!');
    correctGuess++;
  } else {
    alert('We should spend more time together!');
  }
}
yesNo1();

//Question 2
function yesNo2() {
  var responseTwo = prompt('My favorite movie is Shaun of the Dead');
  console.log('Checking responseTwo after prompt', responseTwo);
  if (responseTwo.toLowerCase() === 'yes' || responseTwo.toLowerCase() === 'y') {
    alert('Correct!');
    correctGuess++;
  } else {
    alert('We should spend more time together!');
  }
}
yesNo2();

//Question 3
function yesNo3() {
  var responseThree = prompt('My favorite band is THe Postal Service');
  console.log('Checking responseThree after prompt', responseThree);
  if (responseThree.toLowerCase() === 'no' || responseThree.toLowerCase() === 'n') {
    alert('We should spend more time together!');
  } else if (responseThree.toLowerCase() === 'yes' || responseThree.toLowerCase() === 'y') {
    alert('Correct!');
    correctGuess++;
  } else {
    alert('We should spend more time together. Please use Yes or No!');
  }
}
yesNo3();

//Question 4
function yesNo4() {
  var responseFour = prompt('Is my favorite food sushi?');
  console.log('Checking responseFour after prompt', responseFour);
  if (responseFour.toLowerCase() === 'yes' || responseFour.toLowerCase() === 'y') {
    alert('Correct!');
    correctGuess++;
  } else {
    alert('We should spend more time together!');
  }
}
yesNo4();

//Question 5
function yesNo5() {
  var responseFive = prompt('Is my favorite animal the dog?');
  console.log('Checking responseFive after prompt', responseFive);
  if (responseFive.toLowerCase() === 'yes' || responseFive.toLowerCase() === 'y') {
    alert('Correct!');
    correctGuess++;
  } else {
    alert('We should spend more time together so I can tell you why dogs are the best!');
  }
}
yesNo5();

//QUESTION 6
function yesNo6() {
  var yearGuess = parseInt(prompt(userName + ' please guess what year I was born.'));
  var yearBorn = 1988;
  var counter = 0;

  while (yearBorn !== yearGuess && counter < 3) {
    counter++;
    console.log('counter', counter);
    if (yearGuess > yearBorn) {
      yearGuess = parseInt(prompt('Your guess was too high. Try again'));
    } else if (yearGuess < yearBorn) {
      yearGuess = parseInt(prompt('Your guess was too low. Try again.'));
    }
  }
  console.log('Checking yearGuess after prompt', yearGuess);
  if (yearGuess === yearBorn) {
    alert('Correct! I was born in ' + yearBorn);
    correctGuess++;
  }
}
yesNo6();

//QUESTION 7 check 8/25 lecture youtube to do this - get much less complicated
function stateQuestion() {
  var state = ['INDIANA', 'ILLINOIS', 'CALIFORNIA', 'NEW YORK', 'NORTH CAROLINA'];
  var correct = false; //check this out!
  var stateGuess = prompt('Please guess what state I have lived in besides Washington?').toUpperCase();
  var counter = 5;

  // while(counter) // counter is 0   => falsey
                    // counter is >0  => truthy
  // while(!<falsey>) // => truthy

  console.log('before while');
  while(counter) {
    console.log('inside while');
    for (var i = 0; i < state.length; i++) {
      if (state[i] === stateGuess) {
        correct = true;
      }
    }

    // if (correct === true) {
    if (correct) {
      alert('Correct!');
      correctGuess++;
      break;
    } else {
      stateGuess = prompt('Incorrect. Try again.').toUpperCase();
      counter--;
    }
  }


  // for (var counter = 0; counter < 5; counter++) {
  //   if (state === stateGuess[counter]) {
  //     alert('Correct!');
  //     correctGuess++;
  //   } else {
  //     alert('Incorrect');
  //   }
  // }
}
stateQuestion();


alert('Thank you for playing. You got ' + correctGuess + ' correct.');
