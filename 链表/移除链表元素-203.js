const { makeListNode, ListNode } = require('../工具/链表')

//!给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
var removeElements = function (head, val) {
    const vnode = new ListNode()
    vnode.next = head//创建节点傀儡
    let curNode = head
    let preNode = vnode
    while (curNode) {
        if (curNode.val === val) {
            preNode.next = curNode.next;
            curNode = curNode.next
        } else {
            preNode = curNode
            curNode = curNode.next
        }
    }
    return vnode.next
};
console.log(removeElements(makeListNode([1, 2, 6, 3, 4, 5, 6]),6))