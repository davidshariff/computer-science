(function() {
    
    var HashTable = function() {
            this.items  = [];
            this.items.length = 100;
        },
        HashStruc = function(val) {
            this.val   = val;
            this.next  = null;
        };
  
    HashTable.prototype.hash = function(val) {
        
        var hashIndex = 0;
      
        for (var i = 0, len = val.length; i < len; i++) {
            hashIndex = i + (hashIndex << 5) - hashIndex;
        }

        return hashIndex % this.items.length;
      
    };
  
    HashTable.prototype.add = function(val) {
      
        // already exists in the table
        if (this.lookup(val) !== null) {
            return;
        }
        // create elements as linked list
        else {
          
            var node = new HashStruc(val),
                hash = this.hash(val);

          node.val  = val;
          node.next = this.items[hash];
          this.items[hash] = node;
          
        }
      
    };
  
    HashTable.prototype.remove = function(val) {
      
        var node = this.lookup(val);
      
        if (node) {
          
            var hash  = this.hash(val),
                list  = this.items[hash],
                prev  = {};
            
            while(list) {
                // node to delete is first in list
                if (this.items[hash].val === val) {
                    this.items[hash] = this.items[hash].next;
                    return;
                }
                else if (list.val === val) {
                    prev.next = list.next;
                    list = null;
                    return;
                }
                prev = list;
                list = list.next;
            }
          
        }
      
    };
  
    HashTable.prototype.lookup = function(val) {
      
        var hash = this.hash(val),
            node = this.items[hash];
      
        if (node) {
          
          while (node) {
              // found the node
              if (node.val === val) {
                  return node;
              }
              node = node.next;
          }
          
        }
        
        return null;
      
    };
  
    table = new HashTable();
    
    // insert single node
    table.add('dddddddddd');
  
    // create a collision based on the hash function
    table.add('aaa');
    table.add('bbb');
    table.add('ccc');
  
    table.remove('bbb');
    
}());
