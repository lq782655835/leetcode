# 双指针技巧总结

双指针技巧再分为两类，一类是「快慢指针」，一类是「左右指针」（也叫对撞指针）。**前者解决主要解决链表中的问题，比如典型的判定链表中是否包含环；后者主要解决数组（或者字符串）中的问题，比如二分查找。**

* [双指针技巧总结](https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/shuang-zhi-zhen-ji-qiao)

## 左右指针

一般针对已经排好序的数组。

二分法是左右指针的一个子集，二分法套路。

> 二分法注意是left <= right,别忘了等于号

``` js
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

题解文章推荐：

* [一文解决 4 道「搜索旋转排序数组」题！](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/yi-wen-jie-jue-4-dao-sou-suo-xuan-zhuan-pai-xu-s-3/)
    * LeetCode 33 题：搜索旋转排序数组
    * LeetCode 81 题：搜索旋转排序数组-ii
    * LeetCode 153 题：寻找旋转排序数组中的最小值
    * LeetCode 154 题：寻找旋转排序数组中的最小值-ii
