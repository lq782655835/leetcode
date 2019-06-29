// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 说明:

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 解题思路：对num1循环，循环的每项看是否在num2中存在
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */
var intersection = function(nums1, nums2) {
    let intersectionArr = nums1.reduce((total, current) => {
        return nums2.indexOf(current) > -1 ? total.concat(current) : total
    },[])
    return [...new Set(intersectionArr)]
};

console.log(intersection([1,2,2,1], [2, 2]))