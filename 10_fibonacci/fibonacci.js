const fibonacci = function (nInput) {


    // if a string, convert to a number:
    const n = +nInput;

    olderNumber = 1;
    newerNumber = 1;
    if (n < 0){
        return "OOPS";
    }
    if (n == 0){
        return 0;
    }
    if (n <= 2 ) {
        return 1;
    } 

    let temp = 0;
    for (i = 3; i <= n; i++ ){
        console.log(`olderNumber ${olderNumber}, newerNumber ${newerNumber}`)
        temp = olderNumber + newerNumber;
        olderNumber = newerNumber;
        newerNumber = temp;
        console.log(`Converts to olderNumber ${olderNumber}, newerNumber ${newerNumber}`)
    }
    return newerNumber;

};

// Do not edit below this line
module.exports = fibonacci;
