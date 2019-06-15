/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 暴力拆解：分别计算每项值，在两个数组中重复的次数，取小值。
 */
var intersect = function(nums1, nums2) {
    var obj = {}
    nums1.forEach((item, index) => {
        if (!obj[item]) {
            let num1Repeat = repeatCount(nums1, item)
            let num2Repeat = repeatCount(nums2, item)
            if (num1Repeat > 0 && num2Repeat > 0) {
                obj[item] = Math.min(num1Repeat, num2Repeat)
            }
        }
    })

    var result = []
    Object.keys(obj).forEach(key => {
        result = result.concat(Array(obj[key]).fill(key))
    })
    return result
};

function repeatCount(arr, num) {
    return arr.reduce((repeat, cur) => {
        return num === cur ? ++repeat : repeat
    },0)
}

console.log(intersect([1,2,2,1], [2, 2]))