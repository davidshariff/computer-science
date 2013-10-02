(function() {
    
    var Stack = function() {
        this.top     = -1;
        this._stack  = [];
    };
    
    Stack.prototype.push = function(node) {
        this.top++;
        this._stack[this.top] = node;
    };
    
    Stack.prototype.pop = function() {
        this._stack.splice(this.top, 1);
        this.top--;
    };
    
    var stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    
    // 1, 2
    console.log(stack);
    
}());