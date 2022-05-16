const {makeTreeList} = require('../工具/二叉树')


//!这道题目要求从根节点到叶子的路径，所以需要前序遍历，这样才方便让父节点指向孩子节点，找到对应的路径。
//!在这道题目中将第一次涉及到回溯，因为我们要把路径记录下来，需要回溯来回退一一个路径在进入另一个路径。
//我们先使用递归的方式，来做前序遍历。要知道递归和回溯就是一家的，本题也需要回溯

var binaryTreePaths = function(root) {
    if(root === null) return 0;
    let result = []
    function traversal(root,curPath){
        //!  1、确定入参和返回值：传入root，记录每一条路径存入结果数组中，所以不需要返回值
        //! 2、确定递归终止条件
        /* 
        if(root === null) return  
         本题的终止条件这样写会很麻烦，因为本题要找到叶子节点，就开始结束的处理逻辑了（把路径放进result里）。
         所以递归终止条件是找到叶子结点：cur!=null&&cur.left == null&&cur.right == null
        */
        if(root.left === null&&root.right === null){
            //!到达终止条件需要将path数组中存放的所有节点转化成答案需要的形式
            curPath += root.val+''
            result.push(curPath)
        }
        curPath += root.val+'->'
        root.left&&traversal(root.left,curPath)
        root.right&&traversal(root.right,curPath)
    } 
    traversal(root,'')
    return result
};

console.log(binaryTreePaths(makeTreeList([1,2,3,null,5])));