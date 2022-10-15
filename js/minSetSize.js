/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    let counter = 0

    const count = {}

    for (const element of arr) {
        if (count[element]) {
            count[element] += 1
        } else {
            count[element] = 1
        }
    }

    var items = Object.keys(count).map(function (key) {
        return [key, count[key]]
    })

    // Sort the array based on the second element
    items.sort(function (first, second) {
        return second[1] - first[1]
    })
    n = arr.length / 2

    while (arr.length > n) {
        counter += 1
        arr.splice(0, items[0][1])
        items.splice(0, 1)
        console.log(arr)
        console.log(items)
    }

    return counter
}

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]))
