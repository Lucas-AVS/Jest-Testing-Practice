class Calculator {
  add(n1, n2) {
    typeof n1 === "number" ? (n1 = n1) : (n1 = parseInt(n1));
    typeof n2 === "number" ? (n2 = n2) : (n2 = parseInt(n2));
    if (isNaN(n1) || isNaN(n2)) {
      return "ERROR: NaN";
    } else {
      return n1 + n2;
    }
  }

  subtract(n1, n2) {
    typeof n1 === "number" ? (n1 = n1) : (n1 = parseInt(n1));
    typeof n2 === "number" ? (n2 = n2) : (n2 = parseInt(n2));
    if (isNaN(n1) || isNaN(n2)) {
      return "ERROR: NaN";
    } else {
      return n1 - n2;
    }
  }

  divide(n1, n2) {
    typeof n1 === "number" ? (n1 = n1) : (n1 = parseInt(n1));
    typeof n2 === "number" ? (n2 = n2) : (n2 = parseInt(n2));
    if (isNaN(n1) || isNaN(n2)) {
      return "ERROR: NaN";
    } else {
      return n1 / n2;
    }
  }

  multiply(n1, n2) {
    typeof n1 === "number" ? (n1 = n1) : (n1 = parseInt(n1));
    typeof n2 === "number" ? (n2 = n2) : (n2 = parseInt(n2));
    if (isNaN(n1) || isNaN(n2)) {
      return "ERROR: NaN";
    } else {
      return n1 * n2;
    }
  }
}

const calculator = new Calculator();

module.exports = calculator;
