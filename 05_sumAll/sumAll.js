const sumAll = function(n,m) {

    if ((typeof n !== 'number') || (typeof m !== 'number')) {
        console.log("Inputs must be numbers!");
        return 'ERROR';
    } else if (n <= 0 || m <= 0){
        console.log("Inputs must be positive!")
        return 'ERROR';
    } else if (!Number.isInteger(n) || !Number.isInteger(m)){
        console.log("Inputs must be integers!")
        return 'ERROR';
    } else {
        let sum = 0;
        let startInt = n;
        let endInt = m;
        // Make sure n is less than or equal to m:
        if (n > m){
            startInt = m;
            endInt = n;
        }
        for(let i = startInt; i <= endInt; i++){
            sum += i;
        }
        return sum;

    }


};

// Do not edit below this line
module.exports = sumAll;
