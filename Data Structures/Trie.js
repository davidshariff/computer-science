(function() {
    
    var Trie = function() {
            this.root = {};   
        };
    
    Trie.prototype.add = function(word) {
     
        if (word) {
        
            var current = this.root;
            
            for (var i = 0, len = word.length; i < len; i++) {
            
                // letter in the trie dosen't exist, add it
                if (word[i] in current === false) {
                    current[word[i]] = {
                        'end_of_key': false
                    };
                }
                
                // move pointer forward
                current = current[word[i]];
                
            }
            
            current.end_of_key = true;
            
        }
        
    };
    
    Trie.prototype.isMember = function(word) {
    
        if (word) {
            
            var current = this.root;
            
            // walkthrough to the last letter in for the searched word
            var i = 0;
            while (current && i < word.length) {
                current = current[word[i]];
                i += 1;
            }
            
            // last letter in the word exists in the trie, and is marked as an end of word
            if (current && current.end_of_key === true) {
                return true;
            }
            
        }
        
        return false;
        
    };
    
    Trie.prototype.remove = function(word) {
        
        for (var i = 0, current = this.root, len = word.length; i < len; i++) {
            current = current[word[i]];
        }
        
        // end of word
        if (current && current.end_of_key === true) {
            current.end_of_key = false;   
        }
        
    };
    
    var trie = new Trie();
    trie.add('Hello');
    trie.add('Help');
    trie.add('Helper');
    trie.add('Helped');
    
    trie.isMember('Hexagon');    // false
    trie.isMember('Helpe');  // false
    trie.isMember('Helper'); // true
    trie.isMember('Help');   // true
    
    trie.remove('Help');
    
    trie.isMember('Help');   // false
    
}());
