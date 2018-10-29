// What is a JS Object??
var name = 'Michaelangelo'; // Globally scoped

function sayHello(name){ // Globally scoped
  return `Hello, ${name}, how are you today?`;
}

var turtleMichealangelo = {  // Unordered collections of key: value pairs
  // property (key): value,
  name: 'Michaelangelo',
  shell: true,
  age: 15,
  color: 'orange',
  type: 'box',
  size: 62.3,
  ninja: true,
  mutant: true,
  sayHello: function() {
    return `Hello, my name is ${this.name}, and I am ${this.size} .`;
  },
};

var turtleDonatello = {
  // property: value,
  name: 'Donatello',
  shell: true,
  age: 15,
  color: 'purple',
  type: 'box',
  size: 62.3,
  ninja: true,
  mutant: true,
  sayHello: function () {
    return `Hello, my name is Donatello.`;
  },
  render() {
    // create an element
    // provide content for that element
    // append the element to the page (in a specific place)
    // var container = document.createElement('bananas');  // This will create <bananas></bananas> BUT DOES NOT WORK
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    var messageEl = document.createElement('p');

    nameEl.textContent = this.name;
    messageEl.textContent = `I am a ninja and I am ${this.color}.`;

    container.appendChild(nameEl);
    container.appendChild(messageEl);
    console.log('container', container);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(container);
  }
};

var nums = [1, 2, 3, 4];  // arrays should generally have like data types


// call the render function and display the elements
turtleDonatello.render();
