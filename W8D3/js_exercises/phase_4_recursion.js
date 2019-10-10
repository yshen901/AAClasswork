function range(start, end) {
  if (start > end) return []
  if (start === end)  return [end]

  return [start].concat(range(start + 1, end))
} 

function sumRec(arr) {
  if (arr.length === 0) return 0
  
  return arr[0] + sumRec(arr.slice(1, arr.length)) //JS splicing
}

function exponent_1(base, exp) {

  if (exp === 0) return 1
  
  if (exp > 0) {
    return base * exponent_1(base, exp - 1)
  } else {
    return exponent_1(base, exp + 1) / base
  }
}

function exponent_2(base, exp) {
  if (exp === 1) return base
  if (exp === 0) return 1
  if (exp === -1) return 1/base

  if (exp % 2 === 0) {
    return exponent_2(base, exp/2) ** 2
  } else if (exp > 0) {
    return base * (exponent_2(base, (exp - 1) / 2) ** 2)
  } else {
    return (exponent_2(base, (exp + 1) / 2) ** 2) / base
  }
}

function fibonacci(n) {
  if (n === 0) return []
  if (n === 1) return [1]
  if (n === 2) return [1,1]

  let rest = fibonacci(n-1) 
  let last = rest[rest.length - 1] + rest[rest.length - 2]
  rest.push(last) //returns the length of the array
  return rest  
}

function deep_dup(arr) {
  debugger
  if (!Array.isArray(arr)) return arr
  if (arr.length === 0) return []

  let first = [deep_dup(arr[0])]
  // console.log(first)
  let rest = deep_dup(arr.splice(1))
  // console.log(rest)
  // console.log("---------")
  first.push(rest)
  return first
}

// arr = [1, [2, 3]]