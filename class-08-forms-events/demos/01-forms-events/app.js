var pEl = document.getElementById('p-click');

function changeColor(event) {
  // console.log(event);
  if (event.target.className === 'green') {
    event.target.className = 'black';
  } else {
    event.target.className = 'green';
  }
}

pEl.addEventListener('click', changeColor);


// FORM DATA
var formEl = document.getElementById('form-data');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  // console.log(event.target.ta.value);
  var textInput = event.target.t.value;
  var numberInput = event.target.n.value;
  var passwordInput = event.target.p.value;
  var emailInput = event.target.e.value;

  var pText = document.createElement('p');
  var pNumber = document.createElement('p');
  var pPassword = document.createElement('p');
  var pEmail = document.createElement('p');

  pText.textContent = textInput;
  pNumber.textContent = numberInput;
  pPassword.textContent = passwordInput;
  pEmail.textContent = emailInput;

  var resultsEl = document.getElementById('results');
  resultsEl.appendChild(pText);
  resultsEl.appendChild(pNumber);
  resultsEl.appendChild(pPassword);
  resultsEl.appendChild(pEmail);


  event.target.t.value = '';
  event.target.n.value = '';
  event.target.p.value = '';
  event.target.e.value = '';
});
