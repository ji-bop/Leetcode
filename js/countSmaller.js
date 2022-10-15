/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    // Initialize answer array
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        // Initialize counter for smaller numbers to the right
        let counts = 0

        // for the last item the answer is always going to be 0
        if (i == nums.length - 1) {
            ans.push(0)
            return ans
        }

        // Run iteration to check whether next item on nums list is smaller than or equals //
        // to the one before
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] >= nums[i]) {
                // Then check if we're in the last position of the array
                // if we're not we'll contininue, otherwise we'll push counts to answer array
                // and reset the counts variable
                if (j != nums.length - 1) continue
                else {
                    ans.push(counts)
                    counts = 0
                }
                // If there's a smaller number it will be checked if it's in the last position
                // of the array, if so it will increase the counts variable, and append to the
                // answer array and finally reset the counter
                // otherwise it will just increase the counts variable and move on to the next
                // iteration.
            } else {
                if (j != nums.length - 1) counts++
                else {
                    counts++
                    ans.push(counts)
                    counts = 0
                }
            }
        }
    }
}

console.log(countSmaller([1, 0, 2]))
