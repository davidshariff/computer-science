(function() {
    
    var MaxHeap = function() {
            this.items = [];
            this.size  = -1;
        };
    
    MaxHeap.prototype.insert = function(val) {
        
        var pos = ++this.size,
            parentIndex = this.findParentIndex(pos);
        
        // new elements go to last position
        this.items[pos] = val;
        
        if (pos > 0) {
            
            // bubble up new value
            while (this.items[pos] > this.items[parentIndex]) {
                
                // update values
                this.items[pos] = this.items[parentIndex];
                this.items[parentIndex] = val;
                
                // move pointers
                pos = parentIndex;
                parentIndex = this.findParentIndex(pos);
                
            }
            
        }
        
        return pos;
        
    };
    
    MaxHeap.prototype.findParentIndex = function(index) {
        return Math.floor((index - 1) / 2);
    };
    
    var heap = new MaxHeap();
    
    // [20, 13, 9, 8, 5, 3, 7, 6, 2, 1, 19]
    heap.insert(20);
    heap.insert(13);
    heap.insert(9);
    heap.insert(8);
    heap.insert(5);
    heap.insert(3);
    heap.insert(7);
    heap.insert(6);
    heap.insert(2);
    heap.insert(1);
    
    // [20, 19, 9, 8, 13, 3, 7, 6, 2, 1, 5]
    heap.insert(19);
    
    // [25, 19, 20, 8, 13, 9, 7, 6, 2, 1, 5, 3]
    heap.insert(25);
    
}());
