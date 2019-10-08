// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

// 给定一个数字 n，找出可形成完整阶梯行的总行数。

// n 是一个非负整数，并且在32位有符号整型的范围内。

// 示例 1:

// n = 5

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤

// 因为第三行不完整，所以返回2.
// 示例 2:

// n = 8

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// 因为第四行不完整，所以返回3.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/arranging-coins
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} n
 * @return {number}
 * 思路：因为阶梯数是1，2，3，4。。。这种顺序，跟i++一致。
 */
var arrangeCoins = function(n) {
    //     // 方法一：每次相减
    //     let ans = 0
    //     let i = 1
        
    //     while(n > 0) {
    //         n -= i // 每次剪掉一层的数
    //         if (n < i + 1) {
    //             // 小于下一层时就是目标数
    //             ans = i
    //             break
    //         }
    //         i++
    //     }
    //     return ans
        
        // 方法二：每次相加i，大于目标n时，n - 1就是循环次数
    //     if (n <= 1) return n
    
    //     let sum = 0
    //     let i = 1
    //     while(n > i) {
    //         sum += i
    //         if (sum > n) break
    //         i++ // 循环了多少次
    //     }
    //     return i - 1
        // 方法三：优化，更简便写法
        let i = 1
        while(n >= i) { // n - i大于0时，继续减，直到跳出循环
            n -= i
            i++
        }
        return i - 1
    };