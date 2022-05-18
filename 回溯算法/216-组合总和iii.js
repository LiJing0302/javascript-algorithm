//!找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
var combinationSum3 = function(k, n) {
    let result = []
    let path = []
    function backTracking(k,n,startIndex,sum){
        //1、确定回溯函数入参和返回值； 需要一维数组path来存放符合条件的结果;startIndex（int）为下一层for循环搜索的起始位置;sum（int）为已经收集的元素的总和，也就是path里元素的总和

        //!确定回溯结束条件
        if(path.length === k){
            if(sum>n)return
            if(sum === n){
                result.push([...path])
            }
            return
        }
        for(let i = startIndex;i<=9-(k-path.length)+1;i++){
            sum += i
            path.push(i)
            backTracking(k,n,i+1,sum)
            sum-=i
            path.pop()
        }
    }
    backTracking(k,n,1,0)
    return result
};
console.log(combinationSum3(9,45));


//!如果是一个集合来求组合的话，就需要startIndex
//!如果是多个集合取组合，各个集合之间相互不影响，那么就不用startIndex