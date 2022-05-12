//!插入排序核心思想--扑克牌思想：假设一个正确排序，循环将每一项插入正确排序中

// function insertSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let cur = arr[i]
//         let j = i-1 //0
//         while(j>=0&&cur<arr[j]){
//             arr[j+1] = arr[j] 
//             j--
//         }
//         arr[j+1] = cur
        
//     }
//     return arr
// }

function insertSort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>=0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
            }else{
                continue
            }
        }
    }
    return arr
}
console.log(insertSort([16,4,9,5,8,23,21,89]))