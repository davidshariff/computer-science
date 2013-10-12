(function() {
    
    var Merge = function(left, right) {
        
            var l = 0,
                r = 0, 
                k = 0,
                l_len  = left.length,
                r_len  = right.length,
                result = [];
            
            // go through both arrays, comparing each element against the element in the adjacent array
            while (l < l_len && r < r_len) {
            
                if (left[l] < right[r]) {
                    result[k] = left[l];
                    l++;
                }
                else {
                    result[k] = right[r];
                    r++;
                }
                
                // move the pointer of the result array forward
                k++;
                
            }
            
            // if one of the arrays is larger than the other, we may have some leftovers
            while (l < l_len) {
                result[k] = left[l];
                l++;
                k++;
            }
            while (r < r_len) {
                result[k] = right[r];
                r++;
                k++;
            }
            
            return result;
        
        },
        MergeSort = function(inputArr) {
            
            var len   = inputArr.length,
                left  = [],
                right = [],
                mid;
            
            // less than 2 elements means we can't merge / compare anything
            if (len < 2) {
                return inputArr;
            }
            
            // find the middle, rounding up for odd no of elems
            mid = Math.floor(len / 2);
            
            // split left and right into sub-arrays
            left  = inputArr.slice(0, mid);
            right = inputArr.slice(mid);
            
            // keep dividing the sub-arrays
            left  = MergeSort(left);
            right = MergeSort(right);
            
            // conquer the sub-arrays by sorting and merging them
            return Merge(left, right);
            
        };
    
    var myArray = [2, 4, 1, 6, 8, 5, 9, 3, 4];
    
    // [1, 2, 3, 4, 4, 5, 6, 8, 9]
    MergeSort(myArray);
    
}());
