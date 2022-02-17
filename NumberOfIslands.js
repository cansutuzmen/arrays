//leetcode - Number od Islands
/*
https://leetcode.com/problems/number-of-islands/
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //input check
    if(!grid.length || !grid[0].length){
        return 0;
    }
    
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // up, right, down, left
    let count = 0;
    
    //sequential
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === "1"){
                count++;
                grid[i][j] = "0";
                const queue = [];
                queue.push([i, j]);
                
                //BFS
                while(queue.length){
                    const currPos = queue.shift();
                    const currRow = currPos[0];
                    const currCol = currPos[1];
                    
                    for(let i = 0; i < directions.length; i++){
                        const currDir = directions[i];
                        const nextRow = currRow + currDir[0];
                        const nextCol = currCol + currDir[1];
                        
                        if(nextRow  < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length){
                            continue;
                        }
                        
                        
                        if(grid[nextRow][nextCol] === "1"){
                            queue.push([nextRow, nextCol]);
                            grid[nextRow][nextCol] = "0";
                        }
                    }
                }
            }
            
        }
    }
    
    return count;
};

