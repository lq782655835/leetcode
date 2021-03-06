// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-palindrome
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 方法一：解题思路：去除无用数据，再反转匹配判断回文函数
    // let pureStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    // return pureStr.split('').reverse().join('') === pureStr

    // 方法二：双指针法
    let i = 0
    let j = s.length - 1
    let marchRegex = /[a-zA-Z0-9]/
    while(i < j) {
        while(!marchRegex.test(s[i])) {
            i++
        }
        while(!marchRegex.test(s[j])) {
            j--
        }

        if (i < j) {
            if (s[i].toLowerCase() != s[j].toLowerCase()){
                return false
            } else {
                i++
                j--
            }
        }
    }
    return true
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))