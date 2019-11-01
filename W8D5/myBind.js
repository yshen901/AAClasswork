Function.prototype.myBind = function (context) {
  return () => {
    this.apply(context);
  }
}



//Tester
class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

console.log("1")
turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

console.log("2")
boundTurnOn(); // should say "Turning on a lamp"
console.log("3")
myBoundTurnOn(); // should say "Turning on a lamp"