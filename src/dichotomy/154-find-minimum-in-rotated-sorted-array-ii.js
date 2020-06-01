// 154. 寻找旋转排序数组中的最小值 II
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 注意数组中可能存在重复的元素。

// 示例 1：

// 输入: [1,3,5]
// 输出: 1
// 示例 2：

// 输入: [2,2,2,0,1]
// 输出: 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) >> 1)
        if (nums[left] === nums[mid]) {
            left++
            continue
        }
        if (nums[left] < nums[mid]) {
            // 在前半段中（因为递增），则最小值不在这段
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left]
};

console.log(findMin([1,3,5]))
console.log(findMin([2,2,2,0,1]))
