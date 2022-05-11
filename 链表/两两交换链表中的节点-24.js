const { makeListNode, ListNode } = require('../工具/链表')
//!给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
var swapPairs = function (head) {
    if (head === null || head.next === null) return head
    const vnode = new ListNode()
    vnode.next = head
    let preNode = vnode
    let curNode = head;
    let nextNode = head.next;
    while (nextNode) {
        preNode.next = nextNode
        curNode.next = nextNode.next
        nextNode.next = curNode
        preNode = preNode.next.next;
        if (preNode.next && preNode.next.next) {
            curNode = preNode.next;
            nextNode = curNode.next
        }else{
            break
        }
    }
    return vnode.next
};
console.log(swapPairs(makeListNode([1, 2, 3, 4])));