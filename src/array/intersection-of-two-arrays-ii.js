// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
// 我们可以不考虑输出结果的顺序。
// 进阶:

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 解题思路：暴力拆解，分别计算每项值，在两个数组中重复的次数，取小值。
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 */
var intersect = function(nums1, nums2) {
    var obj = {}
    nums1.forEach((item, index) => {
        if (!obj[item]) {
            let num1Repeat = repeatCount(nums1, item)
            let num2Repeat = repeatCount(nums2, item)
            if (num1Repeat > 0 && num2Repeat > 0) {
                obj[item] = Math.min(num1Repeat, num2Repeat)
            }
        }
    })

    var result = []
    Object.keys(obj).forEach(key => {
        result = result.concat(Array(obj[key]).fill(key))
    })
    return result
};

function repeatCount(arr, num) {
    return arr.reduce((repeat, cur) => {
        return num === cur ? ++repeat : repeat
    },0)
}

console.log(intersect([1,2,2,1], [2, 2]))