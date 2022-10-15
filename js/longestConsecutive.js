/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let longest = 0
    let queue = 1

    if (nums.length == 0) return longest
    nums.sort(compareNumbers)
    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] == nums[i] + 1) {
            queue += 1
        } else {
            if (queue > longest) {
                longest = queue
                queue = 1
            } else {
                continue
            }
        }
    }

    return longest
}

function compareNumbers(a, b) {
    return a - b
}

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))
