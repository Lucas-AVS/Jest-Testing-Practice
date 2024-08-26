class AnalyzeArray {
  constructor(array) {
    let average, min, max, length;

    function analyze(array) {
      let sum = 0;
      array.forEach((element) => {
        if (min === undefined && max == undefined) {
          min = element;
          max = element;
        }
        element < min ? (min = element) : null;
        element > max ? (max = element) : null;

        sum += element;
      });
      average = sum / array.length;
      return average, min, max, (length = array.length);
    }

    analyze(array);

    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
  }
}

module.exports = AnalyzeArray;
