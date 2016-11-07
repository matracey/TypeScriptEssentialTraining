// var, let & const

// var: not contained within block scopes in JS.
// let: contained within the block scope of the below loop.
// const: contained wihtin the scope, and cannot be changed. 

var container = document.getElementById('container');

for (var x = 0; x <= 5; x++) {
    const counter = x;
    counter = 1;
}

console.log(counter);