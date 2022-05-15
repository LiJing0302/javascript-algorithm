//二叉树的后序遍历
function postorderTraversal(root){
    const res = []
    const dfs = function(root){
        if(root === null) return
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
}

//迭代实现二叉树后序遍历
function postorderTraversal(root){
    const res = []
    if(root === null) return res
    const stack = [root]
    while(stack.length){
        const cur = stack.pop()
        res.push(cur.val)
        if(cur.left){
            stack.push(cur.left)
        }
        if(cur.right){
            stack.push(cur.right)
        }
    }
    return res.reverse()
}