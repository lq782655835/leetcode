// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 解题思路：循环数组，当未匹配到时，则用object记录target与当前值的差值，下个循环中比对是否匹配，匹配直接返回下标。
 * https://leetcode-cn.com/problems/two-sum/
 */
var twoSum = function(nums, target) {
    // // 952s
    // return solution1(...arguments)

    // 52ms
    return solution2(...arguments)
}

let solution2 = (nums, target) => {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (hash[num] != undefined) {
            return [hash[num], i]
        } else {
            hash[target - num] = i // 未匹配到则记录剩余值，并存好当前下标
        }
    }
    return []
}

let solution1 = (nums, target) => {
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length; j > 0; j--) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
    return []
}

let result = twoSum([2, 7, 11, 15], 9)
console.log(result)
