const removeFromArray = function (inputArray, ...removeList) {

    // For each element in the removeList, remove all instances of that from the inputArray

    // find an element in the removeList

    // first assume the removeList is just a number

    // find where (and if) that occurs in the input Array

    //remove it 

    console.log(`Input Array is ${inputArray}`, `Remove list is ${removeList}`);
    for (let r = 0; r < removeList.length; r++) {
        inputArray= removeItemFromArray(inputArray, removeList[r]);
    }
    return inputArray;
}

function removeItemFromArray(array, item) {
    console.log(`Removing ${item} from ${array}`);
    let i = 0;
    while (i < array.length) {
        console.log(`array is ${array}, iterator is ${i} and removeList is ${item} and comparison inputArray[i] === removeList is ${array[i] === item}`);
        //console.log(`type of i is ${typeof i} and typeof removelist is ${typeof item}`)
        if (array[i] === item) {
            array.splice(i, 1);
            console.log(`Found a matching item, array is now ${array} and array.length is ${array.length}`)
            continue; // continue without incrementing
        }
        i++;
        

    }
    console.log(`Emerged from for loop inside removeItemFromArray, returning array = ${array}`);
    return array;

}

// Do not edit below this line
module.exports = removeFromArray;


