const getWordCount = (stringToTest) => {
    return stringToTest
        .trim()
        .split(/\s+/)
        .filter(word => word !== "")
        .length
 }

 const getLettersCount = (stringToTest) => {
    const letterArr = stringToTest.split("")
    let letterCount = 0
    for(let letter of letterArr) {
       const cleanedLetter = letter.replace(/\s+/g, "")
        letterCount += cleanedLetter.length
    }
    return letterCount
 }
 

/**const testSimpleWordCount = () => {
    const testString = 'I have four words!';
    if (getWordCount(testString) !== 4) {
        return 'Simple getWordCount failed!';
    } else {
      return `There are ${ getWordCount(testString)} words in this string!`
    }
}

const testEmptyWordCount = () => {
    const testString = '   ';
    if (getLettersCount(testString) > 0) {
        console.log(getLettersCount(testString))
        return 'Simple getLettersCount failed!';
    } else {
      return `Empty string edgecase ${ getLettersCount(testString)} passed!`
    }
}

const testGetLetterCount = () =>  {
    const testString = 'A boy a man a god'
    if(getLettersCount(testString) !== 12) {
        return "Simple getLetterCount failed"
    }  else {
        return `Test getLetterCount Passed!`
    }
}

//console.log(testSimpleWordCount())
//console.log(testEmptyWordCount())

console.log(testGetLetterCount())*/

