//层序遍历需要借用辅助数据结构即队列来实现，队列先进先出，符合一层一层的遍历逻辑
//而这种层序遍历方式就是图论中的广度优先遍历，只不过我们应用在二叉树上。

function levelOrder(root){
    let res = []
    if(root === null) return res
    let queue = []
    queue.push(root)
    while(queue.length>0){
        //层层输出
        let queueLen = queue.length;
        let curLevel = []
        while(queueLen--){
            const node = queue.shift()
            curLevel.push(node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res
}