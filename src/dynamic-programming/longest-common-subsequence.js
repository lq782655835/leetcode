// 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

// 若这两个字符串没有公共子序列，则返回 0。

//  

// 示例 1:

// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace"，它的长度为 3。
// 示例 2:

// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc"，它的长度为 3。
// 示例 3:

// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0。
//  

// 提示:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// 输入的字符串只含有小写英文字符。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-subsequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * 核心（解法方程式）：S1[m] == S2[n]：
LCS(m,n) = 1 + LCS(m-1, n-1)
S1[m] != S2[n]：
LCS(m,n) = max( LCS(m-1, n), LCS(m, n-1) )
 */
var longestCommonSubsequence = function(text1, text2) {
    // // 方法一：递归。缺点：时间太长：2的n次方，极容易超时
    // let lcs = (s1, l1, s2, l2) => { // l1 l2是数组长度
    //     // 递归终止条件
    //     if (l1 === 0 || l2 === 0) {
    //         return 0
    //     }
        
    //     if (s1[l1 -1] === s2[l2 - 1]) {
    //         // 最后一位相等，一定是在公共子序列中
    //         return 1 + lcs(s1, l1 - 1, s2, l2 - 1)
    //     } else {
    //         // 如果最后一位不相等，说明最后一位在当前情况，不可能同时存在在公共子序列中（因为从后往前排）。
    //         // 如ABD和ABDE，要么D存在，要么E存在
    //         let numNoneS1 = lcs(s1, l1 - 1, s2, l2)
    //         let numNoneS2 = lcs(s1, l1, s2, l2 - 1)
    //         return Math.max(numNoneS1, numNoneS2)
    //     }
    // }
    // return lcs(text1, text1.length, text2, text2.length)

    // // 方法一改进：递归（自顶向上），缓存计算结果
    // let lcs = (s1, l1, s2, l2) => { // l1 l2是数组长度
    //     if (value_table[l1][l2] !== 0) {
    //         return value_table[l1][l2]
    //     }
        
    //     // return结束递归条件
    //     if (l1 <= 0 || l2 <= 0) {
    //         return value_table[l1][l2] = 0
    //     }
        
    //     if (s1[l1 - 1] === s2[l2 - 1]) {
    //         value_table[l1][l2] = 1 + lcs(s1, l1 - 1, s2, l2 - 1)
    //     } else {
    //         let numNoneS1 = lcs(s1, l1 - 1, s2, l2)
    //         let numNoneS2 = lcs(s1, l1, s2, l2 - 1)
    //         value_table[l1][l2] = Math.max(numNoneS1, numNoneS2)
    //     }
    //     return value_table[l1][l2]
    // }

    // let l1 = text1.length
    // let l2 = text2.length
    // // 初始化二维数组，缓存中间计算值
    // let value_table = []
    // let row = Array(l2+1).fill(0)
    // for(let i = 0; i <= l1; i++) {
    //     value_table.push([...row])
    // }
    // return lcs(text1, l1, text2, l2)
    
    // 方法二：动态规划(自底向上)
    let l1 = text1.length
    let l2 = text2.length

    // 初始化二维数组，缓存中间计算值
    let value_table = []
    let row = Array(l2+1).fill(0)
    for(let i = 0; i <= l1; i++) {
        value_table.push([...row])
    }
    for (let i = 0; i <= l1; i++) {
        for (let j = 0; j <= l2; j++) {
            if (i == 0 || j == 0) {
                value_table[i][j] = 0
            } else if (text1[i - 1] == text2[j-1]) {
                value_table[i][j] = value_table[i - 1][j - 1] + 1
            } else {
                value_table[i][j] = Math.max(value_table[i-1][j], value_table[i][j - 1])
            }
        }
    }
    return value_table[l1][l2]
};
// @lc code=end
console.log(longestCommonSubsequence("pmjghex", "hafcdq"))
console.log(longestCommonSubsequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd"))
