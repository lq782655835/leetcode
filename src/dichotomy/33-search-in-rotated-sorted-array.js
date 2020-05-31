// 33. 搜索旋转排序数组
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:

// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1

    // // 方法一：最简单的做法, 先找到最值将旋转数组分成两段有序数组，接下来在有序数组中找目标值就轻车熟路了。
    // let peekIndex = findPeekIndex(nums) // 寻找峰值项索引

    // // 根据处在不同的阶段，二分搜索
    // if (nums[0] <= target && nums[peekIndex] >= target) {
    //     return binarySearch(nums, 0, peekIndex, target)
    // } else {
    //     return binarySearch(nums, peekIndex + 1, nums.length - 1, target)
    // }

    // 方法二：先根据 nums[mid] 与 nums[lo] 的关系判断 mid 是在左段还是右段，接下来再判断 target 是在 mid 的左边还是右边，从而来调整左右边界 lo 和 hi。
    // 思路：在旋转排序数组中查找一个特定元素时：
        // 若 target == nums[mid]，直接返回
        // 若 nums[left] <= nums[mid]，说明左侧区间 [left,mid]「连续递增」。此时：
            // 若 nums[left] <= target <= nums[mid]，说明 target 位于左侧。令 right = mid-1，在左侧区间查找
            // 否则，令 left = mid+1，在右侧区间查找
        // 否则，说明右侧区间 [mid,right]「连续递增」。此时：
            // 若 nums[mid] <= target <= nums[right]，说明 target 位于右侧区间。令 left = mid+1，在右侧区间查找
            // 否则，令 right = mid-1，在左侧区间查找
        // 注意：区间收缩时不包含 mid，也就是说，实际收缩后的区间是 [left,mid) 或者 (mid,right]

    while (left <= right) {
        let middle = Math.floor((left + right) >> 1)
        if (nums[middle] === target) return middle

        // 题目意思：分成两段，而且第一段值较大。 eg: [6, 7] , [0, 1, 2]
        if (nums[left] <= nums[middle]) {
            // 说明middle在第一段
            if (nums[left] <= target && target <= nums[middle]) {
                right = middle - 1 // 这样排除右段一半
            } else {
                left = middle + 1
            }
        } else {
            // middle在第二段
            if (nums[middle] <= target && target <= nums[right]) {
                left = middle + 1 // 排除左段一半
            } else {
                right = middle - 1
            }
        }
    }
    return -1
};

function findPeekIndex(nums) {
    let left = 0, right = nums.length -1 
    while(left <= right) {
        let middle = Math.floor((left + right) / 2)
        // 大于下一项时，一定是顶峰索引
        if (nums[middle] > nums[middle + 1]) return middle
        // 关键：两段递增arr，中点大于左边时（表明middle在第一个递增arr），left增加
        if (nums[middle] >= nums[left]) left = middle + 1
        else right = middle -1
    }
    return 0
}

function binarySearch(nums, left, right, target) {
    while(left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) return middle
        if (nums[middle] < target) left = middle + 1
        else right = middle - 1
    }
    return - 1
}

console.log(search([3, 1], 1))