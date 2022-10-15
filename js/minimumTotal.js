/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let sum = []

    function compareNumbers(a, b) {
        return a - b
    }

    for (let i = 0; i < triangle.length; i++) {
        triangle[i].sort(compareNumbers)
        sum.push(triangle[i][0])
    }

    const sumWithInitial = sum.reduce((a, b) => a + b, 0)
    return sumWithInitial
}

const print = minimumTotal([[-1], [2, 3], [1, -1, -3]])
console.log(print)
