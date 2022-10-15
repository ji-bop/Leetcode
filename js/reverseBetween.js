/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let first = []
    let sec = []
    let third = []

    let j = 0

    while (j < left - 1) {
        first.push(head[j])
        j++
    }

    for (let i = left - 1; i <= right - 1; i++) {
        sec.push(head[i])
    }

    sec.sort(compareNumbers)

    let i = right
    while (i < head.length) {
        third.push(head[i])
        i++
    }
    let io = first.concat(sec, third)
    return io
}

function compareNumbers(a, b) {
    return b - a
}

console.log(reverseBetween([1, 2, 3, 4, 5], 2, 4))
