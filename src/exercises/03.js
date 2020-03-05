const plus = (num1, num2) => {
  // ❓ implement plus function
  // 🦊 just implement plus normally 
}

// ❓ creating minus, multiply, divided function using arrow function skeleton
// 🦊 using arrow function skeleton with default parameter value with 0
// 🧙‍♂️ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function calculate(num1, num2, operand) {
  switch (operand) {
    case "+":
      return plus(num1, num2)
    case "-":
      return minus(num1, num2)
    case "*":
      return multiply(num1, num2)
    case "/":
      return divided(num1, num2)
    default:
      throw new Error("Please provide correct operator (eg. +,-,*,/)")
  }
}

export default calculate