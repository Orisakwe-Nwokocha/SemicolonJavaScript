function taskOne(x, y) {
    return (x + y) * 2
}

function taskTwo(number) {
    return (number % 10) + number
}

function taskThree(x, n) {
    return x ** n;
}

function taskFour(a) {
    let x = a + 10;
    let y = a - 10;
    let z = a % 20;

    return a / (x * y * z);
}

console.log(taskOne(2, 3));
console.log(taskTwo(11));
console.log(taskThree(2, 3));
console.log(taskFour(2));

let ans = {
    "id": 1,
    "available": true,
    "count": 1,
    "name": "John Doe",
    "author": "Orisha"
}

console.log(ans);

function solve(left_operand, right_operand, operator) {
    if (operator === "+") return left_operand + right_operand;
    else if (operator === "-") return right_operand - left_operand;
    else if (operator === "*") return left_operand * right_operand;
    else if (operator === "/") return left_operand / right_operand;
    else return NaN;
}

console.log("ans:", solve(1, 2, "+"));




function higherOrderFunction(func) {
    console.log("higerOrderFunction");
    func();
}

function lowerOrderFunction() {
    console.log("lowerOrderFunction");
}
higherOrderFunction(lowerOrderFunction);

function greetings(greet) {
    return function person(name) {
        return `Hello, ${name}, ${greet}`
    }
}

console.log(greetings("How far")("Ara"));

console.log(typeof 12.2)