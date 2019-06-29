// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 * 解题思路：去除无用数据，再反转匹配判断回文函数
 * https://leetcode-cn.com/problems/valid-palindrome/
 */
var isPalindrome = function(s) {
    let pureStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    return pureStr.split('').reverse().join('') === pureStr
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))