// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 示例:

// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/decode-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string}
 * 思路：如果遇到 ']'，就一直在栈中找到 '['，将之间的字符连接起来，
 * 将 '['前面的数字连接起来作为出现次数再次压栈，遇到数字、字母、'['就直接压栈，
 * 最后将栈里的字符串弹出连接起来就ok了
 */
var decodeString = function(s) {
    if(s == null) return ''

    let stack = [] // 基于栈
    s.split('').forEach(c => {
        if (c === ']') {
            let repeatStr = '' 
            let repeatNum = '' 
            let popChar
            
            // 计算重复值
            while((popChar = stack.pop()) !== '[') {
                repeatStr = popChar + repeatStr
            }
            
            // 计算重复次数
            // 注意此时的while内不能pop，符合条件的才能在while循环里面再pop
            while((popChar = stack[stack.length - 1]) >= '0' && popChar <= '9') {
                repeatNum = stack.pop() + repeatNum
            }
            stack.push(Array(+repeatNum).fill(repeatStr).join(''))
        } else {
            stack.push(c)    
        }
        
    })
    return stack.join('')
};