const caesarCipher = require("./lib/caesarCipher");

test("caesarCipher a string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher a string with upper and lower case latters", () => {
  expect(caesarCipher("AXyz", 3)).toBe("DAbc");
});

test("caesarCipher a string and keep non alphabetic values unchanged in the sting", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
