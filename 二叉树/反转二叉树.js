
//反转二叉树需要遍历交换做左右子节点；关键在于遍历顺序，前中后序应该选哪一种遍历顺序？
//这道题目使用前序遍历和后序遍历都可以，唯独中序遍历不方便，因为中序遍历会把某些节点的左右孩子翻转了两次！建议拿纸画一画，就理解了
//递归实现反转二叉树
var invertTree = function(root) {
    if(root === null) return root
    function dfs(root){
        if(root.left||root.right){
            let temp = root.left
            root.left = root.right
            root.right = temp
        }else{
            return
        }
       root.left&&dfs(root.left)
       root.right&&dfs(root.right)
    }
    dfs(root)
    return root
};
//迭代-前序遍历实现反转二叉树
function invertTree(root){
    if(root === null) return root
    const stack = []
    stack.push(root)
    while(stack.length>0){
        const cur = stack.pop()
        let temp = cur.left;
        cur.left = cur.right;
        cur.right = temp
        if(cur.right){
            stack.push(cur.right)
        }
        if(cur.left){
            stack.push(cur.left)
        }
    }
    return root
}
//广度优先遍历-层序遍历实现反转二叉树
function invertTree(root){
    if(root === null) return root
    const queue = []
    queue.push(root)
    while(queue.length>0){
        let queueLen = queue.length
        while(queueLen--){
            const cur = queue.shift()
            if(cur.left||cur.right){
                let temp = cur.left
                cur.left = cur.right
                cur.right = temp
            }
            cur.left&&queue.push(cur.left)
            cur.right&&queue.push(cur.right)
        }

    }
    return root
}