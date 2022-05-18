
//!给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。candidates 中的数字可以无限制重复被选取。
var combinationSum = function(candidates, target) {
    let result = []
    let path = []
    //考虑回溯深度：递归深度由条件判断：sum>=target
    //考虑横向遍历：candidates.length
    function backTracking(candidates,target,sum,startIndex){
        //1、回溯入参和返回值
        //2、回溯结束条件
        if(sum>target){
            return
        }
        if(sum === target){
            result.push([...path])
            return
        }
        for(let i=startIndex;i<candidates.length;i++){
            path.push(candidates[i])
            sum+=candidates[i]
            backTracking(candidates,target,sum,i)
            sum-=candidates[i]
            path.pop()
        }
        //3、回溯单次逻辑
    }
    backTracking(candidates,target,0,0)
    return result
};
console.log(combinationSum([2,3,6,7],7))
