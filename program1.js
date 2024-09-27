
var isValid = function(s) {
   
    let stack = [];
    
    
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    
    for (let char of s) {
        
        if (char in bracketMap) {
           
            let topElement = stack.length === 0 ? '#' : stack.pop();
            
            
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            
            stack.push(char);
        }
    }
    
 
    return stack.length === 0;
};

module.exports = { isValid };
