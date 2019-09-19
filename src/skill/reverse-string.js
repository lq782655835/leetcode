// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

//  

// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 示例 2：

// 输入：["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 思路：双向指针，每次左右都前进一位，互换位置即可。
 */
var reverseString = function(s) {
    let i = 0
    let j = s.length - 1
    while(i<j) {
        swap(i, j, s)
        i++
        j--
    }
    return s
};

function swap(x, y, s) {
    let temp = s[x]
    s[x] = s[y]
    s[y] = temp
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))