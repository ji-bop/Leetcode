/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort(compareNumbers)
    let i = 0,
        j = nums.length - 1,
        count = 0

    while (i < j) count += nums[j--] - nums[i++]

    return count
}

function compareNumbers(a, b) {
    return a - b
}

console.log(minMoves2([1, 10, 2, 9]))
