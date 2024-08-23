function capitalize(string) {
  const myArray = string.split("");
  let firstLetter = myArray.shift();

  return firstLetter.toUpperCase() + myArray.join("");
}
module.exports = capitalize;
