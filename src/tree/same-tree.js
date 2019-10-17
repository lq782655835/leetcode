// 给定两个二叉树，编写一个函数来检验它们是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例 1:

// 输入:       1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// 输出: true
// 示例 2:

// 输入:      1          1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// 输出: false
// 示例 3:

// 输入:       1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// 输出: false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/same-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 方法一：递归
    // let same = (node1, node2) => {
    //     if (node1 && node2) {
    //         if(node1.val === node2.val) {
    //             return same(node1.left, node2.left) && same(node1.right, node2.right)
    //         }
    //         return false
    //     } else {
    //         return !(node1 || node2)
    //     }
    // }
    // return same(p, q)

    // verison 2：优化写法
    // if (p && q) {
    //     let { left, right, val} = p
    //     let { left: oLeft, right: oRight, val: oVal} = q
    //     if (val === oVal) {
    //         // 核心：比较left和right是否也相同
    //         return isSameTree(left, oLeft) && isSameTree(right, oRight)
    //     }
    //     return false
    // } else {
    //     return !(p||q)
    // }

    // version 3：优化写法，更易懂
    if (p === null && q === null) return true

    if (p!==null && q!==null && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    } else {
        return false
    }
};
// @lc code=end

