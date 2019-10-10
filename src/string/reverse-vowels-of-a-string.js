// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

// 示例 1:

// 输入: "hello"
// 输出: "holle"
// 示例 2:

// 输入: "leetcode"
// 输出: "leotcede"
// 说明:
// 元音字母不包含字母"y"。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string}
 * 思路：使用双指针法，left和right两边向中间靠拢。获取到同时有left和right元音字母，对调即可。
 */
var reverseVowels = function(s) {
    let vovel = ['a', 'e', 'i', 'o', 'u']
    vovel = vovel.concat(vovel.map(s => s.toUpperCase()))
    
    let left = 0
    let right = s.length - 1
    let letter = s.split('')
    
    while(left < right) {
        while(left < right && !vovel.includes(letter[left])) {
            left++
        }
        while(left < right && !vovel.includes(letter[right])) {
            right--
        }
        if (left < right) {
            // 双指针都指向元音字符，交换位置
            let temp = s[left]
            letter[left] = letter[right]
            letter[right] = temp
            
            // 继续循环
            left++
            right--
        }
    }
    return letter.join('')
};