function promiseSum(num1, num2) {
  return new Promise((resolve, reject) => {
    const result = num1 + num2
    resolve(result)
  });
}

export default promiseSum;
