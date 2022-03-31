/**
HackerRank - Simple Text Editor

https://www.hackerrank.com/challenges/simple-text-editor/problem
**/

function processData(input) {
    const inputArr = input.split("\n");
  
    let stack = [];
    let str = "";
    
    for(let i = 1; i <= parseInt(inputArr[0]); i++){
        const currentLine = inputArr[i].split(" ");
        const operation = currentLine[0];
        const k = currentLine[1];
               
        if(operation === '1'){
            stack.push(str);
            str += k;
        }
        
        if(operation === '2'){
            stack.push(str);
            str = str.substring(0, str.length - parseInt(k));
        }
        
        if(operation === '3'){
            console.log(str.charAt(parseInt(k) - 1));
        }
        
        if(operation === '4'){
            str = stack.pop();
        }
    }
} 

