// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = tail = new ListNode()
    let reduce = (tail, node1, node2, plus) => {
        if (!node1 && !node2 && !plus) return

        let sum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + (plus ? 1 : 0)
        tail.next = new ListNode(sum % 10)
        reduce(tail.next, node1 && node1.next, node2 && node2.next, sum > 9)
    }
    reduce(tail, l1, l2, false)
    return head.next
}

const ListNode = function(val) {
    this.val = val
    this.next = null
}

// console.log(buildList([2, 4, 3]))
// {
//     val: 2,
//     next: ListNode { val: 4, next: ListNode { val: 3, next: null } } }
const buildList = nodes => {
    let tail = new ListNode() // 指针
    const head = tail
    for (let node of nodes) {
        tail.next = new ListNode(node)
        tail = tail.next
    }
    return head.next
}

let result = addTwoNumbers(buildList([2,4,3]), buildList([5,6,4]))
console.log(result)
