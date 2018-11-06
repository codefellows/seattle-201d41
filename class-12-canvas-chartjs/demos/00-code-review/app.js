'use strict';

//Ray Johnson and I worked together on this code with a tutor.
//use global variables:
var lastSet = [];
var totalClicks = 0;
var firstImg = document.getElementById('first');
var secondImg = document.getElementById('second');
var thirdImg = document.getElementById('third');
var results = document.getElementById('results'); //declare the variable results to find results in html


//set the foundation to enable a constructor to setup an object for every image downloaded
var allProducts = [];
//and to keep track of the times the image is displayed, and then instantiate the new objects->
//Constructor function for 'Product' objects:



function Product(name, imgPath, altText) {
  //(image a property on the constructor function(Product))
  this.name = name;
  this.imgPath = imgPath;
  this.altText = altText;
  this.views = 0; //the other properties havent been seen. set them to 0
  this.votes = 0; //everytime you click on an object increase this value
  allProducts.push(this); //push this whenever the object is instantiated
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


//create a random image function
function randomImage() {
  var firstRandom = Math.floor(Math.random() * allProducts.length);
  var secondRandom = Math.floor(Math.random() * allProducts.length);
  var thirdRandom = Math.floor(Math.random() * allProducts.length);

  //grab a random image from the array; access it at the index 'firstRandom' on the array:
  firstImg.src = allProducts[firstRandom].imgPath;
  secondImg.src = allProducts[secondRandom].imgPath;
  thirdImg.src = allProducts[thirdRandom].imgPath;

  //everytime a random image is called 'totaClicks' increments
  totalClicks++;
  console.log(totalClicks);
  //add an if statement to stop running at 25 clicks (stop the event listener from functioning).
  if (totalClicks === 25) {
    firstImg.removeEventListener('click', randomImage);
    secondImg.removeEventListener('click', randomImage);
    thirdImg.removeEventListener('click', randomImage);
    displayResults();
  }
};



randomImage();
//generate a string for every object
function displayResults() {
  //use a for loop to iterate through the array:
  for (var i = 0; i < allProducts.length; i++) { //start at 0. is 0 < 20? if yes, increment it by 1
    var listEl = document.createElement('li');
    listEl.textContent = allProducts[i].votes + ' votes for the ' + allProducts[i].name + ' and ' + allProducts[i].views + ' views ';
    results.appendChild(listEl);
  }
}



//add event listeners to receive the value of the callback function
firstImg.addEventListener('click', randomImage);
secondImg.addEventListener('click', randomImage);
thirdImg.addEventListener('click', randomImage);

