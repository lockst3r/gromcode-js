const calc = (n) => {
  let result = n;
  const calculator = {
    add(number) {
      result += number;
      return this;
    },

    subtract(number) {
      result -= number;
      return this;
    },

    mult(number) {
      result *= number;
      return this;
    },

    div(number) {
      result /= number;
      return this;
    },

    result() {
      return result;
    },
  };

  return calculator;
};

const resultd = calc(3).mult(55).div(10).result();

console.log(resultd);
