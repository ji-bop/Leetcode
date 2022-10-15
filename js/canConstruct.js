/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var e,
        s,
        el = ransomNote.length,
        sl = magazine.length
    ransomNote = ransomNote.split('').sort()
    magazine = magazine.split('').sort()
    for (e = 0, s = 0; e < el; e += 1, s += 1) {
        while (s < sl && magazine[s] < ransomNote[e]) {
            s += 1
        }
        if (s == sl || magazine[s] > ransomNote[e]) {
            return false
        }
    }
    return true
}

console.log(canConstruct('aa', 'aab'))
