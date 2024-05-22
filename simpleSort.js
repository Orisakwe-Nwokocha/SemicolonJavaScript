function sort(numbers) {
    numbers.sort()

    for (let index = 0; index < numbers.length; index++) numbers[index] *= numbers[index];

    return numbers;

}

console.log(sort([5, 1, 3, 2, 4]));
