// 给定一个二叉树，返回它的 前序 遍历。

//  示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    // 方法一：前序遍历递归
    // if(root == null) return []

    // let result = []
    // let order = (node, arr) => {
    //     if (node == null) return

    //     let { left, right, val } = node
    //     arr.push(val)
    //     order(left, arr)
    //     order(right, arr)
    // }
    // order(root, result)
    // return result

    // 方法二： 栈实现DFS
    if (root === null) return []

    let stack = [root]
    let result = []
    while(stack.length) {
        let { left, right, val } = stack.pop()
        result.push(val)
        right && stack.push(right) // 先把right存入栈中
        left && stack.push(left)
    }
    return result

    // 方法三： 变种的栈实现DFS（js语言中，数组同时实现了队列和栈）
    // if(root == null) return []

    // let queue = [root]
    // let result = []
    // while(queue.length) {
    //     let { left, right, val } = queue.shift()
    //     result.push(val)
    //     right && queue.unshift(right)
    //     left && queue.unshift(left)
    // }
    // return result

    // 方法四：通用栈，本质上和方法二是一样的
    // if (root === null) return []

    // let stack = []
    // let currentNode = root
    // let result = []
    // while(currentNode) {
    //     let { left, right, val } = currentNode
    //     result.push(val)
    //     right && stack.push(right) // 先把right存入栈中
    //     if (left) {
    //         currentNode = left // 关键，left一条道走到黑
    //     } else {
    //         currentNode = stack.pop()
    //     }
    // }
    // return result
};
// @lc code=end
