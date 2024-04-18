function generate(length, width, pieces) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push([]);
        for (let j = 0; j < width; j++) array[i].push(" ");
    }
    pieces.map(obj => {
        array[obj.row][obj.col] = obj.value;
    });
    return array;
}

let length = 3;
let width = 3;
let pieces = [
    {row : 0, col: 0, value: "X"},
    {row : 0, col: 1, value: "X"},
    {row : 0, col: 2, value: "O"},
    {row : 1, col: 0, value: "O"},
    {row : 1, col: 2, value: "X"},
    {row : 2, col: 0, value: "X"},
    {row : 2, col: 1, value: "O"},
    {row : 2, col: 2, value: "0"},
];

console.log(generate(length, width, pieces));

module.exports = {generate};