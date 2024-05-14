const {getModeOf} = require("../src/Mode");


test("get mode", () => {
    let input = [1, 1, 1, 2, 2];
    expect(getModeOf(input)).toEqual([1]);
});

test("get mode 2", () => {
    let input = [3, 3, 3, 3, 1];
    expect(getModeOf(input)).toEqual([3]);
});