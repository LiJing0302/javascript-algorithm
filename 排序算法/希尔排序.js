//! 希尔排序(缩小增量排序)：

// function shellSort(arr,gap) {
//     console.log(arr)//为了方便观察过程，使用时去除
//     for(let i = 0; i<gap.length; i++) {  //最外层循环，一次取不同的步长，步长需要预先给出
//         let n = gap[i]; //步长为n
//         for(let j = i + n; j < arr.length; j++) { //接下类和插入排序一样，j循环依次取后面的数
//             for(let k = j; k > 0; k-=n) { //k循环进行比较，和直接插入的唯一区别是1变为了n
//                 if(arr[k] < arr[k-n]) {
//                     [arr[k],arr[k-n]] = [arr[k-n],arr[k]];
//                     console.log(`当前序列为[${arr}] \n 交换了${arr[k]}和${arr[k-n]}`)//为了观察过程
//                 } else {
//                     continue;
//                 }
//             }
//         }
//     }
//     return arr;
// }

function insertSort(A,n,g){
    for(let i=g;i<n;i++){
        let v=A[i];
        let j=i-g;
        while(j>=0&&A[j]>v){
            A[j+g]=A[j];
            j-=g;
            console.log(`交换了${A[j+g]}和${A[j]},交换后结果：${A}`)
            // cnt++ 
        }
        A[j+g]=v;
    }
}

var arr = [3, 2, 45, 6, 55, 23];

insertSort(arr,)