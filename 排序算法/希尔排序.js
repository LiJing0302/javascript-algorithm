//! 希尔排序(缩小增量排序)：插入排序的升级版

function shellSort(arr) {
    let temp = arr.length;
    while (temp > 1) {
        temp = Math.floor(temp / 2)
        for (let k = 0; k < temp; k++) {
            for (let i = temp + k; i < arr.length; i += temp) {
                for (let j = i; j - temp >= 0; j -= temp) {
                    if (arr[j] < arr[j - temp]) {
                        [arr[j], arr[j - temp]] = [arr[j - temp], arr[j]]
                    } else {
                        continue;
                    }
                }
            }
        }
        console.log(temp);
    }
    return arr
}
// ==============================希尔排序二刷===============================
function shellSort(arr){
    let shellIn = Math.floor(arr.length/2)  //设置希尔增量
    while(shellIn>=1){
        shellIn = Math.floor(shellIn/2)
        for(let k = 0;k<shellIn;k++){
            for(let i=shellIn+k;i<arr.length;i+=shellIn){
                for(let j = i;j>0;j-=shellIn){
                    if(arr[j]<arr[j-shellIn]){
                        [arr[j-shellIn],arr[j]] = [arr[j],arr[j-shellIn]]
                    }else{
                        continue
                    }
                }
            }
        }
    }
    return arr
}
var arr = [3, 2, 45, 6, 55, 23];
console.log(shellSort(arr));
