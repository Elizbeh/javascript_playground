/**
function countWords(str) {
    let count = 0;
    const words = str.split(" ")
    for (let word in words) {
        count++
    }
    return `There are ${count} words in this Phrase`
}

console.log(countWords("Time to go to show"))


const calculateAverageRating = (ratings) => {
    if(ratings.length === 0) return 0
    let sum = 0
    for (let rating of ratings) {
        sum +=rating
    }
    return Math.ceil(sum/ratings.length)
}

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

console.log(tauAverage)
console.log(colinAverage)**/

function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person))
    newPersonObj.age = 25
    console.log(typeof(newPersonObj))
    return newPersonObj
}
var alex = {
    name: 'Alex',
    age: 30
};
var alexChanged = changeAgePure(alex);
console.log(alex); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }