// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @param {TreeNode} root
 * @return {number[][]}
 * 思路：基于队列的广度优先
 */
var levelOrderBottom = function(root) {
    if (root === null) return []

    let result = []
    let queue = [root] // 先进先出，push进去，shift出来
    let len
    while(len = queue.length) {
        let levelArr = [] // 每一层的值存储
        for (var i = 0; i < len; i++) {
            let { left, right, val } = queue.shift()
            levelArr.push(val)
            left && queue.push(left)
            right && queue.push(right)
        }
        result.unshift(levelArr)
    }
    return result
};
// @lc code=end

