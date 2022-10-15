/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == k) {
                count++

                const index_i = nums.indexOf(nums[i])
                const index_j = nums.indexOf(nums[j])

                nums.splice(index_i, 1) // 2nd parameter means remove one item only
                nums.splice(index_j, 1)
            } else {
                continue
            }
        }
    }

    return count
}

const print = maxOperations([3, 1, 3, 4, 3], 6)
console.log(print)
