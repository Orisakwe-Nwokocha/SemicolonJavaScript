/*var var1 = 5000;
var var3 = var1;
var var2 = var3;
prompt("What is your name?")

console.log(var1);
console.log(var2);
console.log(var3);*/

function findMinMaxDifferenceOf(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) max = numbers[i];
        if (numbers[i] < min) min = numbers[i];
    }
    return [max - min];

}

console.log(findMinMaxDifferenceOf([2, 4, 5, 7, 8]));
console.log(findMinMaxDifferenceOf([2, 1, 3, 4, 9]));


