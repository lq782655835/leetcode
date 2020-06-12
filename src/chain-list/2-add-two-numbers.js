// 2. 两数相加
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

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
