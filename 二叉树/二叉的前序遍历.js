/* 
递归三要素：
1、确定递归函数的参数和返回值
2、确定终止条件
3、确定单层递归的逻辑
*/
//递归实现前序遍历，完全按照递归三要素：
function preorderTraversal(root){
    let res = []
    const dfs = function(root){
        //1、确定递归参数和返回值：因为要打印遍历的节点数值，所以不需要返回值
        //2、确定终止条件：当前处理节点是null需要结束本层递归
        if(root === null) return;
        //3、确定单层递归逻辑:前序遍历是中左右循序，所以先取出中节点的数值
        res.push(root.val)
        //递归左子树
        dfs(root.left)
        //递归右子树
        dfs(root.right)
    }
    dfs(root)
    return res
}

//迭代法实现前序遍历
function preorderTraversal(root){
    const res = []
    if(root === null) return res
    const stack = []
    stack.push(root)
    while(stack.length>0){
        const curNode = stack.pop()
        res.push(curNode.val)
        if(curNode.right){
            stack.push(curNode.right)
        }
        if(curNode.left){
            stack.push(curNode.left)
        }
    }
    return res
}