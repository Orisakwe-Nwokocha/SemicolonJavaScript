const findTheHcfOf = require("./hcf");

test('adds two numbers correctly', () => {
    expect(findTheHcfOf([4, 8, 8, 16])).toBe(4);
});