const { makeListNode, ListNode } = require('../工具/链表')
var addTwoNumbers = function (l1, l2) {
    //做题中的思路：
    /* 
    1、循环链表相加位数，满十进位1
    */
    let cur_l1 = l1
    let cur_l2 = l2
    let addVal = 0  //相加得值
    let nextcarry = 0   //进位
    let resNodeList = new ListNode()    //最终结果的链表
    let newListPointer = resNodeList  //新链表的节点指向指针
    while (cur_l1 || cur_l2) {
        let curNewList = new ListNode()
        addVal = nextcarry
        if (cur_l1) {
            addVal += cur_l1.val
            cur_l1 = cur_l1.next
        }
        if (cur_l2) {
            addVal += cur_l2.val
            cur_l2 = cur_l2.next
        }
        curNewList.val = addVal % 10
        nextcarry = 0
        newListPointer.next = curNewList
        newListPointer = newListPointer.next
        nextcarry = parseInt(addVal/10)
    }
    if(nextcarry>0){
        newListPointer.next = new ListNode(nextcarry)
    }
    return resNodeList.next
};
console.log(addTwoNumbers(makeListNode([9,9,9,9,9,9,9]), makeListNode([9,9,9,9])))
