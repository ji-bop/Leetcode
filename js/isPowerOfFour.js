/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n == 1) return true
    if (n < 4) return false
    let is = false
    let isFour = n

    while (isFour >= 4) {
        if (isFour > 4) isFour /= 4
        if (isFour == 4) {
            is = true
            break
        }
    }
    return is
}

// or

var isPowerOfFour = function (n) {
    return n > 0 && (n & (n - 1)) == 0 && (n & 0x55555555) != 0
}
