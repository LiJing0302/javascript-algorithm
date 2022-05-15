//给你一个二叉树根节点，检查它是否轴对称，实质就是比较根节点的左右两棵树
//本题遍历只能是后序遍历，因为我们要通过递归函数的返回值来判断两个字数的内侧节点和外侧节点是否相等
//准确的说是一个树的遍历顺序是左右中，另一个数的遍历顺序是右左中；后序遍历可以理解为是一种回溯


// 递归法实现（本质递归实现后序遍历比较两棵树）
function isSymmetric(root){
    if(root === null) return true
    return compare(root.left,root.right)
}
function compare(left,right){
    if((left === null&&right!=null)||(left!=null&&right === null)){
        return false
    }else if(left === null&&right === null) return true
    else if(left.val!= right.val) return false
    else return compare(left.left,right.right)&&compare(left.right,right.left)
}


//迭代法实现镜像二叉树判断
/* 
这里的迭代法可不是前中后序的迭代写法，
因为本题的本质是判断两个树是否是相互翻转的，
其实已经不是所谓二叉树遍历的前中后序的关系了。
*/
//!这里我们可以使用队列来比较两个树（根节点的左右子树）是否相互翻转，（注意这不是层序遍历）
function isSymmetric(root){
    if(root === null) return true
    const queue = []
    queue.push(root.left,root.right)
    while(queue.length>0){
        const mirrorLeft = queue.shift()
        const mirrorRight = queue.shift()
        if((mirrorLeft === null&&mirrorRight!=null)||(mirrorLeft != null&&mirrorRight===null)){
            return false
        }else if(mirrorLeft == null&&mirrorRight == null) continue
        else if(mirrorLeft.val != mirrorRight.val) return false
        else{
            queue.push(mirrorLeft.left)
            queue.push(mirrorRight.right)
            queue.push(mirrorLeft.right)
            queue.push(mirrorRight.left)
        }
    }
    return true
}