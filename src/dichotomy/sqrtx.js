// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:

// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sqrtx
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 方法一：暴力+1
    // var sqrt = 0
    // while((sqrt* sqrt) <= x) {
    //     sqrt += 1
    // }
    // return sqrt - 1
    
    // 方法二： 二分法，依次取1和x的中间值，判断平方值是否大于x，小于则left提高，大于则right减小
    if(x === 0) return 0
    var left = 1
    var right = x
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (mid <= x / mid) { // 使用除号，是因为防止int最大值边界
            ans = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return ans
};