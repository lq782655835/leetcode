# LeetCode算法题解

个人算法实践，详细注释，提供多种解体方案和思路。

## 二分查找

二分法一般针对已经`排好序的数组`。

``` js
// 二分法套路
function dichotomy() {
    // 左边界
    var left ...
    // 右边界
    var right ...
    // 记录答案
    var ans
    while(left <= right) {
        // 中间值
        var middle = Math.floor((left + right) / 2)
        // 猜测是否满足条件
        if (guess(middle, ...)) {
            // 如果满足条件，记录答案
            ans = middle
            // 缩小搜索范围，在更小的值中搜索
            right = middle - 1
        } else  {
            // 在更大的值中搜索
            left = middle + 1
        }
    }
    return ans
}
```

算法题
* [二分查找](./src/dichotomy/binary-search.js)
* [搜索插入位置](./src/dichotomy/search-insert-position.js)
* [x 的平方根](./src/dichotomy/sqrtx.js)
* [第一个错误的版本](./src/dichotomy/first-bad-version.js)
* [寻找比目标字母大的最小字母](./src/dichotomy/find-smallest-letter-greater-than-target.js)

## 技巧题

许多算法题，除了数据结构外，还有许多是解题思路。换个思维方式或许有更多解法。

算法题
* [两数之和](./src/skill/two-sum.js)
* [两数之和 II - 输入有序数组](./src/skill/two-sum-ii-input-array-is-sorted.js)
* [回文数](./src/skill/palindrome-number.js)
* [验证回文串](./src/skill/valid-palindrome.js)
* [反转字符串](./src/skill/reverse-string.js)