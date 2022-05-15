//!冒泡排序基本思想:对相邻的元素进行两两比较，顺序相反则进行交换，这样，每一趟会将最小或最大的元素“浮”到顶端， 最终达到完全有序。

function bubbleSort(arr){
    let lengthTemp = arr.length
    while(--lengthTemp){
        for(let i=0;i<lengthTemp-1;i++){
            if(arr[i]>arr[i+1]){
               [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }
    }
    return arr
}

// ==============================冒泡排序二刷===================================
function bubbleSort(arr){
    for(let j=0;j<arr.length-1;j++){
        for(let i=0;i<arr.length-1-j;i++){
            if(arr[i]>arr[i+1]){
                [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([16,4,9,5,8,23,21,89]))
//!平均时间时间复杂度：n^2  最坏时间复杂度n^2  空间复杂度O(1)  是稳定排序  