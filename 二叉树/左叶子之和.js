
//!求左叶子之和：如果左节点不为空，且左节点没有左右孩子，那么这个节点就是左叶子
//!遍历求左叶子之和，用后序遍历
var sumOfLeftLeaves = function (root) {
    let sum = 0
    function getLeftSum(root) {
        //1、递归入参和返回值确定
        //2、递归终止条件 
        if (root === null) return sum
        if (root.left != null && root.left.left === null && root.left.right === null) {
            sum += root.left.val
        }
        getLeftSum(root.left)
        getLeftSum(root.right)

    }
    getLeftSum(root)
    return sum
};