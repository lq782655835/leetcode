// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // // 方法一：递归思路：
    // if(root == null) return []

    // let result = []
    // let order = (node, arr) => {
    //     if (node == null) return

    //     let { left, right, val } = node
    //     order(left, arr)
    //     arr.push(val)
    //     order(right, arr)
    // }
    // order(root, result)
    // return result

    // 方法二：栈实现中序遍历。 左子树 - 根节点 - 右子树
    if (root === null) return []

    let stack = []
    let currentNode = root
    let result = []
    while(currentNode || stack.length) {
        if (currentNode) {
            // left一直入栈，直到没有左子节点
            stack.push(currentNode)
            currentNode = currentNode.left
        } else {
            // 左子节点全部入栈后，开始出栈展示
            // 出栈后查看当前节点右子节点，有则入栈；没有继续上一层出栈
            currentNode = stack.pop()
            result.push(currentNode.val)
            currentNode = currentNode.right // 关键
        }
    }
    return result
};
// @lc code=end

