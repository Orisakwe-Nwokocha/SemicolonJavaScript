const {findTheHcfOf, findEvenNumbersFrom} = require("./hcf");

test('find the hcf', () => {
    expect(findTheHcfOf([4, 8, 8, 16])).toBe(4);
});

test('find even numbers', () => {
    expect(findEvenNumbersFrom([4, 3, 5, 8, 16])).toEqual([4, 8, 16]);
});