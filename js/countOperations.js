/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    return num1 * num2 == 0
        ? 0
        : num1 / num2 + countOperations(num2, num1 % num2)
}

const print = countOperations(2, 3)
console.log(print)
