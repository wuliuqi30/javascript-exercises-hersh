const palindromes = function (str) {
    console.log(str);
    let letters = /^[A-Za-z0-9]+$/;

    let justLettersArray = str
        .toLowerCase()
        .split('')
        .filter(character =>
            character.match(letters));

    strLength = justLettersArray.length;
    for (c = 0; c < Math.floor(strLength/ 2); c++) {
        console.log(`c is ${c}`);
        console.log(`justLettersArray[c] is ${justLettersArray[c]} and justLettersArray[strLength-1-c] is ${justLettersArray[strLength-1-c]}`);
        if (justLettersArray[c] !== justLettersArray[strLength-1-c]){
            console.log('found a mismatch');
            return false;
        }
    }

    // console.table(justLettersArray);
    // let justLettersString = justLettersArray.join('');
    // console.log(justLettersString);
    return true;

};

// Do not edit below this line
module.exports = palindromes;
