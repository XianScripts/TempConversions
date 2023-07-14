const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  if (fTemp === 32) {
    cTemp = 0;
    return cTemp;
  }
  else { return +cTemp.toFixed(1); }
};

// toFixed() method converts a number to string, its parameters can set the amount of decimal points
// formula = (F-32) * 5/9 = C

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * 9/5) + 32;
  if (cTemp === 32) {
    return 0;
  }
  return +fTemp.toFixed(1);
};
// formula (c * 9/5) + 32



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(32));
// console.log(convertToFahrenheit(29));