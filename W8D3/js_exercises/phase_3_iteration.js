

Array.prototype.bubbleSort = function() {
  let sorted = false 

  while (!sorted) {
    sorted = true 
    for (i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        sorted = false
        let temp = this[i]
        this[i] = this[i + 1]
        this[i + 1] = temp
      }
    }
  }
  return this 
}

String.prototype.substrings = function() {
  const subs = []
  for (i = 0; i < this.length; i++) {
    let temp = ""
    for (j = i; j < this.length; j++) {
      temp += this[j]
      subs.push(temp)
    }
  }
  return subs
}
