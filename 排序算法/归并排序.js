//!归并思想，分而治之

function mergeSort(arr){
     // 如果不是数组或者数组长度小于等于0，直接返回，不需要排序 
  if (!Array.isArray(arr) || arr.length === 0) return;

  if (arr.length === 1) {   //!递归的终止条件数组的粒度位1
    return arr;     
  }
    let mid = parseInt(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))  //!递归理解：将当钱分的left和right均调用本身归并排序方法，将所得值调用merge合并
}
function merge(left,right){
    let result = []
    let leftTick = 0
    let rightTick = 0
    while(leftTick<left.length&&rightTick<right.length){
        if(left[leftTick]<right[rightTick]){
            result.push(left[leftTick++])
        }else{
            result.push(right[rightTick++])
        }
    }
    while(leftTick<left.length){
        result.push(left[leftTick++])
    }
    while(rightTick<right.length){
        result.push(right[rightTick++])
    }
    return result
}
// mergeSort([16,4,9,5,8,23,21,89])
console.log(mergeSort([16,4,9,5,8,23,21,89]));
