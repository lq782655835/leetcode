
// https://leetcode.com/problems/two-sum/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
var twoSum = function(nums, target) {
    // // 952s
    // return solution1(...arguments)

    // 52ms
    return solution2(...arguments)
};

let solution2 = (nums, target) => {
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        if (hash[num] != undefined) {
            return [hash[num], i]
        } else {
            hash[target - num] = i
        }
    }
    return []
}

let solution1 = (nums, target) => {
    for (var i= 0; i < nums.length; i++) {
        for (var j = nums.length; j > 0; j--) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
    return []
}

let result = twoSum([2,7,11,15], 9)
console.log(result)