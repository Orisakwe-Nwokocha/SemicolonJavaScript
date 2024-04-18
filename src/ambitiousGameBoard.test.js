const {generate} = require("./ambitiousGameBoard");

test("generates correctly", () => {
    let length = 3;
    let width = 3;
    let obj = [
        {row : 0, col: 0, value: "X"},
        {row : 0, col: 1, value: "X"},
        {row : 0, col: 2, value: "O"},
        {row : 1, col: 0, value: "O"},
        {row : 1, col: 2, value: "X"},
        {row : 2, col: 0, value: "X"},
        {row : 2, col: 1, value: "O"},
        {row : 2, col: 2, value: "0"},
    ];

    let expected = [ [ 'X', 'X', 'O' ], [ 'O', ' ', 'X' ], [ 'X', 'O', '0' ] ];
    expect(generate(length, width, obj)).toEqual(expected);
});