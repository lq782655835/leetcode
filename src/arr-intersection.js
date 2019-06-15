// https://leetcode-cn.com/problems/intersection-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * indexOf判断是否重复
 */
var intersection = function(nums1, nums2) {
    let intersectionArr = nums1.reduce((total, current) => {
        return nums2.indexOf(current) > -1 ? total.concat(current) : total
    },[])
    return [...new Set(intersectionArr)]
};

console.log(intersection([1,2,2,1], [2, 2]))