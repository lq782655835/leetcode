// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:

// 给定有序数组: [-10,-3,0,5,9],

// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 思路：中序查询的逆操作
 * 中间节点作为子树根节点，左右等分建立左右子树，递归该过程
 */
var sortedArrayToBST = function(nums) {
    let bstByMiddle = (nums, left, right) => {
        if (left > right) return null

        let middle = Math.floor((right + left) / 2)
        let node = new TreeNode(nums[middle])

        node.left = bstByMiddle(nums, left, middle - 1)
        node.right = bstByMiddle(nums, middle + 1, right)
        return node
    }

    return nums ? bstByMiddle(nums, 0, nums.length - 1) : null
};
// @lc code=end