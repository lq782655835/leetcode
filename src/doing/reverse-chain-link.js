// 题目
// 这其实是一道变形的链表反转题，大致描述如下

// 给定一个单链表的头节点 head,实现一个调整单链表的函数，使得每K个节点之间为一组进行逆序，并且从链表的尾部开始组起，头部剩余节点数量不够一组的不需要逆序。（不能使用队列或者栈作为辅助）

// 例如： 链表:1->2->3->4->5->6->7->8->null, K = 3。那么 6->7->8，3->4->5，1->2各位一组。调整后：1->2->5->4->3->8->7->6->null。其中 1，2不调整，因为不够一组。

//k个为一组逆序
public ListNode reverseKGroup(ListNode head, int k) {
    ListNode temp = head;
    for (int i = 1; i < k && temp != null; i++) {
        temp = temp.next;
    }
    //判断节点的数量是否能够凑成一组
    if(temp == null)
        return head;

    ListNode t2 = temp.next;
    temp.next = null;
    //把当前的组进行逆序
    ListNode newHead = reverseList(head);
    //把之后的节点进行分组逆序
    ListNode newTemp = reverseKGroup(t2, k);
    // 把两部分连接起来
    head.next = newTemp;

    return newHead;
}

//逆序单链表
private static ListNode reverseList(ListNode head) {
    if(head == null || head.next == null)
        return head;
    ListNode result = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return result;
}


出自：https://zhuanlan.zhihu.com/p/77573456
