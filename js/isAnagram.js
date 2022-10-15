/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Get lengths of both strings
    const n1 = s.length
    const n2 = t.length
    // If length of both strings is not same,
    // then they cannot be anagram
    if (n1 != n2) return false

    // Convert strings into arrays so we can sort them
    const arr1 = s.split('')
    const arr2 = t.split('')

    // Sort both strings
    arr1.sort()
    arr2.sort()

    // Compare sorted strings
    for (let i = 0; i < n1; i++) if (arr1[i] != arr2[i]) return false

    return true
}

console.log(isAnagram('anagram', 'nagaram'))
