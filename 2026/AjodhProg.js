// return this is saying: "after updating total",
// give back the same object so the caller call another method on it.

function compute() {
  let total = 0;

  return {
    thousand(val) {
      total += val;
      return this;
    },
    lakhs(val) {
      total += val;
      return this;
    },
    crore(val) {
      total += val;
      return this;
    },
    value() {
      return total;
    },
  };
}

const result = compute()
  .lakhs(2)
  .crore(15)
  .crore(30)
  .thousand(20)
  .lakhs(5)
  .value();

console.log(result);
