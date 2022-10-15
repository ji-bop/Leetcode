/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let ans = []
  if (k > n) return ans

  let queue = []
  let sum = queue.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )

  if (sum == n) {
    ans.push(queue)
    queue = []
  }

  let index = 1
  while (queue.length <= k || index <= 9) {}

  return ans
}

const res = combinationSum3(3, 7)
console.log(res)
