/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    if (nums.length == 1) {
        if (nums[0] == 1) {
            return 0
        } else {
            return 1
        }
    }
    function compareNumbers(a, b) {
        return a - b
    }

    nums.sort(compareNumbers)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i
        } else if (nums.length - 1 == nums.indexOf(i)) {
            return i + 1
        } else {
            continue
        }
    }
}

const print = missingNumber([1])
console.log(print)
