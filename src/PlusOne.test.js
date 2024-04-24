const {plusOne} = require("./PlusOne");


test("01. add 1 to", () => {
    let input = [5, 2, 3, 1, 2];
    expect(plusOne(input)).toEqual([5, 2, 3, 1, 3]);
});


test("02. add 1 to", () => {
    let input = [2, 4, 9, 9, 9];
    expect(plusOne(input)).toEqual([2, 5, 0, 0, 0]);
});


test("03. add 1 to", () => {
    let input = [7, 2, 8, 5, 0, 9, 1, 2, 9, 5,
                           3, 6, 6, 7, 3, 2, 8, 4, 3, 7,
                           9, 5, 7, 7, 4, 7, 4, 9, 4, 7,
                           0, 1, 1, 1, 7, 4, 0, 0, 6];
    let expected = [7, 2, 8, 5, 0, 9, 1, 2, 9, 5,
                             3, 6, 6, 7, 3, 2, 8, 4, 3, 7,
                             9, 5, 7, 7, 4, 7, 4, 9, 4, 7,
                             0, 1, 1, 1, 7, 4, 0, 0, 7];
    expect(plusOne(input)).toEqual(expected);
});

