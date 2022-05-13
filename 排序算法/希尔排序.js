//! 希尔排序(缩小增量排序)：

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

var arr = [3, 2, 45, 6, 55, 23];
console.log(shellSort(arr));
