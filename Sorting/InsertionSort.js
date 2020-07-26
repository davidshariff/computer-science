
//     Insertion sort runs in O(n²), or quadratic, time in the worst case. 
//     This typically isn’t very effective and should not be used for large lists. 
//     Because of insertion sort’s low hidden constant value, however, 
//     it usually outperforms more advanced algorithms such as quick sort or merge sort on smaller lists.


let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};
