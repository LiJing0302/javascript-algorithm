//!给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。  给出数字到字母的映射（与电话按键相同）。注意 1 不对应任何字母。

var letterCombinations = function(digits) {
    if(digits.length<1)return []
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let depth = digits.length  //回溯深度
    let result = []
    let path = []
    function backTracking(depth,map,index){  //startIndex：digist每一位

        //1、确定回溯的入参和返回值

        //2、确定终止条件
        if(path.length === depth){
            result.push(path.join(''))
            return
        }
        //3、本次回溯单层逻辑
        for(let i=0;i<map[digits[index]*1].length;i++){
            path.push(map[digits[index]*1][i])
            index++
            backTracking(depth,map,index)
            index--
            path.pop()
        }
    }
    backTracking(depth,map,0)
    return result
};
console.log(letterCombinations('23'));
