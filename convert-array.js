const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
    'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
    'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
    'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
    'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const candidates = new Set(electionVotes);

const votesForCandidate = (candidate, candidates) => {
    return candidates.filter(x => x === candidate).length;
};

const result = {};
candidates.forEach(candidate => {
    result[candidate] = votesForCandidate(candidate, electionVotes);
});

console.log(result);
