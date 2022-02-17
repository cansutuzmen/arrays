//leetcode - container with most water
/*
https://leetcode.com/problems/container-with-most-water/
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let p1= 0;
    let p2 = height.length - 1;
    let max = 0;
    
    while(p2 > p1){
        const h = Math.min(height[p1], height[p2]);
        const w = p2 - p1;
        max = Math.max(h * w, max);
        
        if(height[p2] >= height[p1]){
            p1++;
        }else{
            p2--;
        }
    }
    
    return max;
};


