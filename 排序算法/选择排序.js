//!选择排序和冒泡排序类似；冒泡排序是两两比较,一个循环中找到最大的元素放到最后；选择排序是逐位和后面元素比较将最小的元素排到前面

function selectSort(arr) {
    let tempLength = arr.length;
    for (let i=0;i<tempLength-1;i++) {
        for (let j = i; j < tempLength; j++) {
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
//!外层循环的i表示第几轮，arr[i]就表示当前轮次最靠前(小)的位置；
//!内层从i开始，依次往后数，找到比开头小的，互换位置即可

function selectSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            if(arr[j]<arr[i]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}
console.log(selectSort([16, 4, 9, 5, 8, 23, 21, 89]))