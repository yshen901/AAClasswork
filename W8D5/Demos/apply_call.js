//APPLY DEMO - makes thhe first arg "this" and the rest are arguments in array format
const obj = {
  name: "Earl Watts"
};

// weird function; how is `this` supposed to be set if we don't call
// `greet` method style?
function greet(msg) {
  console.log(`${msg}: ${this.name}`);
}

greet.apply(obj, ["Hello"]);



//CALL DEMO - makes the first arg "this" and the rest are arguments
const obj = {
  name: "Earl Watts"
};

function greet(msg1, msg2) {
  console.log(`${msg1}: ${this.name}`);
  console.log(`${msg2}: ${this.name}`);
}

greet.call(obj, "Hello", "Goodbye");