// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 思路：递归，计算时，每一层递归+1
 */
var maxDepth = function(root) {
    // 方法1:递归
    // 思路：1. root的深度基于Max(left深度，right深度) + 1
    // 2. left深度又基于Max（left-left1深度，left-right深度）+ 1
    // 3. 形成递归...
    // let depth = node => {
    //     if (node === null) return 0

    //     let leftDepth = depth(node.left)
    //     let rightDepth = depth(node.right)
    //     return Math.max(leftDepth, rightDepth) + 1 // 关键递归点
    // }
    // return depth(root)

    // 方法1.1：写法更简洁而已，等价于以上代码
    // return root === null
    //     ? 0
    //     : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

    // -----------------------------------------------
    // // 方法二：队列实现广度遍历（空间换时间）
    // // 使用两个变量记录状态
    // if (root == null) return 0

    // let queue = [] // 序列能保证按照广度优先排序
    // queue.push(root)
    // var preCount = 1 // 前一层拥有的节点数量
    // var nextCount = 0
    // var level = 0 // 结果存储

    // var temp
    // while(temp = queue.shift()) {
    //     preCount--
    //     let { left, right } = temp

    //     if(left) {
    //         queue.push(left)
    //         nextCount++
    //     }
    //     if (right) {
    //         queue.push(right)
    //         nextCount++
    //     }

    //     // 前一层都pop完了
    //     if (preCount === 0) {
    //         preCount = nextCount // preCount重置为下个层数量
    //         nextCount = 0
    //         level++
    //     }
    // }
    // return level

    // 方法二：队列实现广度遍历（不用变量版）
    if (root == null) return 0

    let queue = [] // 序列能保证按照广度优先排序
    queue.push(root)
    let level = 0 // 结果存储

    let len
    while(len = queue.length) {
        for(let i = 0; i< len; i++) {
            let { left, right } = queue.shift()
            left && queue.push(left)
            right && queue.push(right)
        }
        level++
    }
    return level
};
// @lc code=end

