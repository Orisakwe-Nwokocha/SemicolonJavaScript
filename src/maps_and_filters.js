let array = [1, 2, 3, 4, 5];
let p = []

array.forEach(n => p.push(n *2));
console.log(p);

console.log("array before mutating:", array);
let answer = array.map(number => number % 2 === 0);
console.log("only map:", answer);
answer = array.map(number => number + 5);
console.log("only map addition:", answer);
answer = array.filter(number => number % 2 === 0);
console.log("only filter:", answer);
answer = array.filter(number => number % 2 === 0).map(number => number + 5);
console.log("filter, then map:", answer);
answer = array.map(num => num + 5).filter(number => number % 2 === 0);
console.log("map, then filter:",answer);

const studentScores = [95, 78, 85, 60, 45, 92];
function convertToGrades(studentScores) {
    let result = [];
    studentScores.map(studentScore => {
        if (studentScore >= 90 && studentScore <= 100) result.push("A");
        else if (studentScore >= 80) result.push("B");
        else if (studentScore >= 70) result.push("C");
        else if (studentScore >= 60) result.push("D");
        else result.push("F");
    });
    return result;
}
console.log("Scores:", studentScores);
console.log("Scores to grades:", convertToGrades(studentScores))

module.exports = {convertToGrades};