const currentInputValues = {
    firstName: 'looks good', // Must be at least 2 characters
    lastName: '', // Must be at least 2 characters
    zipCode: '', // Must be exactly 5 characters
    state: '', // Must be exactly 2 characters
}

const valueLengthCheck = (doesRequireMinimumLength, doesRequireExactLength, numberOfCharacters) => {
    if (doesRequireMinimumLength) {
        return (value => value.length >= numberOfCharacters
            ? 'looks good'
            : `Must be at least ${numberOfCharacters} characters`);
    }
    if (doesRequireExactLength) {
        return (value => value.length === numberOfCharacters
            ? 'looks good'
            : `Must be at least ${numberOfCharacters} characters`);
    }
};

const inputCriteria = {
    firstName: [valueLengthCheck(true, false, 2)],
    lastName: [valueLengthCheck(true, false, 2)],
    zipCode: [valueLengthCheck(false, true, 5)],
    state: [valueLengthCheck(false, true, 2)],
};

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((accumulator, fieldName) => [
        ...accumulator,
        ...criteria[fieldName].map(test =>
            test(inputs[fieldName]))
            .filter(inputValue => inputValue !== 'looks good')
    ], [])
}

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
    */