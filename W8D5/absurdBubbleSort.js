const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? `, function (response) {
    if (response === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(1, 2, function (bool) {
//   console.log(bool);
// });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === (arr.length - 1)) {
    console.log(arr);
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function sortCompletionCallback(arr) {
  console.log(`The sorted array is: ${arr}`)
  reader.close();
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps){
      //IMPORTANT: this is inside the scope of parent function, so we can call arr, and outerBubbleSortLoop
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop); 
    } else {
      sortCompletionCallback (arr)
    }
  }

  outerBubbleSortLoop(true)
}

absurdBubbleSort([4, 1, 2, 3], sortCompletionCallback);