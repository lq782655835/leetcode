// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/symmetric-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    // 递归
    let same = (node1, node2) => {
        if(node1 == null && node2 == null) return true
        if (node1 == null|| node2 == null) return false
        if (node1.val == node2.val) {
            // 关键代码，对称时，互相left和right一定相同
            return same(node1.left, node2.right) && same(node1.right, node2.left)
        }
        return false
    }
    return same(root, root) // 技巧，两个root对比

    // // 层序遍历，然后检查每一层是不是回文数组
    // if (root === null) return true

    // let queue = [root]
    // let len
    // while(len = queue.length) {
    //     let levelArr = []
    //     for (let i = 0; i< len; i++) {
    //         let { left, right, val='null' } = queue.shift() || {}
    //         levelArr.push(val)
    //         if (left || right) {
    //             queue.push(left, right)
    //         }
    //     }// [1,2,2,null,3,3]
    //     if (levelArr.join('') !== levelArr.reverse().join('')) { // 语法注意：reverse会原地修改数组
    //         return false
    //     }
    // }
    // return true
};
