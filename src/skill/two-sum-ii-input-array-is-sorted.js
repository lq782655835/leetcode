// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

// 说明:

// 返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
// 示例:

// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 思路：将index1 + index2 = target的问题，变为index1 = target - index2问题
 */
var twoSum = function(numbers, target) {
    let obj = {}
    for(let i = 0; i < numbers.length; i++) {
       let cur =  numbers[i]
       if (obj[cur] !== undefined) {
           return [obj[cur] + 1, i + 1]
       }
       obj[target - cur] = i // 关键代码，记录需要数的index
    }
    return obj

    // // 方法二：由于只有唯一答案，并且针对已经排序，可以使用二分法
    // let left = 0
    // let right = numbers.length - 1
    // while(left <= right) {
    //     if (numbers[left] + numbers[right] === target) return [left + 1, right + 1]
    //     if (numbers[left] + numbers[right] > target) {
    //         right--
    //     } else {
    //         left++
    //     }
    // }
};