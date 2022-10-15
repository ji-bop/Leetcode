/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let counter = 0

    function compareNumbers(a, b) {
        return a - b
    }

    console.log(heights)
    const expected = heights.sort(compareNumbers)
    console.log(expected)

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != expected[i]) {
            count += 1
        } else {
            continue
        }
    }

    return counter
}

const print = heightChecker([1, 1, 4, 2, 1, 3])
console.log(print)
