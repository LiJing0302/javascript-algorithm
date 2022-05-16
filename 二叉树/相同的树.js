const {makeTreeList} = require('../工具/二叉树')

function compare(p, q) {
    //1、递归函数入参和返回值； 返回是否相同，true or false
    //2、结束条件
    if(p === null && q === null) return true
    if((p === null&&q!=null)||(p != null&&q == null))return false;
    if(p.val != q.val) return false
    else{
        return compare(p.left,q.left)&&compare(p.right,q.right)
    }
}
var isSameTree = function (p, q) {
    return compare(p,q)
};
console.log(isSameTree(makeTreeList([1,2]),makeTreeList([1,null,2])))
