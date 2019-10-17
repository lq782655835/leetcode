// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最小深度  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    // // 方法一：递归
    // if (root === null) return 0

    // let { left, right } = root
    // let leftDepth = minDepth(left)
    // let rightDepth = minDepth(right)
    // // 此时递归条件，是根据left、right有无来处理
    // if (left && right) {
    //     return Math.min(leftDepth, rightDepth) + 1
    // } else {
    //     // 核心：left或right不存在，其中一个必为0
    //     // 处理没有left或right时，以另外一个分支的depth为准
    //     return (leftDepth + rightDepth) + 1
    // }

    // 队列实现广度遍历
    if (root == null) return 0

    let queue = [] // 序列能保证按照广度优先排序
    queue.push(root)
    let level = 0 // 结果存储

    let len
    while(len = queue.length) {
        for(let i = 0; i< len; i++) {
            let { left, right } = queue.shift()
            if (left == null && right == null) {
                return level + 1
            }
            left && queue.push(left)
            right && queue.push(right)
        }
        level++
    }
    return level
};
// @lc code=end