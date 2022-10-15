/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
    let ans = []
    ans.push(nums[0])

    function reducer(previous, current) {
        const returns = previous + current
        ans.push(returns)
        return returns
    }

    nums.reduce(reducer)

    return ans
}
