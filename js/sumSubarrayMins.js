/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 1000000007;

  let stack = [];
  let sumOfMinimuns = 0;

  for (let i = 0; i <= arr.length; i++) {
    // when i reaches the array length, it is an indication that
    // all the elements have been proce3ssed, and the remaining
    // elements in the stack should now be popped out.

    while (stack.length && (i == arr.length || arr[stack.at(-1)] >= arr[i])) {
      // Notice the sign ">=", This ensures that no contribution
      // is counted twice. rightBoundary takes equal or smaller
      // elements into account while leftBoundary takes only the
      // strictly smaller elements into account

      const mid = stack.pop();
      const leftBoundary = stack.at(-1) === undefined ? -1 : stack.at(-1);
      const rightBoundary = i;

      // count of subarrays where mid is the minimum element
      const count = ((mid - leftBoundary) * (rightBoundary - mid)) % MOD;
      sumOfMinimuns += (count * arr[mid]) % MOD;
      sumOfMinimuns %= MOD;
    }
    stack.push(i);
  }
  return sumOfMinimuns;
};
