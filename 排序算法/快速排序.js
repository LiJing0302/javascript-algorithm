//!快速排序：选择一个基准元素，将列表分割成两个子序列；  两个子序列
//! 分而治之
function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let left = []
    let right = []
    let baseEl = arr.splice(0,1);
    for(let i=0;i<arr.length;i++){
        if(arr[i]>baseEl){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(baseEl,quickSort(right))
}

// ===============================快速排序二刷======================================
function quickSort(arr){
    if(arr.length <=1)return arr
    let left = []
    let right = []
    let base = arr.shift()
    for(let i=0;i<arr.length;i++){
        if(arr[i]>base){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(base,quickSort(right))
}
console.log(quickSort([2,7,3,2,87,324,677,90]))