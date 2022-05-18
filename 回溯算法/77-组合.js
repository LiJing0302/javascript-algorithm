//!给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
var combine = function (n, k) {
    let result = [] //结果数组
    let path = []   //每一层递归的结果存放
    function reTracking(n, k, startIndex) {
        //1、确定入参和返回值
        //2、回溯终止条件==》到叶子结点==》当组合的数组path到达数组大小为k的时候即到达了叶子结点
        if (path.length === k) {
            result.push([...path])
            return
        }
        //3、单层搜索过程
        for (let i = startIndex; i <= n-(k-path.length)+1; i++) {    //控制树的横向遍历       //!这里可以剪枝优化：已选元素个数:path.length,还需要的元素个数：(k-path.length)
            path.push(i)
            reTracking(n, k, i + 1) //纵向深层递归
            path.pop()
        }
    }
    reTracking(n,k,1)
    console.log(result)
};
combine(1,1)