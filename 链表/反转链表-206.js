//!迭代实现
var reverseList = function (head) {
    let pre = null;
    let current = head
    while (current) {
        const next = current.next;
        current.next = pre;
        pre = current;
        current = next
    }
    return pre
};
//!递归实现
/* 2
head=>next
首先明白递推公式含义，对于节点head来说，他只需要知道他之后所有节点反转后的结果就可以了，也就是说递推公式reverseList的含义是：
把拿到的链表进行反转，然后返回新的头结点
*/
var reverseList = function (head) {
    //递归终止条件：若果head节点是空，即head===null或者head.next===null时
    if (head === null || head.next === null) return head
    let newList = reverseList(head.next);
    head.next.next = head;
    head.next = null
    return newList
};