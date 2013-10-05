(function() {
    
    var BinaryTree = function() {
            this.root = null;
        },
        BinaryNode = function(val) {
            this.val = val;
            // new nodes are leafs
            this.left   = null;
            this.right  = null;
        };

    BinaryTree.prototype.insert = function(val) {
      
        var node = new BinaryNode(val);
      
        if (this.root === null) {
            this.root = node;
        }
        else {
            this.insertNode(node, this.root);
        }
        
    };
    
    BinaryTree.prototype.locate = function(find) {
      
        if (this.root.val === find) {
            return this.root;
        }
        else {
            return this.locateNode(find, this.root);
        }
        
    };
    
    BinaryTree.prototype.locateNode = function(find, subtree) {
        
        if (subtree) {
            // found the matching node
            if (find === subtree.val) {
                console.log(subtree);
                return subtree;
            }
            else if (find < subtree.val) {
                return this.locateNode(find, subtree.left);
            }
            else if (find > subtree.val) {
                return this.locateNode(find, subtree.right);
            }
        }
        
        return null;
        
    };
    
    // pre-order insert
    BinaryTree.prototype.insertNode = function(node, subtree) {
        
        // no value in current tree, insert it here
        if (!subtree) {
            subtree = node; 
        }
        else if (node.val < subtree.val) {
            subtree.left = this.insertNode(node, subtree.left);
        }
        else if (node.val > subtree.val) {
            subtree.right = this.insertNode(node, subtree.right);
        }
        
        return subtree;
        
    };
    
    BinaryTree.prototype.printPreOrder = function(subtree) {
        
        if (!subtree) {
            return;   
        }
        
        console.log(subtree.val);
        this.printPreOrder(subtree.left);
        this.printPreOrder(subtree.right);
        
    };
    
    BinaryTree.prototype.printInOrder = function(subtree) {
        
        if (!subtree) {
            return;   
        }
        
        this.printInOrder(subtree.left);
        console.log(subtree.val);
        this.printInOrder(subtree.right);
        
    };
    
    BinaryTree.prototype.printPostOrder = function(subtree) {
        
        if (!subtree) {
            return;   
        }
        
        this.printPostOrder(subtree.left);
        this.printPostOrder(subtree.right);
        console.log(subtree.val);
        
    };
    
    var tree = new BinaryTree();
    tree.insert(20);
    tree.insert(10);
    tree.insert(15);
    tree.insert(9);
    tree.insert(25);
    
    tree.printInOrder(tree.root);
    tree.locate(15);
    
}());
