
// JavaScript function has built in arguments property

function swapValues() {
  let args = Array.prototype.slice.call(arguments);
  console.log(args);
  console.log('inside', arguments);
}

swapValues('sdf', 'aasdf'); // -> inside [Arguments] { '0': 1, '1': 2 }

function example(...args) {
  console.log(args);
}
example('example', 3, 5); // args will be spread into an array -> ['example', 3, 5]
