var combinationSum2 = function(candidates, target) {
    candidates.sort()
    let used = new Array(candidates.length).fill(false)
    let result = []
    let path = []
    function backTracking(candidates, target,sum,startIndex,used){
        if(sum>target){
            return
        }
        if(sum === target){
            result.push([...path])
            return
        }
        for(let i=startIndex;i<candidates.length;i++){
            if(i>0&&candidates[i] === candidates[i-1]&&used[i-1]==false){
                continue
            }
            used[i] = true
            sum+=candidates[i]
            path.push(candidates[i])
            backTracking(candidates, target,sum,i+1,used)
            sum-=candidates[i]
            path.pop()
            used[i] = false
        }
    }
    backTracking(candidates, target,0,0,used)
    return result
};
console.log(combinationSum2([10,1,2,7,6,1,5],8));