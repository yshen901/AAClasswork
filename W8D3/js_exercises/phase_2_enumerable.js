function fun1(ele) {
  console.log(ele);
}

Array.prototype.myEach = function(callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

// [1,2,3].myEach(callback)

Array.prototype.myMap = function(callback) {
  const mapped = []

  this.myEach( (el) => { //callback magic
    mapped.push(callback(el))
  } )

  return mapped
}

function fun2(ele) {
  return ele * 2;
}

// arr = [1,2,3,4,5]
// function cb(acc, ele) {
//   return acc + ele
// }

Array.prototype.myReduce = function(callback, initialValue) {
  let total = 0
  if (initialValue) total += initialValue

  this.myEach ( (el) => {
    total += callback(el)
  })

  return total
}