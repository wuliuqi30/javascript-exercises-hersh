const repeatString = function(inputString,numRepeats) {
    if (numRepeats < 0) {
        return "ERROR";
        
    } else {
        return inputString.repeat(numRepeats);
    } 
};

// Do not edit below this line
module.exports = repeatString;
