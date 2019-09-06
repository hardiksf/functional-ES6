// import words from 'an-array-of-english-words';
const words = require('an-array-of-english-words')

const findAnagram = (word, allWords) => {
    const letters = word.split('');
    let result = [];
    const allWordsLength = allWords.length;
    const wordLength = word.length;
    for (let i = 0; i < allWordsLength; i++) {
        if (allWords[i].length === wordLength) {
            result.push(allWords[i]);
            for (j = 0; j < wordLength; j++) {
                if (allWords[i].includes(letters[j])) {
                    const index = allWords[i].indexOf(letters[j]);
                    allWords[i] = allWords[i].slice(0, index) + allWords[i].slice(index + 1);
                }
            }
            if (allWords[i] !== "") {
                result.pop();
            }
        }
    }
    return result;
};

console.log(findAnagram('test', words)); // [ 'sett', 'stet', 'test', 'tets' ]