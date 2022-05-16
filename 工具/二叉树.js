//二叉树节点的定义
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function makeTreeList(arr) {
    if(arr == []) return null;
    let resultList = []
    for(let i=0;i<arr.length;i++){
        resultList.push(new TreeNode(arr[i]))
    }
    for(let i=0;i<arr.length;i++){
        if((2*i+1)<arr.length){
            resultList[i].left = resultList[2*i+1]
        }
        if((2*i+2)<arr.length){
            resultList[i].right = resultList[2*i+2]
        }
    } 
    return resultList[0]
}
module.exports = {
    TreeNode,
    makeTreeList
}