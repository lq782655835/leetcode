// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0, subArr = [], index;
    for (let i = 0; i < s.length; i++) {
      index = subArr.indexOf(s[i]);
      if (index !== -1) {
        subArr = subArr.slice(index + 1, subArr.length);
      }
      subArr.push(s[i]);
      maxLen = Math.max(maxLen, subArr.length);
    }
    return maxLen;
};

let result = lengthOfLongestSubstring('abcaabcabb')
console.log(result)