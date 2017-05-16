(function() {

    var DoublyLinkedList = function() {
            this.head = null;   
            this.tail = null;
        },
        LinkedNode = function(data) {
            this.data = data;
            this.next = null;
            this.prev = null; 
        };
    
    DoublyLinkedList.prototype.insert = function(data) {
        
        var node = new LinkedNode(data);
    
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev      = this.tail;
            this.tail      = node;
        }
        
        return node;
        
    };
    
    DoublyLinkedList.prototype.remove = function(data) {
        
        if (!this.head.next) {
            this.head = this.tail = null;
        }
        else {
            
            var curr = this.head;
            
            while (curr) {
                
                if (curr.data === data) {
                    
                    curr.prev.next = curr.next;
                    if(cur === this.tail) this.tail = cur.prev;
                    else cur.next.prev = cur.prev;
                    curr = null;
                    
                }
                else {
                    curr = curr.next;
                }
                
            }
            
        }
        
    };
    
    DoublyLinkedList.prototype.find = function(data) {
        
        var curr = this.head;
        
        while (curr) {
            if (curr.data === data) {
                return curr;
            }
            curr = curr.next;
        }
        
    };
    
    DoublyLinkedList.prototype.print = function() {
        
        var curr = this.head;
        
        while (curr) {
            console.log(curr);
            curr = curr.next;
        }
        
    };
    
    var myList = new DoublyLinkedList();
    
    myList.insert('a');
    myList.insert('b');
    myList.insert('c');
    myList.insert('d');
    myList.insert('e');
    
    myList.remove('b');
    myList.remove('e');
    myList.find('a');
    myList.print();
    
}());
