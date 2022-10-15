/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        let counts = 0

        // for the last item the answer is always gonna be 0
        if (i == nums.length - 1) {
            ans.push(0)
            return ans
        }
        // then check if we're in the last position of the array
        // if we are, then push counts to the ans array and reset counter
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] >= nums[i]) {
                if (j != nums.length - 1) {
                    continue
                } else {
                    ans.push(counts)
                }
            } else {
                if (j != nums.length - 1) {
                    counts++
                } else {
                    counts++
                    ans.push(counts)
                    counts = 0
                }
            }
        }
    }
}
