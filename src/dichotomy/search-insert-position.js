// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-insert-position
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 思路：由于是排好序列的数组，所以可以使用二分法
 */
var searchInsert = function(nums, target) {
    var left = 0
    var right = nums.length - 1
    while (left <= right) {
        var middle = Math.floor((left + right) / 2)
        var midValue = nums[middle]
        if (midValue === target) return middle
        if (midValue > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return left
};