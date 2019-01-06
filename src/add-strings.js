// https://leetcode.com/problems/add-strings/
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len1 = num1.length
    let len2 = num2.length
    let maxLength = Math.max(len1, len2)
    let reduce = (char1, char2, plus) => {
        let sum = (char1.charCodeAt() - 48) + (char2.charCodeAt() - 48) + (plus ? 1 : 0)
        return [sum % 10, sum > 9]
    }

    let plusNum = '', plus = false
    for (let i = 0; i < maxLength; i++) {
        let [value, canPlus] = reduce(num1[len1 - i - 1] || '0', num2[len2 - i - 1] || '0', plus)
        plusNum = value + plusNum
        plus = canPlus
    }
    plus && (plusNum = '1' + plusNum)
    return plusNum
};

let result = addStrings('1', '9')
console.log(result)