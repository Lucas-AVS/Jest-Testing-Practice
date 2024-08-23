const reverseString = require("./lib/reverseString");

test("single word string to reverse word string", () => {
  expect(reverseString("palavra")).toBe("arvalap");
});

test("text string with spaces and comas to reverse text string", () => {
  expect(reverseString("esse, isso e este texto")).toBe(
    "otxet etse e ossi ,esse"
  );
});
