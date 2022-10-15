/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (s, cost) {
    // Initialize two pointers i, j.
    let totalTime = 0
    let i = 0,
        j = 0

    while (i < cost.length && j < cost.length) {
        let currTotal = 0,
            currMax = 0
        // Find all the balloons having the same color as the
        // balloon index at i, record the total removal time
        // and the maximum removal time.
        while (j < cost.length && s[i] == s[j]) {
            currTotal += cost[j]
            currMax = Math.max(currMax, cost[j])
            j++
        }

        // Once we reach the end of the current group, add the cost of
        // this group to total_time, and reset two pointers.
        totalTime += currTotal - currMax
        i = j
    }
    return totalTime
}
