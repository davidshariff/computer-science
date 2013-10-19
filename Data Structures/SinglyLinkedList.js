(function() {

    var LinkedList = function() {
            this.head = null;   
        },
        LinkedNode = function(data) {
            this.data  = data;
            this.next  = null;
        };
    
    LinkedList.prototype.insert = function(data) {
    
        var node = new LinkedNode(data),
            curr = this.head;
        
        if (!curr) {
            this.head = node;   
        }
        else {
            
            while (curr.next) {
                curr = curr.next;
            }
            
            curr.next = node;
        }
        
        return node;
        
    };
    
    LinkedList.prototype.remove = function(data) {
        
        if (this.head.data === data) {
            this.head = this.head.next || null;
        }
        else {
            
            var curr = this.head,
            prev = null;
        
            while (curr) {

                if (curr.data === data) {
                    prev.next = curr.next;
                    curr      = null;
                }
                else {
                    prev = curr;
                    curr = curr.next;
                }

            }
            
        }
        
    };
    
    LinkedList.prototype.find = function(data) {
        
        var curr = this.head;
        
        while (curr) {
            if (curr.data === data) {
                return curr;
            }
            curr = curr.next;
        }
        
    };
    
    LinkedList.prototype.print = function() {
        
        var curr = this.head;
        
        while (curr) {
            console.log(curr);
            curr = curr.next;
        }
        
    };
    
    var myList = new LinkedList();
    
    myList.insert('a');
    myList.insert('b');
    myList.insert('c');
    myList.insert('d');
    myList.insert('e');
    
    myList.remove('b');
    myList.find('a');
    myList.print();
    
}());
