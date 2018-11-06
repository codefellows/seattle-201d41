'use strict';

// Array for collecting all of the colors
var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// HTMLElement 'hook' to the document
var colorsEl = document.getElementById('colors-container');

// Loop for the length of colors
// Create a p tag, give it content, and append it to the DOM
for (var i = 0; i < colors.length; i++) {
  var pEl = document.createElement('p');
  pEl.textContent = colors[i];

  pEl.style.color = colors[i];
  pEl.id = colors[i];

  colorsEl.appendChild(pEl);
}


var ctx = document.getElementById("myChart").getContext('2d');

var chartConfig = {
  type: 'bar',
  data: {
    labels: colors,
    datasets: [{
      label: '# of Votes',
      data: new Array(colors.length).fill(0),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
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


var myChart = new Chart(ctx, chartConfig);

colorsEl.addEventListener('click', function(event) {
  // validate the target as a p tag
  // get the id of the target p tag
  // use the id to get the index location for what data point to increment in data

  var pId = event.target.id;
  var idx = colors.indexOf(pId);

  if (idx !== -1) {
    myChart.data.datasets[0].data[idx] += 1;
    console.log(myChart.data.datasets[0].data);
    myChart.update();
  }
})
