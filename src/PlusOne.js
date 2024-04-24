function plusOne(numbers) {
    let string = "";
    for (let number of numbers) string += number;

    let number = BigInt(string) + BigInt(1);
    string = number.toString();

    let result = [];
    for (let character of string) result.push(parseInt(character));

    return result;
}


module.exports = {plusOne};