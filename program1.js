
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
            
            // If the top element doesn't match the corresponding opening bracket, return false
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets are properly closed
    return stack.length === 0;
};

module.exports = { isValid };
