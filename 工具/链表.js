class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//将数组转化链表===》leeCode中链表入参以数组形式展示
function makeListNode(arr){
    let head = null
    let pre = null
    let cur = null
    while(arr.length>0){
        if(head){
            cur = new ListNode(arr.shift())
            pre.next = cur

        }else{
            head = cur = new ListNode(arr.shift());
        }
        pre = cur
    }
    return head
}
module.exports = {
    ListNode,
    makeListNode
}