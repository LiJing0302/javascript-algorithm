const { makeListNode, ListNode } = require('../工具/链表')

//!给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
//!思路1，链表无下标，倒数删除可先反转链表
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

var removeNthFromEnd = function (head, n) {
    let resList = reverseList(head);
    let vnode = new ListNode()
    vnode.next = resList
    pre = vnode
    let cur = resList
    while (--n) {
        pre = cur
        cur = cur.next
    }
    pre.next = cur.next

    return reverseList(vnode.next)
};
//!思路2：
//!由于不知道链表有几个节点，所以先建立一个数组，用来记录节点对应的下标顺序。
//!求倒数第 n 个，可以转化成求 正数的数组长度 - n 个，而通过数组又可以很容易的拿到待删除节点的前一个节点，
//!那么就把前一个节点 prevNode.next = targetNode.next 这样更换指向即可。

var removeNthFromEnd = function (head, n) {
    let cur = head
    let nodes = []
    while (cur) {
        nodes.push(cur)
        cur = cur.next
    }
    let length = nodes.length
    let targetNode = nodes[length-n]
    if(targetNode === head){
        return targetNode.next
    }
    let preNode = nodes[length-n-1]
    preNode.next = targetNode.next
    targetNode.next = null
    return head
};
console.log(removeNthFromEnd(makeListNode([1, 2, 3, 4, 5]), 2));