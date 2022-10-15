/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      ans.push(nums[i])
    } else {
      continue
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 != 0) {
      ans.push(nums[j])
    } else {
      continue
    }
  }
  return ans
}
