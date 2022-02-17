//Leetcode - Backspace string compare
/*
https://leetcode.com/problems/backspace-string-compare/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;
    
    while(p1 >= 0 || p2 >= 0){
        if(s[p1] === '#' || t[p2] === '#'){
            if(s[p1] === '#'){
                let i = 2;
                while(i > 0){
                    p1--;
                    i--;
                    if(s[p1] === '#'){
                        i+= 2;
                    }
                }
            }
            if(t[p2] === '#'){
                let i = 2;
                while(i > 0){
                    p2--;
                    i--;
                    if(t[p2] === '#'){
                        i+= 2;
                    }
                }
            }
        }else{
            if(s[p1] !== t[p2]){
                return false;
            }else{
                p1--;
                p2--;
            }
        }  
    }
    
    return true;
};

