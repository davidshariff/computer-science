(function() {
    
    var Queue = function() {
        this.tail     = -1;
        this._queue   = [];
    };
    
    Queue.prototype.enqueue = function(node) {
        this.tail++;
        this._queue[this.tail] = node;
    };
    
    Queue.prototype.dequeue = function() {
        var removed = this._queue.shift();
        this.tail--;
        return removed;
    };
  
    Queue.prototype.size = function() {
        return this.tail + 1;
    };
  
    Queue.prototype.isEmpty = function() {
        return (this.size() === 0);
    };
    
    var queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    
    // 2, 3
    console.log(queue);

    
}());
