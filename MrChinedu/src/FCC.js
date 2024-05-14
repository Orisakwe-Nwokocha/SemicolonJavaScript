function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    return newArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0;
    for (let i = min; i <= max; i++) sum += i;
    return sum;
}

console.log(sumAll([-1, 4]));
console.log(sumAll([10, 5]));

function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));