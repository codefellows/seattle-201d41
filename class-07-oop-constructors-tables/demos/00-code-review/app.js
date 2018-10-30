
var pikeAndFirst = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

// pikeAndFirst.render();


// var turtle = {name: 'Donatello'};
// turtle.name;  // GETTER => 'Donatello'
// turtle.ninja = true;  // SETTER

// turtle.closet = {};
// turtle.closet.sweater = 'Turtle neck';
