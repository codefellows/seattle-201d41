'use strict';

//use global variables:
var ctx = document.getElementById("myChart").getContext('2d');
var totalClicks = 0; //this var tracks how many times someone clicks the images
var firstImg = document.getElementById('first');
var secondImg = document.getElementById('second');
var thirdImg = document.getElementById('third');
var results = document.getElementById('results'); //declare the variable results to find results in html
var lastShownImages = [];//keeps track of images displayed

//set the foundation to enable a constructor to setup an object for every image downloaded
var allProducts = [];
//and to keep track of the times the image is displayed, and then instantiate the new objects with name variable and an imgPath->
//Constructor function for 'Product' objects:
function Product(name, imgPath) {
  //(image a property on the constructor function(Product))
  this.name = name;
  this.imgPath = imgPath;
  this.views = 0; //the other properties havent been seen. set them to 0
  this.votes = 0; //everytime you click on an object increase this value

  var cOne = Math.floor(Math.random() * 255);
  var cTwo = Math.floor(Math.random() * 255);
  var cThree = Math.floor(Math.random() * 255);

  this.bgColor = `rgba(${cOne}, ${cTwo}, ${cThree}, 0.2)`;
  allProducts.push(this); //push this whenever the object is instantiated (into the allProducts arrary)
}
//we need a "blueprint" for creating many objects of the same "type".
//new Product instantiates (to represent or be an example of something) a new object
//The way to create an "object type", is to use an object constructor function:
new Product('bag', './assets/bag.jpg');
new Product('banana', './assets/banana.jpg');
new Product('bathroom', './assets/bathroom.jpg');
new Product('boots', './assets/boots.jpg');
new Product('breakfast', './assets/breakfast.jpg');
new Product('bubblegum', './assets/bubblegum.jpg');
new Product('chair', './assets/chair.jpg');
new Product('cthulhu', './assets/cthulhu.jpg');
new Product('dog-duck', './assets/dog-duck.jpg');
new Product('dragon', './assets/dragon.jpg');
new Product('pen', './assets/pen.jpg');
new Product('pet-sweep', './assets/pet-sweep.jpg');
new Product('scissors', './assets/scissors.jpg');
new Product('shark', './assets/shark.jpg');
new Product('sweep', './assets/sweep.png');
new Product('tauntaun', './assets/tauntaun.jpg');
new Product('unicorn', './assets/unicorn.jpg');
new Product('usb', './assets/usb.gif');
new Product('water-can', './assets/water-can.jpg');
new Product('wine-glass', './assets/wine-glass.jpg');
console.log(allProducts);
//create a random image function:
function randomImage() {
  var firstRandom = Math.floor(Math.random() * allProducts.length);
  var secondRandom = Math.floor(Math.random() * allProducts.length);
  var thirdRandom = Math.floor(Math.random() * allProducts.length);

  //generate a new image if there is duplication and use an array method to iterate through the last shown images.
  //if any of the conditions in the while loop are true then reassign the values until there isn't a duplicate.
  //name the array (allProducts); attach the methods (with a while loop); then invoke it against the value you want to check inside the array:
  while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || lastShownImages.includes(firstRandom) || lastShownImages.includes(secondRandom) || lastShownImages.includes(thirdRandom)) {
    firstRandom = Math.floor(Math.random() * allProducts.length);
    secondRandom = Math.floor(Math.random() * allProducts.length);
    thirdRandom = Math.floor(Math.random() * allProducts.length);
  }
  //once the while loop stops running update the array after identifying that the image is unique/unduplicated:
  lastShownImages[0] = firstRandom;
  lastShownImages[1] = secondRandom;
  lastShownImages[2] = thirdRandom;

  console.log(lastShownImages);

  firstImg.src = allProducts[firstRandom].imgPath;
  secondImg.src = allProducts[secondRandom].imgPath;
  thirdImg.src = allProducts[thirdRandom].imgPath;

  //increment the clicker counter
  firstImg.alt = allProducts[firstRandom].name;
  secondImg.alt = allProducts[secondRandom].name;
  thirdImg.alt = allProducts[thirdRandom].name;
  console.log(firstImg);

  //update the view count after the user is shown a photo and increment it by 1
  allProducts[firstRandom].views++;
  allProducts[secondRandom].views++;
  allProducts[thirdRandom].views++;

  //everytime a random image is called 'totaClicks' increments
  totalClicks++;
  console.log(totalClicks);
  //add an if statement to stop running at 25 clicks (stop the event listener from functioning).
  if (totalClicks > 5) {
    firstImg.removeEventListener('click', handleImageClick);
    secondImg.removeEventListener('click', handleImageClick);
    thirdImg.removeEventListener('click', handleImageClick);
    displayResults(); //call the function displayResults below
  }
}
//pass an event to the function so that you can access the properties of the event.
function handleImageClick(event) {
  console.log(event.target.alt);
  //iterate through array to check that event has been clicked
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  //in order to get a random image which allows new photos to be displayed call randomImage Function
  randomImage();
}
randomImage();
//generate a string for every object
function displayResults() {
  var names = [];
  for (var i = 0; i < allProducts.length; i++) {
    names.push(allProducts[i].name);
  }

  var votes = [];
  for (var j = 0; j < allProducts.length; j++) {
    votes.push(allProducts[j].votes);
  }

  var colors = [];
  for (var k = 0; k < allProducts.length; k++) {
    colors.push(allProducts[k].bgColor);
  }

  var chartConfig = {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: colors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  return new Chart(ctx, chartConfig);
}
//add event listeners to receive the value of the callback function
firstImg.addEventListener('click', handleImageClick);
secondImg.addEventListener('click', handleImageClick);
thirdImg.addEventListener('click', handleImageClick);
