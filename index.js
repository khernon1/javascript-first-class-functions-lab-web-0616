function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(num) {
    return num * multiplierValue 
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(arg1, arg2) {
  return arg1 * arg2
}

var doublerWithBind = doubler.bind(multiplier)
var triplerWithBind = tripler.bind(multiplier)