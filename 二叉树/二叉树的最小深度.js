//递归实现二叉树最小深度
var minDepth = function(root) {
    function getDepth(root){
        //1、确定递归函数的参数和返回值：返回值是对小深度
        //2、确定终止条件
        if(root === null)return 0
        let leftDepth = getDepth(root.left)
        let rightDepth = getDepth(root.right)

        //3、当前单层递归的逻辑
        if(root.left === null &&root.right!=null){
            return 1+rightDepth
        }
        if(root.right === null &&root.left!=null){
            return 1+leftDepth
        }
        return Math.min(leftDepth,rightDepth)+1
    }
    return getDepth(root)
};

//层序遍历迭代实现二叉树最小深度
var minDepth = function(root) {
    if(root === null) return 0
    const queue = []
    queue.push(root)
    let depth = 0
    while(queue.length){
        let queueLen = queue.length;
        depth++
        while(queueLen--){
            const cur = queue.shift()
            cur.left&&queue.push(cur.left)
            cur.right&&queue.push(cur.right)
            if(cur.left===null&&cur.right === null){
                return depth
            }
        }
    }
};