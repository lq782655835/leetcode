// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 解题思路：由于已排序，所以可以使用二分法。这里是求下标，所以可以利用中间值下标，每次对比都更新left/right。
 * https://leetcode-cn.com/problems/binary-search/
 */
var search = function(nums, target) {
    var left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) right = mid - 1
        else left = mid + 1
    }
    return -1
};

console.log(search([9], 9))