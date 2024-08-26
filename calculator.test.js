const calculator = require("./lib/calculator");

test("sum two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("sum two number strings", () => {
  expect(calculator.add("1", "2")).toBe(3);
});

test("sum two non number strings", () => {
  expect(calculator.add("word", "aaaa")).toBe("ERROR: NaN");
});

test("subtract two numbers", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("subtract two number strings", () => {
  expect(calculator.subtract("5", "2")).toBe(3);
});

test("subtract two non number strings", () => {
  expect(calculator.subtract("word", "aaaa")).toBe("ERROR: NaN");
});

test("divide two numbers", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test("divide two number strings", () => {
  expect(calculator.divide("1", "2")).toBe(0.5);
});

test("divide two non number strings", () => {
  expect(calculator.divide("word", "aaaa")).toBe("ERROR: NaN");
});

test("multiply two numbers", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("multiply two number strings", () => {
  expect(calculator.multiply("10", "2")).toBe(20);
});

test("multiply two non number strings", () => {
  expect(calculator.multiply("word", "aaaa")).toBe("ERROR: NaN");
});
