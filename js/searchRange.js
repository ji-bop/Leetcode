/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let containsTarget = false

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            containsTarget = true
            break
        }
        continue
    }

    if (!containsTarget) return [-1, -1]

    let ans = []
    let j = 0
    while (j < nums.length) {
        if (nums[j + 1] == target) {
            ans.push(nums.indexOf(nums[j + 1]))
            break
        }
        j++
    }

    let c = nums.length
    while (c--) {
        if (nums[c--] == target) {
            ans.push(nums.indexOf(nums[c]) + 1)
            break
        }
        c--
    }
    return ans
}
