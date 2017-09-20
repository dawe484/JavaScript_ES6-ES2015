'use strict';

//var a = 'test a';
//let b = 'test b';

//console.log(a);
//console.log(b);

function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log('var', a);
  }
  console.log('var', a);
}

function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log('let', a);
  }
  console.log('let', a);
}

testVar();
testLet();

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//console.log(i); // Uncaught ReferenceError: i is not defined

const colors = [];

colors.push('red');
colors.push('blue');

//colors = 'green'; // Uncaught TypeError: Assignment to constant variable.

console.log(colors);
