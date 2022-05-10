const { makeListNode } = require('../工具/链表')
//!迭代实现
//!  目的：反转数组中特定区域的节点
var reverseBetween = function (head, left, right) {
    let cur = head;
    let leftNode = null //指针指向left-1的节点
    let rightNode = null    //指针存放right+1的节点
    let curNodeNum = 1  //存当前cur节点的节点序号
    let reverseLeft = null    //存放left节点
    let reverseRight = null    //存放right节点
    //!想要实现 leftNode=》reverseRight,   reverseLeft=》rightNode,  

    while (curNodeNum <= right) {
        if (curNodeNum === left - 1) {
            leftNode = cur
        }
        if (curNodeNum === left) {
            reverseLeft = cur
        }
        if (curNodeNum === right) {
            reverseRight = cur
        }
        cur = cur.next
        curNodeNum++
    }
    rightNode = reverseRight.next
    reverseRight.next = null
    reverseList(reverseLeft);
    debugger
    reverseLeft.next = rightNode
    if (leftNode) {
        leftNode.next = reverseRight
        return head
    }else{
        return reverseRight
    }
};
var reverseList = function (head) {
    if (head === null || head.next === null) return head
    let newList = reverseList(head.next);
    head.next.next = head;
    head.next = null
    return newList
};

reverseBetween(makeListNode([5]), 1, 1)

// //!递归实现
// var reverseBetween = function(head, left, right) {

// };