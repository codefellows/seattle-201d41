// var userName = prompt("What's your name?");  // Double quotes
// var userName = prompt('Whats your name?');  // Bad grammar
var userName = prompt('What\'s your name?');  // Escape character

// if (some condition evaluates to Truthy) {
//  Do Something
// } else {
//  Do something else
//  }

if (userName.length >= 3) {
  alert('Welcome to the site, ' + userName + '.');
} else {
  alert('Your name is short. Thanks, ' + userName + '.');
}

var userAge = prompt('How old are you?');
console.log(typeof (userAge));

alert('Please respond to the following questions with Y/y/yes/YES or no...');
// var responseOne = prompt('Was I born in WA state?');
// var upperResponseOne = responseOne.toUpperCase();

// if (responseOne === 'Y') {
//   alert('Congrats. You know me pretty well.');
// } else if (responseOne === 'y') {
//   alert('Congrats. You know me pretty well.');
// } else if (responseOne === 'YES') {
//   alert('Congrats. You know me pretty well.');
// } else if (responseOne === 'yes') {
//   alert('Congrats. You know me pretty well.');
// } else {
//   alert('Sorry, you were wrong.');
// }

// if (responseOne === 'Y' || responseOne === 'y' || responseOne === 'YES' || responseOne === // 'yes') {
//   alert('Congrats. You know me pretty well.');
// } else {
//   alert('Sorry, you were wrong.');
// }

var responseOne = prompt('Was I born in WA state?').toUpperCase();

if (responseOne === 'Y' || responseOne === 'YES') {
  alert('Congrats. You know me pretty well.');
} else {
  alert('Sorry, you were wrong.');
}
