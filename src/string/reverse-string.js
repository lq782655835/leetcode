// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 反转
 * https://leetcode-cn.com/problems/reverse-string/
 */
var reverseString = function(s) {
    // 一：取中间值，判断一半
    // let middleIndex = Math.floor(s.length / 2)
    // for (let i = 0; i < s.length; i++) {
    //     if (i < middleIndex) {
    //         swap(i, s.length - i - 1, s)
    //     }
    // }
    // return s
    // 二：更优，下标分别加和减
    for (let i = 0, j = s.length - 1; i < j;i++,j--) {
        swap(i, j, s)
    }
    return s
};

function swap(x, y, s) {
    let temp = s[x]
    s[x] = s[y]
    s[y] = temp
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))