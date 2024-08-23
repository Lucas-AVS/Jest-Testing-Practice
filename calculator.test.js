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
