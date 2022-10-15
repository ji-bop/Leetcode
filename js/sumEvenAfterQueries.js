/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
    // Initialize empty array for final answer
    let ans = []

    // In order to preserve the integrity of the nums argument,
    // We will make a copy and store it in a new variable
    let curr = nums

    // Walk through the queries
    for (let i = 0; i < queries.length; i++) {
        // Set queries[i][1] to match the index of the value that will be changed
        let index = queries[i][1]
        curr[index] += queries[i][0]

        // Initialize the sum of even elements
        let evenSum = 0

        // Scan through the current list to check the even numbers and then add them up
        for (let j = 0; j < curr.length; j++) {
            if (curr[j] % 2 != 0) continue
            // then sum the even numbers
            else {
                evenSum += curr[j]
            }
        }
        // then we will push the resulting number into the answer matrix

        ans.push(evenSum)
    }
    return ans
}

console.log(sumEvenAfterQueries([1], [[4, 0]]))
