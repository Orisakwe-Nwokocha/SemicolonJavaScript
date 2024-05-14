const {increaseScores} = require('../src/IncreaseScores');


test('increaseScore', () => {
    let scores = [85, 92, 78, 88, 95];
    expect(increaseScores(scores)).toEqual([90, 97, 83, 93, 100]);
});