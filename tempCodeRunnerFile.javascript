/**
 * @param {number} x
 * @return {number}
 * 思路：二分法，int最大开根号也就46340.9，从0~46340之间找到n，n的平方小于x，n+1的平方大于x，就好
 */
var mySqrt = function(x) {
    var left = 0
    var right = 46340
    if (x >= right * right) return right
    
    while(3) {
        var middle = (left + right) / 2
        if (middle * middle <= x && right * right > x) {
            if (left === right || left === right - 1) break
            left = middle
        } else {
            right = middle
        }
    }
    return left
};

console.log(mySqrt(4))