// 153. 寻找旋转排序数组中的最小值
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 你可以假设数组中不存在重复元素。

// 示例 1:

// 输入: [3,4,5,1,2]
// 输出: 1
// 示例 2:

// 输入: [4,5,6,7,0,1,2]
// 输出: 0


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0]

    let left = 0, right = nums.length - 1
    while(left <= right) {
        let middle = Math.floor((left + right) >> 1)

        // 以下跳出方案都行：
        // if (nums[middle+1] < nums[middle]) return nums[middle+1] // 后一项比前一项小
        if (nums[left] <= nums[right]) { // 如果 [left,right] 递增，直接返回（记住起始：因为翻转，第一段一定比第二段值高）
            return nums[left]
        }

        // 逐渐收敛
        // 若 nums[left] <= nums[mid]，说明区间 [left,mid] 连续递增，则最小元素一定不在这个区间里，可以直接排除（重点！！！）。因此，令 left = mid+1，在 [mid+1,right] 继续查找
        // 否则，说明区间 [left,mid] 不连续，则最小元素一定在这个区间里。因此，令 right = mid，在 [left,mid] 继续查找
        // [left,right] 表示当前搜索的区间。注意 right 更新时会被设为 mid 而不是 mid-1，因为 mid 无法被排除。这一点和「33 题 查找特定元素」是不同的
        if (nums[middle] >= nums[left]) left = middle + 1 // [left,mid] 连续递增，则在 [mid+1,right] 查找
        else right = middle // [left,mid] 不连续，在 [left,mid] 查找
    }
    return -1
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([4,5,1,2,3]))