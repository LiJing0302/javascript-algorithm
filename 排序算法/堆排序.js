/* 
一、堆分为：大根堆和小根堆；在数组的非降序排序中，需使用的就是大根堆，因为大根堆的最大值一定在堆顶
二、堆的特性：
1.维持完全二叉树；
2.子类数字总是大于或总是小于父类数字

三、堆的节点间的下标规律：
    若节点下标为：i,左子节点下标：2i+1;右子节点下标：2i+2

四、堆的操作：
1.下滤（树的根节点破坏了堆续性，大根堆为例，交换子节点中最大的元素）
2.上滤（树的最后一个元素破坏了堆续性，大根堆为例，与父节点比较，若大于父节点则交换）
        上滤：插入新元素到堆中，复杂度O(logn)
五、乱序数组建堆方法：
    自顶向下建堆法：复杂度O(nlogn)
        方法：1.插入堆 2.上滤
    自下而上建堆法：复杂度(O(n))
        方法：对每个父节点进行下滤操作

        六、堆的具体应用
        1.优先队列
            队列操作：
                1、插入队列:复杂度O(logn)
                    将要插入元素放到最后，然后进行上滤操作
                2、弹出最小元素：复杂度O(logn)
                    这种队列可以用小根堆实现：直接弹出根元素即可，然后将剩余元素调整成堆，将最后元素放到根元素，然后进行下滤操作

六、堆排序：
        将优先队列中的最小根元素一次弹出即可；
        但是考虑到空间复杂度，排序结果会存放到堆空缺的单元中
    优化后的堆排序：
        将大根堆的根元素不断地与最后元素交换，然后跳过替换后的最后元素；
        然后下滤操作找到过滤掉这次最大根的完全二叉树执行下滤操作

*/
//!堆得实现基本思想：
//! 把待排序的元素按照大小在二叉树位置上排列，排序好的的元素满足：父节点的元素要大于等于其子节点；这个过程叫做堆化过程
//!
//!

/* 
堆排序的基本思想是：
将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。
将其与末尾元素进行 交换，此时末尾就为最大值。然后将剩余 n-1 个元素重新构造成一个堆，
这样会得到 n 个元素的次小值。如此反复执行， 便能得到一个有序序列了。 
*/
function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) { //自下而上建堆
        adjustMaxHeep(arr, i, arr.length)   //下滤
    }
}
function adjustMaxHeep(arr, i, lenth) {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let largest = i
    if (left < lenth && arr[largest] < arr[left]) {
        largest = left
    }
    if (right < lenth && arr[largest] < arr[right]) {
        largest = right
    }
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        adjustMaxHeep(arr, largest, lenth)
    }
}
function heapSort(arr) {
    //堆排序
    buildMaxHeap(arr)   //传入数组建立为大顶堆  输出为：[ 7, 5, 6, 4,2, 1, 3 ]
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        adjustMaxHeep(arr, 0, i)
    }
    return arr
}

// =====================堆排序二刷================================================
function heapSort(arr){
//建堆
buildMaxHeap(arr);
console.log(arr);
for(let i=arr.length-1;i>0;i--){
    [arr[i],arr[0]] =[arr[0],arr[i]]
    adjustMaxHeap(arr,0,i)
}
return arr
}
function buildMaxHeap(arr){
    //自顶向下建堆
    for(let i = Math.floor(arr.length/2)-1;i>=0;i--){
        //下滤节点调整大顶堆
        adjustMaxHeap(arr,i,arr.length)
    }
}
function adjustMaxHeap(arr,i,length){
    let left = 2*i+1
    let right = 2*i+2
    let largest = i
    if(left<length&&arr[largest]<arr[left]){
        largest = left
    }
    if(right<length&&arr[largest]<arr[right]){
        largest = right
    }
    if(largest != i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]
        adjustMaxHeap(arr,largest,length)
    }

}
console.log(heapSort([1, 2, 3, 4, 5, 6, 7]));
