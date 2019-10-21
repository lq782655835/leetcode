// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// 返回 false 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/balanced-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let height = (node) => {
        if (node === null) return 0

        let leftHeight = height(node.left)
        let rightHeight = height(node.right)
        // -1表示子树已经不平衡了,每次循环都返回-1
        if (leftHeight < 0 || rightHeight < 0) return -1
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1
        }

        return Math.max(leftHeight, rightHeight) + 1
    }

    return height(root) >=0

    // // 以下是审题错误导致代码有问题，错误测试用例 :[1,2,2,3,null,null,3,4,null,null,4]
    // if (root === null) return true

    // let getTreeDeep = (node) => {
    //     if (node === null) return 0
    //     return Math.max(getTreeDeep(node.left), getTreeDeep(node.right)) + 1
    // }
    // let leftMaxDeep = getTreeDeep(root.left)
    // let rightMaxDeep = getTreeDeep(root.right)
    // return Math.abs(leftMaxDeep - rightMaxDeep) <= 1
};
// @lc code=end

