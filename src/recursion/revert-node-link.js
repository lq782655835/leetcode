// 反转单链表。例如链表为：1->2->3->4。反转后为 4->3->2->1

// class Node{
//     int data;
//     Node next;
// }

// reverseList(head) 等价于 ** reverseList(head.next)** + 改变一下1，2两个节点的指向。
function reverseList(head) {
    if (head == null || head.next == null) return head

    let node2 = head.next // 作为解释变量
    let newReverseNode = reverseList(node2)
    // 改变1和2的指向
    node2.next = head
    head.next = null
    return newReverseNode
}

// 详细解释：https://mp.weixin.qq.com/s/mJ_jZZoak7uhItNgnfmZvQ