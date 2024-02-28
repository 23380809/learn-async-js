function sumOfARow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(arr) && arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0;
                for (let j = 0; j < arr[rowIdx].length; j++) {
                    sum += arr[rowIdx][j];
                }
                resolve(sum);
            }, 0);
        } else {
            reject('BAD INPUT: Expected array as input');
        }
    });
}



const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


rowSumRromises = [];

for (let i = 0; i < array2D.length; i++) {
    rowSumRromises.push(sumOfARow(array2D, i));
}

Promise.all(rowSumRromises).then((rowSums) => {
    let sum = 0
    rowSums.forEach((rowSum) => {
        sum += rowSum;
    });
    console.log(sum);
})