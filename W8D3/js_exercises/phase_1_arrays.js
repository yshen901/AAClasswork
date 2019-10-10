Array.prototype.uniq = function() {
  const unique = []
  for (i = 0; i < this.length; i++)
    if (!unique.includes(this[i])) unique.push(this[i])
  return unique
}

Array.prototype.twoSum = function() {
  const pairs = []
  for (i = 0; i < this.length; i++)
    for (j = i + 1; j < this.length; j++)
      if (this[i] + this[j] === 0) pairs.push([i, j]) //always use ===
  return pairs
}

/*
  [[1, 2, 3], [4, 5, 6]]
*/

Array.prototype.transpose = function() {
  const transposed = []
  for (i = 0; i < this[0].length; i++) {
    let temp = []
    for (j = 0; j < this.length; j++)
      temp.push(this[j][i])
    transposed.push(temp)
  }
  return transposed
}