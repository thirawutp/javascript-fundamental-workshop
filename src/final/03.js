const plus = (num1 = 0, num2 = 0) => num1 + num2

const minus = (num1 = 0, num2 = 0) => num1 - num2

const multiply = (num1 = 0, num2 = 0) => num1 * num2

const divided = (num1 = 0, num2 = 0) => num1 / num2

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