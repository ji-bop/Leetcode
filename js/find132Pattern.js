/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    if (nums.length < 3) return false

    for (let i = 0; i < nums.length && i; i++) {
        for (let j = 1; j < nums.length && j < k; j++) {
            for (let k = 2; k < nums.length; k++) {
                return (nums[i] < nums[j] && nums[j] > nums[k])
            }
        }
    }
}
