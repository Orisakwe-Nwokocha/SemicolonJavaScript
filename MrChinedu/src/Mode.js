function getModeOf(numbers) {
    let mode = 0;
    let max = 0;
    for (let number of numbers) {
        let counter = 0;
        for (let num of numbers) if (number === num) counter++;
        if (counter > max) {
            max = counter;
            mode = number;
        }
    }
    return [mode];
}


module.exports = {getModeOf};