function findTheHcfOf(numbers) {
    let max = 0;
    for (let number of numbers) if (number > max) max = number;
    for (let hcf = max; hcf >= 1; hcf--) {
        let count = 0;
        for (let number of numbers) if (number % hcf === 0) count++;
        if (count === numbers.length) return hcf;
    }
}

// console.log(findTheHcfOf([4, 8, 8, 16]))
// console.log(findTheHcfOf([9, 9, 12]))

module.exports = findTheHcfOf;