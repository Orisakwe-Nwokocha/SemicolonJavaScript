const {convertToGrades} = require('./MapsAndFilters.js');

test("convertToGrades", () => {
    const studentScores = [95, 78, 85, 60, 45, 92];
    expect(convertToGrades(studentScores)).toEqual(["A", "C", "B", "D", "F", "A"]);
});