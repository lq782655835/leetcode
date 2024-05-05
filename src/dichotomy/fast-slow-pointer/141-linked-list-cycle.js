// 141. 环形链表
// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

 

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。


// 示例 2：

// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。


// 示例 3：

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 思路：用两个指针，一个跑得快，一个跑得慢。如果不含有环，跑得快的那个指针最终会遇到 null，说明链表不含环；
    // 如果含有环，快指针最终会超慢指针一圈，和慢指针相遇，说明链表含有环。
    let slow = fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) return true
    }
    return false // 快指针先到达链表末尾，没有环
};


// https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/shuang-zhi-zhen-ji-qiao

// // 更进一步，找到环的起点
// // 核心是快指针是慢指针的2倍
// /**
// * @param {ListNode} head
// * @return {ListNode}
// */
// var detectCycle = function(head) {
//     let fast = head, slow = head;
//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if (fast === slow) {
//             break;
//         }
//     }
//     // 上面的代码类似 hasCycle 函数
//     if (fast === null || fast.next === null) {
//         // fast 遇到空指针说明没有环
//         return null;
//     }

//     // 重新指向头结点
//     slow = head;
//     // 快慢指针同步前进，相交点就是环起点
//     while (slow !== fast) {
//         fast = fast.next;
//         slow = slow.next;
//     }
//     return slow;
// };

// let head = ListNode.createCyclic([1,3,5,7,2,4], 2)
// let result = detectCycle(head)