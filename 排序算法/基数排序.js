
//!基数排序 (Radix Sort) 是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。是桶排序的扩展，属于效率高的稳定性排序
//!基数排序法会使用到桶 (Bucket)，顾名思义，通过将要比较的位（个位、十位、百位…），将要排序的元素分配至 0~9 个桶中，借以达到排序的作用，在某些时候，基数排序法的效率高于其它的比较性排序法。
/* 
算法步骤：
    1、将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零
    2、从最低位开始，依次进行一次排序
    3、从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列
*/
//!基数排序的方式可以采用 LSD (Least sgnificant digital) 或 MSD (Most sgnificant digital)
function radixSort(arr, maxDigit) {
    // maxDigit 最大为位数
    let bucket = new Array(10)
    let mod = 10
    for (let i = 0; i < maxDigit; i++) {
        console.log(arr);
        for (let j = 0; j < arr.length; j++) {
            if (bucket[Math.floor(arr[j] % mod / (mod / 10))] == null) {
                bucket[Math.floor(arr[j] % mod / (mod / 10))] = []
            }
            bucket[Math.floor(arr[j] % mod / (mod / 10))].push(arr[j])
        }
        let addStack = 0
        // console.log('当前位数是:'+mod,bucket);
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i]) {
                while (bucket[i].length) {
                    arr[addStack++] = bucket[i].shift()
                }
            }
        }
        mod *= 10
    }
    return arr
}
console.log(radixSort([234, 456, 123, 67, 23, 56], 3));
