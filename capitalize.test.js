const capitalize = require("./lib/capitalize");

test("single word string to string with first character capitalized", () => {
  expect(capitalize("palavra")).toBe("Palavra");
});

test("text string with spaces and comas to text string with first character capitalized", () => {
  expect(capitalize("esse, isso e este texto")).toBe("Esse, isso e este texto");
});
