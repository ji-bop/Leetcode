/**
 * @param {string} s
 * @return {number}
 */

countSubstrings = function (s) {
    let count = 0
    if (s == null || s.length == 0) return 0

    extendPalindrome = function (s, left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s.charAt(left) == s.charAt(right)
        ) {
            count++
            left--
            right++
        }
    }

    for (let i = 0; i < s.length; i++) {
        // i is the mid point
        extendPalindrome(s, i, i) // Odd length
        extendPalindrome(s, i, i + 1) // Even length
    }

    return count
}

charAt = function (string, index) {
    var charAt = string[index]
    return charAt
}
