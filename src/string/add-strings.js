// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：

// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-strings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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