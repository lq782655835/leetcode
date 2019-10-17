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

* [二分查找](./src/dichotomy/binary-search.js)<sup>折半搜索</sup>
* [搜索插入位置](./src/dichotomy/search-insert-position.js)
* [x 的平方根](./src/dichotomy/sqrtx.js)
* [第一个错误的版本](./src/dichotomy/first-bad-version.js)
* [寻找比目标字母大的最小字母](./src/dichotomy/find-smallest-letter-greater-than-target.js)

## 递归

递归，需要想好跳出递归的条件

* [两数的最大公约数](./src/recursion/max-common-divisor.js)<sup>递归</sup>

## 技巧题

许多算法题，除了数据结构外，还有许多是解题思路。换个思维方式或许有更多解法。

* [两数之和](./src/skill/two-sum.js)
* [两数之和 II - 输入有序数组](./src/skill/two-sum-ii-input-array-is-sorted.js)
* [回文数](./src/skill/palindrome-number.js)
* [验证回文串](./src/skill/valid-palindrome.js)
* [反转字符串](./src/skill/reverse-string.js)
* [排列硬币]('./src/skill/arranging-coins.js)

## String

* [实现strStr()](./src/string/implement-strstr.js) 即实现js中indexOf
* [反转字符串中的元音字母](./src/string/reverse-vowels-of-a-string.js)<sup>双指针法</sup>

## 二叉树

* [二叉树的最大深度](./src/tree/maximum-depth-of-binary-tree.js)<sup>递归BFS</sup><sup>队列BFS</sup>
* [二叉树的最小深度](./src/tree/minimum-depth-of-binary-tre.js)<sup>递归BFS</sup><sup>队列BFS</sup>
