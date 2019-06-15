/**
 * @param {string} s
 * @return {boolean}
 * 去除无用数据，再反转匹配判断回文函数
 */
var isPalindrome = function(s) {
    let pureStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    return pureStr.split('').reverse().join('') === pureStr
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))