(function() {
    
    var QuickSort = function(inputArr) {
        
        var len   = inputArr.length,
            left  = [],
            right = [],
            pivot;
        
        if (len === 0) {
            return inputArr;
        }
        
        pivot = inputArr[0];
        
        // partition values into upper and lower
        // start at second element, since we are using first element as the pivot
        for (var i = 1; i < len; i++) {
         
            if (inputArr[i] <= pivot) {
                left.push(inputArr[i]);
            }
            else {
                right.push(inputArr[i]);   
            }
            
        }
        
        left  = QuickSort(left);
        right = QuickSort(right);

        return left.concat(pivot, right);
        
    };
    
    var myArray = [2, 4, 1, 6, 8, 5, 9, 3, 4];
    
    // [1, 2, 3, 4, 4, 5, 6, 8, 9]
    QuickSort(myArray);
    
}());
