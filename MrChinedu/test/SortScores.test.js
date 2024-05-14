const {sortScores} = require('../src/SortScores');


test('sortScores correctly', () => {
    let scores = [10, 70, 99, 64, 84];
    expect(sortScores(scores)).toEqual([70, 99, 84]);
});