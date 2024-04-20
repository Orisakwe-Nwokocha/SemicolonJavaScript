function generate(length, width, obj) {
    // let array = [];
    // for (let i = 0; i < length; i++) {
    //     array.push([]);
    //     for (let j = 0; j < width; j++) array[i].push(" ");
    // }
    let array = Array.from({length}, () => Array(width).fill(" "));
    obj.forEach(piece => array[piece.row][piece.col] = piece.value);
    return array;
}

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

console.log(generate(length, width, obj));

module.exports = {generate};