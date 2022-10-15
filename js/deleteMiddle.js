/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    // Edge case: return nullptr if there is only one node.
    if (head.next == null) return null

    // Initialize two pointers, 'slow' and 'fast'.
    let slow = head,
        fast = head.next.next

    // Let 'fast' move forward by 2 nodes, 'slow' move forward by 1 node each step.
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }

    // When 'fast' reaches the end, remove the next node of 'slow' and return 'head'.
    slow.next = slow.next.next
    return head
}
