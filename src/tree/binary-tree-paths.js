// 给定一个二叉树，返回所有从根节点到叶子节点的路径。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]

// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-paths
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 * 思路：深度遍历-递归
 */
var binaryTreePaths = function(root) {
    if (root === null) return []

    let result = []
    let deepSearch = (node, arr, str) => {
        if(node === null) return

        let { left, right, val} = node
        str += val // 每次路径都存储
        if (left == null && right == null) {
            arr.push(str) // 叶子节点直接push进结果集
        } else {
            deepSearch(left, arr, str + '->')
            deepSearch(right, arr, str + '->')
        }
    }
    deepSearch(root, result, '')
    return result
};
// @lc code=end

