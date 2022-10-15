/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function (target) {
    if (target.length == 1 && target[0] != 1) return false

    let check = []

    while (check.length != target.length) check.push(1)

    for (let i = 0; i < target.length; i++) {
        var currSum = check.reduce(
            (acumulador, valorAtual) => acumulador + valorAtual,
            0
        )
        if (currSum == target[i]) {
            check[i] = target[i]
        } else {
            for (let j = 0; j < check.length; j++) {
                if ((j = i)) j = j + 1
                if ((currSum = target[j])) {
                    check[j] = target[j]
                } else if (j != target.length - 1) {
                    continue
                } else {
                    return false
                }
            }
        }

        if (i == target.length - 1) {
            return arraysEqual(check, target)
        }
    }
}

function arraysEqual(a, b) {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false
    }
    return true
}

const print = isPossible([1, 1, 1, 2])
console.log(print)
