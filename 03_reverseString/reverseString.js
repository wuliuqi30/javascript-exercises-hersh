const reverseString = function (inputString) {

    const len = inputString.length;
    let outputString = '';
    if (len == 0) {
        return "";
    } else {
        for (let i = len - 1; i >= 0; i--) {
            outputString += inputString[i];

        }
        return outputString;
    }

};

// Do not edit below this line
module.exports = reverseString;
