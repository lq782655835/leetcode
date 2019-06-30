// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true

/**
 * @param {number} x
 * @return {boolean}
 * 解题思路：回文文字的特征是，文字反转依然等于文字
 * https://leetcode-cn.com/problems/palindrome-number/
 */
var isPalindrome = function(x) {
    return String(x) === String(x).split('').reverse().join('')
};