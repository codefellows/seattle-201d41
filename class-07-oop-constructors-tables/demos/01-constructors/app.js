// NOTE: Removed the code from class06 (you can reference it in that class demo directory if need be)


// NOTE: FOLLOWING CODE IS DEFINITION OF CODE. YOU WILL SEE ANOTHER NOTE DOWN A WAYS THAT STATES WHEN AND WHERE WE START EXECUTING CODE.



var turtles = []; // Creates an empty container (array) to hold Turtles when they are instantiated

// Constructor function for specifying how a Turtle can be constructed
// This is our blueprint
function Turtle(name, color, ninja, arrIn) {

  console.log('This', this); // This log shows the current contextual reference of the `this` keyword

  this.name = name; // Assign the `name` parameter's value to `this.name`, which is the property belonging to the instance when a Turtle is created.
  this.color = color;
  this.ninja = ninja;
  this.age = 15;
  this.weapons = [];
  this.arrIn = arrIn;

  turtles.push(this); // Appends the new object (referenced by the contextual `this` keyword) to the turtles array in the global scope

  this.render(); // Call the `render` method belonging to the instane when instantiated.


  // NOTE: This is an anti-pattern and less efficient than working with the prototype
  // See `Turtle.prototpye.addWeapon` below the constructor for the correct syntax of adding a method to the constructor

  // this.addWeapon = function(weaponName) {
  //   this.weapons.push(weaponName);
  // };
}

Turtle.prototype.addWeapon = function (weaponName) { // Call this method like this:  turtle[0].addWeapon('katana');
  // This method is available to ANY Turtle instance created
  // The `this` keyword references the Turtle that called the method, which means there is a contextual reference to the Turtle object
  this.weapons.push(weaponName);
};

Turtle.prototype.render = function() {
  // This render method belongs to ALL Turtle instances, as a method with contextual reference to the Turtle that used it.
  var tbodyEl = document.getElementById('tbl-body'); // Anchor to HTMLElement with an ID of tbl-body
  var trEl = document.createElement('tr'); // Create a new <tr></tr>
  var thEl = document.createElement('th'); // Create a new <th></th>
  thEl.textContent = this.name; // Give the th element text content
  trEl.appendChild(thEl); // Add the th element as a child to the tr element

  // NOTE: In YOUR code, this is the point in logic where you get to write a for loop in your lab assignment today!!

  // Create three td elements for adding more cells to the tr element
  var colorEl = document.createElement('td');
  var ageEl = document.createElement('td');
  var ninjaEl = document.createElement('td');

  // Provide each of the three td elements with text content
  colorEl.textContent = this.color;
  ageEl.textContent = this.age;
  ninjaEl.textContent = this.ninja;

  // Append each of the td elements to the tr element
  trEl.appendChild(colorEl);
  trEl.appendChild(ageEl);
  trEl.appendChild(ninjaEl);

  // Finally, append the row to the tbody
  tbodyEl.appendChild(trEl);
};

function createTable() {
  // This function is used to establish ONE SINGLE table in the DOM for us to work with when we start rendering individual rows for each Turtle
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');
  var tfootEl = document.createElement('tfoot');

  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tfootEl);

  tblEl.id = 'turtle-table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tfootEl.id = 'tbl-foot';
  tblEl.className = 'tbl';
}

// NOTE: BELOW IS THE EXECUTION OF ALL THE CODE WE WROTE ABOVE.
// WITHOUT THE CALLS BELOW, NOTHING WILL RUN.

createTable(); // Calls the function to create a table with head/body/foot and IDs built into the DOM.


// Instantiate Turtles
console.log(turtles); // => []

// Below are the four lines where we actually instantiate (create) a new Turtle object for each line.
// REMINDER: Constructor functions are just functions.
// The NEW keyword is doing all the work to (1) create a new object and (2) provide contextual reference for the `this` keyword` to be used
new Turtle('Raphael', 'red', true);
new Turtle('Michaelangelo', 'orange', true);
new Turtle('Leonardo', 'blue', true);
new Turtle('Donatello', 'purple', true);

console.log(turtles); // => [Turtle {} x 4]


// NOTE: We are doing this work in the constructor with `this.render()`
// for (var i = 0; i < turtles.length; i++) {
//   turtles[i].render();
// }
