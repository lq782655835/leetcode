// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

/**
 * @param {string} s
 * @return {number}
 * 解题思路：原字符串forEach循环，记录子串，当遇到子串中已拥有的重复的字符时，子串等于从重复的字符下标开始。
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function(s) {
  // 构建子串，每次记录最大值。子串有重复数据，往前处理
  let subArr = [],
      maxLength = 0
  Array.from(s).forEach(char => {
    let index = subArr.indexOf(char)
    if (index > -1) {
        subArr = subArr.slice(index + 1) // 从子串中，重复地方开始
    }
    subArr.push(char)
    maxLength = Math.max(maxLength, subArr.length)
  })

  return maxLength
};

let result = lengthOfLongestSubstring('abcaabcabb')
console.log(result)