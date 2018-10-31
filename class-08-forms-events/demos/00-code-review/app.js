var locations = [];

function Location(storeLocation, minCustomersPerHour, maxCustPerHour, avgCookiesSoldPerCust, hoursOpen) {
  this.storeLocation = storeLocation;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSoldPerCust = avgCookiesSoldPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.hoursOpen = hoursOpen;
  this.totalCookiesPerDay = 0;

  locations.push(this);

  this.addCustomersPerHour(this.minCustomersPerHour, this.maxCustPerHour);
  this.addHourlySales(); // Called this function in the right place to trigger data generation
  this.render();
}

Location.prototype.addCustomersPerHour = function (min, max) {
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var randomCustNumber = Math.floor(Math.random() * (max - min + 1) + min);
    this.customersPerHour.push(randomCustNumber);
  }
};

Location.prototype.addHourlySales = function() {
  // Will generate number of customers per hour using the min/cust and max/cust
  // this.addCustomersPerHour(this.minCustomersPerHour, this.maxCustPerHour);
  // loop to create and push a cookies per hour amount to pair with each hour open
  for(var i = 0; i < this.hoursOpen.length; i++) {
    var perHour = Math.round(this.customersPerHour[i] * this.avgCookiesSoldPerCust);
    this.cookiesPerHour.push(perHour);
    // creates a total amount of cookies for the whole day by adding up each cookies per hour amount
    this.totalCookiesPerDay += perHour;
  }
}

Location.prototype.render = function() {
  var tableBodyElement = document.getElementById('tbl-body'); // Anchor to sales.html element w/ ID  table-content
  // var tableHeaderElement = document.createElement('thead'); // This will create a table header element tag
  var tableRowElement = document.createElement('tr'); // This will create a table row element tag

  var tableHeadElement = document.createElement('th'); // This will create a table head element tag
  tableHeadElement.textContent = this.storeLocation;
  tableRowElement.appendChild(tableHeadElement);

  for(var i = 0; i < this.hoursOpen.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    tableRowElement.appendChild(tdEl);
  }

  tableBodyElement.appendChild(tableRowElement);



  // This is appending the th element to the table body
  // tableHeadElement.appendChild(tableBodyElement);
  // tableBodyElement.appendChild(tableHeadElement);
  // // This defines the content of the th as the hours open
  // tableHeadElement.textContent = this.hoursOpen;

  // // This appends tr to the th
  // tableRowElement.appendChild(tableHeadElement);
  // // This defines the content of tr as the different locations
  // tableRowElement.textContent = this.storeLocations;

  // //Creates td element for adding cells to the tr element
  // var totalCookiesPerDayElement = document.createElement('td');

  // //Provide content to td element
  // totalCookiesPerDayElement.textContent = this.cookiesPerHour;

  // // This appends tds to tr
  // totalCookiesPerDayElement.appendChild(tableRowElement);

  // //Append tr to body
  // tableBodyElement.appendChild(tableRowElement);
};

function createHeader() {
  var tableHeaderElement = document.createElement('thead');
  tableHeaderElement.id = 'tbl-head';
  return tableHeaderElement;
}

function createFooter() {
  var tableFooterElement = document.createElement('tfoot');
  tableFooterElement.id = 'tbl-foot';
  return tableFooterElement;
}

function createTable() {
  // This function is used to establish ONE SINGLE table in the DOM for us to work with when we start rendering individual rows for each storeLocation
  var mainElement = document.getElementById('main-content');
  var tableElement = document.createElement('table');
  var tableBodyElement = document.createElement('tbody');

  tableElement.id = 'daily-sales-table';
  tableBodyElement.id = 'tbl-body';

  mainElement.appendChild(tableElement);
  tableElement.appendChild(createHeader());
  tableElement.appendChild(tableBodyElement);
  tableElement.appendChild(createFooter());

}

// NOTE: BELOW IS THE EXECUTION OF ALL THE CODE WE WROTE ABOVE.
// WITHOUT THE CALLS BELOW, NOTHING WILL RUN.
createTable();

console.log(locations);

// inputs to create then display table with locations

var firstAndPike = new Location('1st and Pike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
// var seatacAirport = new Location('Sea-Tac Airport', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
// var seattleCenter = new Location('Seattle Center', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
// var capitolHill = new Location('Capitol Hill', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
// var alki = new Location('Alki', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);


console.log(locations);