//!非比较排序，快于任何比较排序算法。当然是一种牺牲空间换取时间的做法；
//!计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
/* 
算法步骤：
    1、花O(n)的时间扫描一下整个序列 A，获取最小值 min 和最大值 max
    2、开辟一块新的空间创建新的数组 B，长度为 ( max - min + 1)
    3、数组 B 中 index 的元素记录的值是 A 中某元素出现的次数
    4、后输出目标整数序列，具体的逻辑是遍历数组 B，输出相应元素以及对应的个数
*/

function countingSort(arr,maxValue){
    let bucket = new Array(maxValue+1).fill(0)
    let result = []
    for(let i=0;i<arr.length;i++){
        bucket[arr[i]]+=1
    }
    for(let i = 0;i<maxValue+1;i++){
        while(bucket[i]-->0){
            result.push(i)
        }
    }
    return result
}
console.log(countingSort([1,7,4,6,3,7,3,2,4,5,3,6,3],7));
