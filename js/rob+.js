var rob = function(nums) {
    return roB(nums, nums.length - 1)
}
var roB = function(nums, i) {
    if (i < 0) {
        return 0
    }
    return Math.max(roB(nums, i - 2) + nums[i], roB(nums, i - 1))
}

console.log(rob([2,1,1,2]))