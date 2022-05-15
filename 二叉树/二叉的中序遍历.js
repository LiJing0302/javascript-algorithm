//递归实现中序遍历
function inorderTraversal(root) {
    const res = []
    const dfs = function (root) {
        if (root === null) return
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
}

//迭代实现中序遍历  与前序遍历不同，需要借助指针实现
//入栈：左 -> 右
//出栈：左 -> 中 -> 右
function inorderTraversal(root) {
    const res = []
    if (root === null) return res
    const stack = []
    let cur = root
    while (stack.length > 0||cur) {
        if(cur){
            stack.push(cur)
            //左入栈
            cur = cur.left
        }else{
            //弹出 中
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
}