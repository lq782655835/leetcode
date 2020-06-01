// 81. 搜索旋转排序数组 II
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

// 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

// 示例 1:

// 输入: nums = [2,5,6,0,0,1,2], target = 0
// 输出: true
// 示例 2:

// 输入: nums = [2,5,6,0,0,1,2], target = 3
// 输出: false
// 进阶:

// 这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0, right= nums.length -1
    while(left <= right) {
        console.log(left, right)
        let mid = Math.floor((left + right) >> 1)
        if (nums[mid] === target) return true
        // 重复的值处理
        if (nums[left] === nums[mid]) {
            left++
            continue
        }

        // [6, 7], [1, 3, 5]
        if (nums[left] < nums[mid]) {
            // mid落在第一部分
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // mid落在第二部分
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid -1
            }
        }
    }

    return false
};

console.log(search([2,5,6,0,0,1,2], 0))
console.log(search([2,5,6,0,0,1,2], 3))
console.log(search([5,1,3], 3))
