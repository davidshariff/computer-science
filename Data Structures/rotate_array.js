

// Given an array, rotate the array to the right by k steps, where k is non-negative.



var rotate = function(nums, k) {
    let length = nums.length;
    let result = [...nums];
    
    for (let i = 0; i < length; i++) {
        let index = (i + k) % length;
        nums[index] = result[i];
    };

};



// Javascript O(1) space complexity


var rotate = function(nums, k) {
	for(var i = 0; i < k; i++){
		nums.unshift(999);
	}
	var limit = nums.length - k;
	for(var i = nums.length - 1; i >= limit; i--){
		nums[i-limit] = nums[i]
		nums.pop();
	}
};


