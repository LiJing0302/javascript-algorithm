
//判断给定二叉树是否是高度平衡的二叉树（子树高度差绝对值不超过1）
//!搞清楚是求高度还是求深度:高度是从待求节点算起到叶子结点；深度是从根节点到待求节点
//!平衡二叉树求的是节点高度差，求高度用用后序遍历（左右中）

var isBalanced = function(root) {
    if(root === null) return true
    function getDepth(root){

        //1、确定入参和返回值：入参为当前节点，返回值为树的高度
        //2、迭代终止条件
        if(root === null) return 0
        //3、明确单层递归逻辑：当前传入节点的左子树和右子树的高度差值<=1，则为平衡二叉树
        let leftHeight = getDepth(root.left)
        if(leftHeight == -1) return -1
        let rightHeight = getDepth(root.right)
        if(rightHeight == -1) return -1
        if(Math.abs(leftHeight-rightHeight)>1){
            return -1
        }else{
            return Math.max(leftHeight,rightHeight)+1
        }
    }
    return getDepth(root) === -1 ?false:true
};