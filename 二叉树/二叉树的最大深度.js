//!根节点的高度就是二叉树的最大深度，可以使用前序和后序，前序求的是深度，后序求的是高度

//!后序遍历计算树的高度 因为此题求的是二叉树最大深度，所以可以使用后序遍历求解最大深度
var maxDepth = function(root) {
    //1、确定递归函数的参数和返回值：参数是根节点，返回值是返回这棵树的高度
    function getDepth(root){
        //2、确定终止条件
        if(root === null) return 0
        //3、确定单层递归逻辑：先求左子树的深度，再求右子树的深度，最后取二者最大值+1
        let leftDepth = getDepth(root.left)
        let rightDepth = getDepth(root.right)
        let depth =Math.max(leftDepth,rightDepth)+1
        return depth
    }
    return getDepth(root)
};

//!使用前序遍历求解二叉树最大深度====待解决