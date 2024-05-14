function countFrequencies(numbers) {
    const result = {};

    for (const number of numbers) {
        if (result[number]) continue;
        result[number] = numbers.filter(num => num === number).length;
    }

    return result;
}


let input = [1, 2, 2, 1, 3];
console.log(countFrequencies(input));

module.exports = {countFrequencies};