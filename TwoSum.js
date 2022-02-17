//Leetcode - Two Sum
/*
https://leetcode.com/problems/two-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!nums.length){
        return [];
    }
    
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (difference in map) {
            return [map[difference], i]
        }

        map[nums[i]] = i
    }
};

