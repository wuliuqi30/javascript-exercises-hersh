const findTheOldest = function (arr) {
    d = new Date();
    today = d.getFullYear()
    //console.log(today);

    const agesArray = arr.reduce(function (oldest, element) {
        if (!element.yearOfDeath) {
            // if there's no year of Death, assume still alive
            element["age"] = today - element.yearOfBirth;
        } else {
            element["age"] = element.yearOfDeath - element.yearOfBirth;
        }

        if (!oldest.age || element["age"] > oldest.age) {
            return element;
        } else {
            return oldest;

        }
    },{})

return agesArray;

};

// Do not edit below this line
module.exports = findTheOldest;


// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

//   findTheOldest(people)