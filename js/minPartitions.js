/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    var arr = n.split('').map(Number)
    var largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
