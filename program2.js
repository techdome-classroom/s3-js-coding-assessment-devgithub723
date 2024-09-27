// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
    
// };


// module.exports={romanToInt}

var romanToInt = function(s) {
    // Create a map to store the values of each Roman numeral
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral and the next one
        let currentVal = romanMap[s[i]];
        let nextVal = romanMap[s[i + 1]];
        
        // If the current value is less than the next value, subtract the current value (e.g., IV = 4)
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, add the current value
            total += currentVal;
        }
    }
    
    return total;
};

module.exports = { romanToInt };
