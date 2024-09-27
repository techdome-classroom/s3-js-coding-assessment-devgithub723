
var isValid = function(s) {
   
    let stack = [];
    
    // Map to associate closing brackets with corresponding opening ones
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let char of s) {
        // If it's a closing bracket
        if (char in bracketMap) {
            // Pop the top of the stack if it's not empty, otherwise assign a dummy value '#'
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
