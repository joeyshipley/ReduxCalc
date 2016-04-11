import Promise from 'bluebird';

class Calculator {
  constructor() {}

  add(value1, value2) {
    return new Promise((resolve, reject) => {
      var result = value1 + value2;
      return resolve(result);
    });
  }

  subract(value1, value2) {
    return new Promise((resolve, reject) => {
      var result = value1 - value2;
      return resolve(result);
    });
  }
}
export default Calculator;