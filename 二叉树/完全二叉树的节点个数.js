//本题分为普通二叉树遍历求法和利用完全二叉树性质求法
//!普通二叉树通过递归遍历求节点个数
var countNodes = function(root) {
    function getNodeNum(root){
        //1、确定递归入参和返回值：返回节点个数
        //2、递归终止条件
        if(root === null) return 0
        let leftNum = getNodeNum(root.left)
        let rightNum = getNodeNum(root.right)
        return leftNum+rightNum+1
    }
    return getNodeNum(root)
};
//!层序迭代求节点个数
var countNodes = function(root) {
    if(root === null) return 0
    const queue = []
    queue.push(root)
    let sum = 0
    while(queue.length){
        let queueLen = queue.length;
        while(queueLen--){
            let cur = queue.shift()
            sum++
            cur.left&&queue.push(cur.left)
            cur.right&&queue.push(cur.right)
        }
    }
    return sum
};
