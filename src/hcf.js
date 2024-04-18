function findTheHcfOf(numbers) {
    let max = 0;
    for (let number of numbers) if (number > max) max = number;
    for (let hcf = max; hcf >= 1; hcf--) {
        let count = 0;
        for (let number of numbers) if (number % hcf === 0) count++;
        if (count === numbers.length) return hcf;
    }
}

function findEvenNumbersFrom(numbers) {
    return numbers.filter((number) => number % 2 === 0);
}

module.exports = {findTheHcfOf, findEvenNumbersFrom};