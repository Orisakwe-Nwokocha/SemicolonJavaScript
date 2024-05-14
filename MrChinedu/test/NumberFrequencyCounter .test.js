const {countFrequencies} = require('../src/NumberFrequencyCounter ');


test("count number of frequencies", () => {
    let input = [1, 2, 2, 1, 3];
    expect(countFrequencies(input)).toEqual({1: 2, 2: 2, 3: 1});
})