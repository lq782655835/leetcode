// 给定一个二叉树，返回它的 后序 遍历。

// 示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [3,2,1]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    // // 方法一：后序遍历递归
    // if(root == null) return []

    // let result = []
    // let order = (node, arr) => {
    //     if (node == null) return

    //     let { left, right, val } = node
    //     order(left, arr)
    //     order(right, arr)
    //     arr.push(val)
    // }
    // order(root, result)
    // return result

    // 方法二：栈实现后序遍历： 左子树-右子树-根节点
    if (root === null) return []

    let stack = [root]
    let result = []
    while(stack.length) {
        let { left, right, val } = stack.pop()
        // 由于最后还要逆序排一次，所以优先left入栈
        left && stack.push(left)
        right && stack.push(right)
        result.unshift(val) // 逆序加入
    }
    return result
};
// @lc code=end

