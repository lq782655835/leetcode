/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分法，二分下标
 */
var search = function(nums, target) {
    // return nums.indexOf(target) // 原生js api解法

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