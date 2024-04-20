function findTheMaxProductOf(numbers) {
    if (numbers.length < 1) return 0;
    let maxProduct = numbers[0];

    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = index + 1; index1 < numbers.length; index1++) {
            let product = numbers[index] * numbers[index1];
            if (product > maxProduct) maxProduct = product;
        }
    }
    return maxProduct;
}


module.exports = {findTheMaxProductOf};