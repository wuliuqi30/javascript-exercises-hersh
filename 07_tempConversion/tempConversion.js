const convertToCelsius = function(Tf) {
  let TcUnrounded = (Tf - 32) * (5/9) ;

  return Number(TcUnrounded.toFixed(1));
};

const convertToFahrenheit = function(Tc) {
  let TfUnrounded =  (Tc * 9/5) + 32;
  return Number(TfUnrounded.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
