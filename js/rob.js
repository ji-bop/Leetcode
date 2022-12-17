/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

// We create two arrays, one for even indexes and one for odd indexes.
  let sumEvenIndex = [];
  let sumOddIndex = [];

// We push the first element of the array into the even index array.
  sumEvenIndex.push(nums[0]);

// We loop through the array and push the elements into the even index 
// array if the index is even, and the odd index array if the index is odd.
  for (let i = 1; i < nums.length; i++) {
    if (i % 2 == 0) {
      sumEvenIndex.push(nums[i]);
    } else {
      sumOddIndex.push(nums[i]);
    }
  }
// We create a reducer function that takes in an array and returns the sum 
// of all the elements in the array.
  var reducer = (list) =>
    list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// We return the max of the sum of the even index array and the sum of the odd index array.
  // return Math.max(reducer(sumEvenIndex), reducer(sumOddIndex));

  return (reducer(sumEvenIndex))
};
