const {squareNumbers} = require('../src/SquareNumbers');


test("Square each number", () => {
    let numbers = [2, 4, 6, 8, 10];
    expect(squareNumbers(numbers)).toEqual([4, 16, 36, 64, 100]);
});