function delaySum({ num1, num2 }, callback) {
  const result = num1 + num2;
  callback(result);
}

export default delaySum;
