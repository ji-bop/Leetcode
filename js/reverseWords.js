/**
 * @param {string} s
 * @return {string}
 */
// First Solution
var reverseWords = function (s) {
  let ans = [];
  let text = s
    .split(" ")
    .filter((word) => word.length > 0)
    .reverse();
  text.forEach((word) => {
    ans.push(word);
  });
  answer = ans.join(" ");
  
  return answer.trim();
};

// Second Solution
var reverseWords = function (s) {
  let text = s.split(" ").filter((word) => word.length > 0);
  let ans = [];
  for (var i = s.length - 1; i >= 0; i--) {
    ans.push(text[i]);
  }
  answer = ans.join(" ");

  return answer.trim();
};

// Third Solution
var reverseWords = function (s) {
  let ans = [];
  let text = s
    .split(" ")
    .filter((word) => word.length > 0)
    .reverse();
  text.forEach((word) => {
    ans.push(word);
  });

  return ans.join(" ").trim();
};

console.log(reverseWords("a good   example"));
