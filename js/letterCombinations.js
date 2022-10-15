/**
 * @param {string} digits
 * @return {string[]}
 */
const letter = [
  [['a'], ['b'], ['c']],
  [['d'], ['e'], ['f']],
  [['g'], ['h'], ['i']],
  [['j'], ['k'], ['l']],
  [['m'], ['n'], ['o']],
  [['p'], ['q'], ['r'], ['s']],
  [['t'], ['u'], ['v']],
  [['w'], ['x'], ['y'], ['z']]
]
var letterCombinations = function (digits) {
  const array = digits.split('')
  if (array.length == 0) return array
  else {
    if (array.length == 1) {
      for (let i = 0; i < array.length; i++) {
        let ans = []
        array[i] = letter[i]

        for (let j = 0; j < letter[i].length; j++) {
          ans.push(letter[i][j].toString())
        }
        return ans
      }
    }
  }
}
