/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: DONE Add an <option> tag inside the form's select for each product
  var selectEl = document.getElementById('items');
  selectEl.name = 'selectItems';
  var qtyEl = document.getElementById('quantity');
  qtyEl.name = 'qtyItems';

  for (var i in Product.allProducts) {
    var shopList = document.createElement('option');
    shopList.textContent = Product.allProducts[i].name;
    shopList.value = Product.allProducts[i].name.toLowerCase();
    selectEl.appendChild(shopList);

  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: DONE Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: DONE - Add the selected item and quantity to the cart
function addSelectedItemToCart(e) {
  // TODO: DONE suss out the item picked from the select list
  var selectedItem = e.target.items.value;

  // TODO: DONE get the quantity
  var selectedQuantity = e.target.quantity.value;

  // TODO: using those, add one item to the Cart
  // Cart.prototype.addItem(selectedItem, selectedQuantity);
  cart.addItem(selectedItem, selectedQuantity);
}

// TODO: DONE - Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var numItemsInCart = 0;
  for (var item in cart.items) {
    numItemsInCart = cart.items[item].quantity;
  }
  var cartCountEl = document.getElementById('itemCount');
  if(cartCountEl.firstChild) {
    cartCountEl.removeChild(cartCountEl.firstChild);
  }
  var countPEl = document.createElement('p');
  countPEl.textContent = 'Items in cart: ' + numItemsInCart;
  cartCountEl.appendChild(countPEl);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: DONE - Get the item and quantity from the form
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;
  // TODO: Add a new element to the cartContents div with that information
  var cartEl = document.getElementById('cartContents');
  var newItem = document.createElement('p');
  newItem.textContent = product + ': ' + quantity;
  cartEl.appendChild(newItem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
