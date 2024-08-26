function caesarCipher(string, n) {
  let alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let alphabetLoop = (index) => {
    if (index > 25) {
      return index - 26;
    } else {
      return index;
    }
  };

  let myArray = string.split("");
  let caesarArray = [];

  const isUpperCase = (str) => str === str.toUpperCase();
  myArray.forEach((letter) => {
    let upperCase = isUpperCase(letter);

    let currentIndex = alphabetArray.indexOf(letter.toLowerCase()); //to lower just in case is upperCased

    if (currentIndex === -1) {
      caesarArray.push(letter);
      return;
    }

    let caesarIndex = Number(alphabetLoop(currentIndex + n));

    if (upperCase) {
      caesarArray.push(alphabetArray[caesarIndex].toUpperCase());
    } else {
      caesarArray.push(alphabetArray[caesarIndex]);
    }
  });

  return caesarArray.join("");
}

console.log(caesarCipher("Hello, World!", 3));

module.exports = caesarCipher;
