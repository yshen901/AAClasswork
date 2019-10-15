function sum(...args) {
  let sum = 0;
  for(let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum; 
};

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind1 = function(context) {
  let args = Array.from(arguments);
  return () => {
    let innerArgs = Array.from(arguments);
    this.apply(context,args.slice(1).concat(innerArgs));
  };
};

Function.prototype.myBind2 = function (context,...args) {
  return (...innerArgs) => {
    this.apply(context, args.concat(innerArgs));
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let sum = 0;
      for(let i = 0; i < numArgs; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };  
  
  return _curriedSum;
};

const test= curriedSum(3)(1)(2)(3);
console.log(test);

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  
  function curried(num) {
    console.log(args);
    args.push(num);
    if (args.length === numArgs) {
      return that.apply(that, args); // that(...args)
    }
    else {
      return curried;
    }
  }
  
  return curried;  
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log(sumThree.curry(3)(4)(20)(6)); 