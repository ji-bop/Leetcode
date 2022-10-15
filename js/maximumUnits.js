/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    let boxes = 0

    boxTypes.sort(
        (function (index) {
            return function (a, b) {
                return a[index] === b[index] ? 0 : a[index] > b[index] ? -1 : 1
            }
        })(1)
    )

    if (truckSize == 1) return boxTypes[0][1]

    for (let box of boxTypes) {
        if (truckSize >= box[0]) {
            boxes += box[0] * box[1]
            truckSize -= box[0]
        } else {
            boxes += truckSize * box[1]
            return boxes
        }
    }
}

console.log(
    maximumUnits(
        [
            [1, 3],
            [5, 5],
            [2, 5],
            [4, 2],
            [4, 1],
            [3, 1],
            [2, 2],
            [1, 3],
            [2, 5],
            [3, 2]
        ],
        35
    )
)
