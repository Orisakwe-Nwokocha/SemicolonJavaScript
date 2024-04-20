const {findTheMaxProductOf} = require("./MaximumProduct");

test("max product of numbers", () => {
    expect(findTheMaxProductOf([1, 5, 10, 4])).toBe(50);
})