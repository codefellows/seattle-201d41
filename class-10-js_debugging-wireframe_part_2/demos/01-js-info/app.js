bar();
foo();

var num = 25;


console.log('one');

function foo() {
  num = 30;
  bar(10);
  console.log('two');
}


function bar(num) {
  var num = num;
  console.log(num);
}

var baz = function() {
  console.log('four');
}

baz();
