/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const arr = s.split("");
  const n = s.length / 2;
  let first = 0,
    second = 0;
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0, j = n; i < n; i++, j++) {
    if (vowel.indexOf(arr[i]) > -1) first++;
    if (vowel.indexOf(arr[j]) > -1) second++;
  }

  return first == second;
};