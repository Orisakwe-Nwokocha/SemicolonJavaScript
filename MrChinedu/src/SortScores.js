function sortScores(testScores) {
    return testScores.filter((score) => score >= 70);
}


module.exports = {sortScores};