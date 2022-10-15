var singleNumber = function (nums) {
    function compareNumbers(a, b) {
        return a - b
    }

    nums.sort(compareNumbers)

    while (nums.length != 1) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    let index_i = nums.indexOf(nums[i])
                    let index_j = nums.indexOf(nums[j])

                    if (index_i > -1 && index_j > -1) {
                        nums.splice(index_i, 1) // 2nd parameter means remove one item only
                        nums.splice(index_j, 1) // 2nd parameter means remove one item only
                    }
                }
            }
        }
    }

    return nums[0]
}

const print = singleNumber([4, 1, 2, 1, 2])
console.log(print)
