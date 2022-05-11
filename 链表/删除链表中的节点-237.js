const { makeListNode, ListNode } = require('../工具/链表')
//请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。

//题目数据保证需要删除的节点 不是末尾节点 ,每个节点值唯一
//!思路：将当前要删除的节点替换为下一节点，然后再删除下一节点。
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next
};