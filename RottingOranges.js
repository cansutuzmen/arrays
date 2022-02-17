//Leetcode - Rotting Oranges
/*
https://leetcode.com/problems/rotting-oranges/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    //input check
    if(!grid.length || !grid[0].length){
        return 0;
    }
    
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // up, right, down, left
    const queue = [];
    
    let numberOfFreshOranges = 0;
    let minutes = [];

    //Sequential Order
    for(let  i = 0; i < grid.length; i++){
        for(let j = 0; j <grid[0].length; j++){
            if(grid[i][j] === 2){
                queue.push([i, j]);
            }
            if(grid[i][j] === 1){
                numberOfFreshOranges++;
            }
        }
    }
    
    let currentNumberOfRottens = queue.length;
    
    //BFS
    while(queue.length > 0 ){
        if(currentNumberOfRottens === 0){
            minutes++;
            currentNumberOfRottens = queue.length;
        }
        
        const currOrange = queue.shift();
        currentNumberOfRottens--;
        
        const currRow = currOrange[0];
        const currCol = currOrange[1];
        
        for(let i = 0;  i < directions.length; i++){
            const currDir = directions[i];
            const nextRow = currRow + currDir[0];
            const nextCol = currCol + currDir[1];
            
            if(nextRow  < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length){
                continue;
            }
            
            if(grid[nextRow][nextCol] === 1){
                grid[nextRow][nextCol] = 2;
                numberOfFreshOranges--;
                queue.push([nextRow, nextCol])
            }
        }
        
    }
    
    if(numberOfFreshOranges > 0){
        return -1;
    }
    
    return minutes;    
};

