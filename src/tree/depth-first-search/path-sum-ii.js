// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root == null) return []

    let result = []
    let calc = (node, rest, pathArr) => {
        if (node == null) return

        let { left, right, val } = node
        rest -= val
        pathArr.push(val)
        if (left == null && right == null) {
            // 叶子节点
            if (rest === 0) {
                result.push(pathArr)
            }
        } else {
            // 注意以下传递的是数组的副本
            // js中数组是引用类型
            calc(left, rest, [...pathArr])
            calc(right, rest, [...pathArr])
        }
    }

    calc(root, sum, [])
    return result
};
// @lc code=end

